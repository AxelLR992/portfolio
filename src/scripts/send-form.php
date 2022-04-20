<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

$json = file_get_contents('php://input');
$data = json_decode($json);

$token = $data->token;

# Google ReCaptcha v3 validation
if (!isset($token)) {
    $resp->error = true;
    $resp->message = "The token was not received.";
    http_response_code(400);
    echo json_encode($resp);
    return;
}

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, "https://www.google.com/recaptcha/api/siteverify");
curl_setopt($ch, CURLOPT_POST, 1);
# Reemplaza "secret-key" con la llave correcta.
curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query(array('secret' => "secret-key", 'response' => $token)));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
curl_close($ch);

$arrResponse = json_decode($response, true);

if ($arrResponse["success"] == '1' && $arrResponse["score"] >= 0.5) {
    # Form handling
    try {
        $full_name = htmlspecialchars($data->fullName);
        $email = htmlspecialchars($data->email);
        $subject = htmlspecialchars($data->subject);
        $message = htmlspecialchars($data->message);

        $for = "axel.leon@nodeaxan.com";
        $html_template = fopen("./email-form-template.html", "r") or die("Unable to open template!");
        $html_content = fread($html_template, filesize("./email-form-template.html"));
        $html_content = str_replace("{{fullName}}", $full_name, $html_content);
        $html_content = str_replace("{{email}}", $email, $html_content);
        $html_content = str_replace("{{subject}}", $subject, $html_content);
        $html_content = str_replace("{{message}}", $message, $html_content);

        $headers  = 'MIME-Version: 1.0' . "\r\n";
        $headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";

        mail($for, $subject, $message, $headers);

        $resp->error = false;
        $resp->message = "Form sent successfully";
        http_response_code(200);
        echo json_encode($resp);
        return;
    } catch (Exception $e) {
        $resp->error = true;
        $resp->message = $e->getMessage();
        http_response_code(500);
        echo json_encode($resp);
    }
} else {
    $resp->error = true;
    $resp->message = "Invalid recaptcha request. Bots are near.";
    http_response_code(200);
    echo json_encode($resp);
    return;
}

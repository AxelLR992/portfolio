import {
  mdiAlertCircleOutline,
  mdiCheckCircleOutline,
  mdiClose,
  mdiCloseCircleOutline,
  mdiInformationOutline,
} from "@mdi/js";
import Icon from "@mdi/react";
import React, { FunctionComponent, useEffect, useState } from "react";
import "../assets/styles/alert.scss";

interface IAlertProps {
  severity: "error" | "success" | "info" | "warning";
  message: string;
  visible?: boolean;
  className?: string;
  onClose?: () => void;
}

const Alert: FunctionComponent<IAlertProps> = ({
  severity,
  message,
  visible = true,
  className = "",
  onClose,
}) => {
  const [visibility, setVisibility] = useState(visible);

  useEffect(() => {
    setVisibility(visible);
  }, [visible]);

  const getClassName = () => {
    if (severity === "error") return "alert-error";
    if (severity === "success") return "alert-success";
    if (severity === "info") return "alert-info";
    if (severity === "warning") return "alert-warning";
    return "";
  };

  const getIcon = () => {
    if (severity === "error") return mdiCloseCircleOutline;
    if (severity === "success") return mdiCheckCircleOutline;
    if (severity === "info") return mdiInformationOutline;
    if (severity === "warning") return mdiAlertCircleOutline;
    return "";
  };

  const handleClose = () => {
    setVisibility(false);
    if (onClose) onClose();
  };

  if (!visibility) return null;
  return (
    <div className={`alert ${getClassName()} ${className}`}>
      <Icon className="alert__icon" path={getIcon()} />
      <p className="alert__message">{message}</p>
      <span className="alert__close-icon" onClick={handleClose}>
        <Icon path={mdiClose} />
      </span>
    </div>
  );
};

export default Alert;

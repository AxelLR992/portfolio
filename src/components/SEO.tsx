import { graphql, useStaticQuery } from "gatsby";
import React, { FunctionComponent } from "react";
import { useLocation } from "@reach/router";
import { Helmet } from "react-helmet";

interface ISEOProps {
  title?: string;
  description?: string;
  article?: boolean;
}

const SEO: FunctionComponent<ISEOProps> = ({
  title,
  description,
  article = false,
}) => {
  const { pathname } = useLocation();
  const {
    site: { siteMetadata },
  } = useStaticQuery(query);
  const seo = {
    title: title || siteMetadata.defaultTitle,
    description: description || siteMetadata.defaultDescription,
    url: siteMetadata.siteUrl + pathname,
  };

  return (
    <Helmet title={seo.title}>
      <meta name="description" content={seo.description} />

      {seo.url && <meta property="og:url" content={seo.url} />}
      {(article ? true : null) && <meta property="og:type" content="article" />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}
    </Helmet>
  );
};

export default SEO;

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        siteUrl: url
      }
    }
  }
`;

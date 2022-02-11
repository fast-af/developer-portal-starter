import React from "react";
import { StaticQuery, graphql } from "gatsby";
import PropTypes from "prop-types";

export default function HeaderTest() {
  return (
    <StaticQuery
      query={graphql`
        query HeadingQuery {
          site {
            pathPrefix
            host
            siteMetadata {
              siteUrl
            }
          }
        }
      `}
      render={(data) => (
        <div>
          <h1>{data.site.siteMetadata.title}</h1>
          <h2>{data.site.pathPrefix}</h2>
          <h3>{data.site.host}</h3>
        </div>
      )}
    />
  );
}
/**
const HeaderTest = ({ data }) => (
  <header>
    <h1>{data.site.siteMetadata.siteUrl}</h1>
    <h2>{data.site.siteMetadata.siteUrl}</h2>
    <h3>{data.site.siteMetadata.siteUrl}</h3>
  </header>
);

export default function MyHeader(props) {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            pathPrefix
            host
            siteMetadata {
              siteUrl
            }
          }
        }
      `}
      render={(data) => <HeaderTest data={data} {...props} />}
    />
  );
}
**/

/** 
export default (props) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          pathPrefix
          host
          siteMetadata {
            siteUrl
          }
        }
      }
    `}
    render={(data) => <HeaderTest data={data} {...props} />}
  />
);
**/

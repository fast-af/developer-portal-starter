import { graphql, StaticQuery } from "gatsby";
import React from "react";

const DocsInfo = (props) => {
  const data = props.site;

  return (
    <div>
      {data.siteMetadata.siteUrl}
      {data.pathPrefix}
      {data.host}
    </div>
  );
};
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
    render={(data) => <DocsInfo {...data} />}
  />
);

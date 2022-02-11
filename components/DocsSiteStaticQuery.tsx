import React from "react";
import { StaticQuery, graphql } from "gatsby";
import {
  Button,
  Link,
  usePageData,
  usePathPrefix,
} from "@redocly/developer-portal/ui";

export function UseDocsSiteStaticQuery() {
  const [hasMounted, setHasMounted] = React.useState(false);
  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }
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
    render={(data) => {
      const { siteUrl } = data.site.siteMetadata.siteUrl;
      const { pathPrefix } = data.site.pathPrefix;
      const { host } = data.site.host;

      return (
        <div
          style={{
            display: `flex`,
          }}
        >
          <p>
            {siteUrl}
            {pathPrefix}
            {host}
          </p>
        </div>
      );
    }}
  />;
}

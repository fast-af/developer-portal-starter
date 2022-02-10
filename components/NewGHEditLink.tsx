import React from "react";
import { StaticQuery, graphql } from "gatsby";
import {
  Button,
  Link,
  usePageData,
  usePathPrefix,
} from "@redocly/developer-portal/ui";

const trimSlashes = (str) =>
  str
    .split("/")
    .filter((v) => v !== "")
    .join("/");

export function NewGHEditLink() {
  const [hasMounted, setHasMounted] = React.useState(false);
  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }

  const currentPageId = usePageData().pageId;
  const currentBaseUrl = document.querySelector("nav a").getAttribute("href");
  if (currentBaseUrl) {
    let ghBaseURL = "https://github.com/fast-af/devportal/edit";
    const primaryGHBranch = "master";

    var branch = trimSlashes(currentBaseUrl);
    if (currentBaseUrl.includes("fast.co/docs")) {
      branch = primaryGHBranch;
    } else if (currentBaseUrl.length < 3) {
      branch = "INSERT_BRANCH_NAME";
    } else {
      var pos = branch.lastIndexOf("/") + 1;
      branch = branch.substring(pos, branch.length - pos);
    }
    let ghEditLink =
      trimSlashes(ghBaseURL) +
      "/" +
      trimSlashes(branch) +
      "/" +
      trimSlashes(currentPageId);

    if (currentBaseUrl.includes("preview.redoc.ly")) {
      return <Link to={ghEditLink}>Edit on GitHub for {currentBaseUrl}</Link>;
    } else if (currentBaseUrl.includes("fast.co/docs")) {
      return <Link to={ghEditLink}>Edit on GitHub for {currentBaseUrl}</Link>;
    } else {
      let genericGHEditLink =
        trimSlashes(ghBaseURL) +
        "/" +
        primaryGHBranch +
        "/" +
        trimSlashes(currentPageId);
      return (
        <div>
          <p>
            {" "}
            Cannot Provide Edit on GitHub Link for "{currentBaseUrl}" (likely
            localhost)
          </p>
          <p> Testing pageId: {currentPageId}</p>
          <p> Cannot Provide Edit on GitHub Link for {currentBaseUrl}</p>
          <p>malformed GitHub Edit Link: {ghEditLink}</p>
          <Link to={genericGHEditLink}>
            Generic GitHub Edit Link (will only work if currently available on
            live site)
          </Link>
        </div>
      );
    }
  }
}

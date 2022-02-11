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
  //const currentBaseUrl = document.querySelector("nav a").getAttribute("href");

  let ghBaseURL = "https://github.com/fast-af/devportal/edit";
  const fullURL = document.location.href;
  const currentBaseUrl = document.location.origin;
  const currentPathname = document.location.pathname;

  var ghEditLink = "SOMETHING_WENT_WRONG";

  var currentBaseURI = document.baseURI;

  const primaryGHBranch = "master";

  //var branch = trimSlashes(currentBaseUrl);
  var branch = "INSERT_BRANCH_NAME";

  if (fullURL.includes("fast.co/docs")) {
    branch = primaryGHBranch;

    ghEditLink =
      ghBaseURL + "/" + trimSlashes(branch) + "/" + trimSlashes(currentPageId);

    return <a href={ghEditLink}>Edit on GitHub for {currentBaseUrl}</a>;
  } else if (fullURL.includes("preview.redoc.")) {
    var currentPathPrefix = usePathPrefix();
    branch = trimSlashes(currentPathPrefix.replace("/fastaf/", ""));
    //branch = branch.substring(0, branch.indexOf("/"));

    ghEditLink =
      trimSlashes(ghBaseURL) +
      "/" +
      trimSlashes(branch) +
      "/" +
      trimSlashes(currentPageId);

    //ghEditLink = trimSlashes(fullURL.replace(currentBaseUrl, ghBaseURL));
    //ghEditLink = ghEditLink.replace(currentPathname, currentPageId);
    return (
      <div>
        <a href={ghEditLink}>
          Edit on GitHub Preview Branch for {currentBaseUrl}
        </a>
        <p>baseURI: {currentBaseURI}</p>
        <p> currentPathPrefix: {currentPathPrefix}</p>
        <p> ghEditLink: {ghEditLink}</p>
      </div>
    );
    //var pos = branch.lastIndexOf("/") + 1;
    //branch = branch.substring(pos, branch.length - pos);
  } else {
    ghEditLink =
      trimSlashes(ghBaseURL) +
      "/" +
      trimSlashes(branch) +
      "/" +
      trimSlashes(currentPageId);

    let genericGHEditLink =
      trimSlashes(ghBaseURL) +
      "/" +
      primaryGHBranch +
      "/" +
      trimSlashes(currentPageId);

    var localHostCheck = "may be localhost";
    if (currentBaseUrl.includes("//localhost"))
      localHostCheck = "CONFIRMED_LOCALHOST";

    return (
      <div>
        <p>
          {" "}
          Cannot Provide Edit on GitHub Link for "{currentBaseUrl}" (
          {localHostCheck})
        </p>
        <p> Testing pageId: {currentPageId}</p>
        <p> Cannot Provide Edit on GitHub Link for {currentBaseUrl}</p>
        <p>baseURI: {currentBaseURI}</p>
        <p> currentPathPrefix: {currentPathPrefix}</p>
        <p>malformed GitHub Edit Link: {ghEditLink}</p>
        <a href={genericGHEditLink}>
          Generic GitHub Edit Link (will only work if currently available on
          live site)
        </a>
      </div>
    );
  }
}

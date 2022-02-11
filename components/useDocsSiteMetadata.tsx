import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { useLocation, globalHistory } from "@reach/router";
import {
  Button,
  Link,
  usePageData,
  usePathPrefix,
} from "@redocly/developer-portal/ui";

const UseDocsSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query DocsSiteMetaData {
      site {
        pathPrefix
        host
        siteMetadata {
          siteUrl
        }
      }
    }
  `);

  const trimSlashes = (str) =>
    str
      .split("/")
      .filter((v) => v !== "")
      .join("/");

  const ghRepo = "github.com/fast-af/devportal";
  const redoclyPreviewSite = "preview.redoc.ly/fastaf";
  const redoclyFastDocsProdSite = "fast.co/docs";

  let currentSiteUrl = "data.site.siteMetadata.siteUrl_FAILED";
  if (data) currentSiteUrl = data.site.siteMetadata.siteUrl;

  let pageId = usePageData().pageId;
  //const pathPrefix = usePathPrefix();

  var pathPrefix = "pathPrefix_FAILED";

  let pathPrefixFromConfig = usePathPrefix();

  let pathPrefixFromEnv = process.env.REDOCLY_PREFIX_PATHS;

  if (!pathPrefixFromConfig) {
    pathPrefixFromConfig = "pathPrefixFromConfig_FAILED";
    pathPrefix = pathPrefixFromEnv;
  } else if (!pathPrefixFromEnv) {
    pathPrefixFromEnv = "pathPrefixFromEnv_FAILED";
    pathPrefix = pathPrefixFromConfig;
  }

  /**  if (pathPrefixFromConfig && pathPrefix.length > 0) {
    pathPrefix = pathPrefixFromConfig;
  } else if (pathPrefixFromEnv && pathPrefixFromEnv.length > 0) {
    pathPrefix = pathPrefixFromEnv;
  } else {
    pathPrefix = "";
  }
  **/

  let ghBaseURL = "https://github.com/fast-af/devportal/edit";

  var isDevPortalPage = false;

  var currentLocation = null;
  var useLocationLocation = useLocation();
  var globalHistoryLocation = globalHistory.location;
  var windowLocation = window.location;

  if (useLocationLocation != null) {
    currentLocation = useLocationLocation;
  } else if (globalHistoryLocation != null) {
    currentLocation = globalHistoryLocation;
  } else if (window.location != null) {
    currentLocation = windowLocation;
  }

  //let currentLocation = globalHistory.location;

  //let currentLocation = window.location;

  //let oldStyleLocation = window.location.href;
  //let oldStyleLocation = globalHistory.location.href;
  //let baseURL = globalHistory.location.origin;

  //let oldStylePath = window.location.pathname;
  //let oldStylePath = globalHistory.location.pathname;

  //let oldStyleHost = globalHistory.location.host;

  var baseURL = "baseURL_location_FAILED";
  var oldStylePath = "oldStylePath_location_FAILED";
  var oldStyleHost = "oldStyleHost_location_FAILED";

  let newPath = "newPath_FAILED";
  let branch = "branch_FAILED";
  let buttonMessage = "buttonMessage_FAILED";
  var ghEditLinkTest = "ghEditLinkTest_FAILED";

  if (!isDevPortalPage) {
    baseURL = currentLocation.origin;
    oldStylePath = currentLocation.pathname;
    oldStyleHost = currentLocation.host;
  }
  if (baseURL.includes("preview.redoc.ly")) {
    newPath = oldStylePath.replace("/fastaf/", "");
    newPath = trimSlashes(newPath);
    branch = newPath.split("/")[0].replace("/", "");
    branch = trimSlashes(branch);
    buttonMessage = "Edit Preview Branch on GitHub";
  } else if (baseURL.includes("fast.co/docs")) {
    newPath = oldStylePath.replace("/docs/", "");
    newPath = trimSlashes(newPath);
    branch = "master";
    buttonMessage = "Edit on GitHub";
  } else if (baseURL.includes("localhost")) {
    newPath = trimSlashes(oldStylePath);
    branch = "REPLACE_ME_WITH_HYPHENATED_BRANCH_NAME";
    buttonMessage = "Local Dev Button CANNOT Link to GitHub";
  } else {
    buttonMessage = "SOMETHING_WENT_WRONG";
  }

  //ghEditLinkTest = ghBaseURL + "/" + branch + "/" + newPath + ".mdx";

  if (pathPrefix && pathPrefix.length > 0) {
    branch = trimSlashes(pathPrefix);
  } else {
    branch = "REPLACE_ME_WITH_HYPHENATED_BRANCH_NAME";
  }

  ghEditLinkTest = ghBaseURL + "/" + branch + "/" + pageId;

  //let ghNewEditLink = oldStyleLocation.replace(baseURL, ghBaseURL).replace(oldStylePath, "/" + branch + "/" + newPath + ".mdx");

  return (
    <div style={{ border: "1px solid red", padding: "10px" }}>
      <div style={{ fontSize: "18px", marginBottom: "10px" }}>
        Old Style PATH: <strong>{oldStylePath}</strong>
      </div>
      <div style={{ fontSize: "18px", marginBottom: "10px" }}>
        base URL: <strong>{baseURL}</strong>
      </div>
      <div style={{ fontSize: "18px", marginBottom: "10px" }}>
        new Trimmed Path: <strong>{newPath}</strong>
      </div>

      <Button to={ghEditLinkTest}>{buttonMessage}</Button>
    </div>
  );
};

export default UseDocsSiteMetadata;

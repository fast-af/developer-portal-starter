import * as React from "react";
import { useLocation, globalHistory } from "@reach/router";
import { Link, usePageData, usePathPrefix } from "@redocly/developer-portal/ui";
import useDocsSiteMetadata from "./useDocsSiteMetadata";

const trimSlashes = (str) =>
  str
    .split("/")
    .filter((v) => v !== "")
    .join("/");

export function Test() {
  const data = useDocsSiteMetadata().props;
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

  const pageId =
    usePageData() != null
      ? usePageData().pageId
      : "usePageData().pageId_FAILED";
  let ghBaseURL = "https://github.com/fast-af/devportal/edit";
  let currentHost = data != null ? data.site.host : "data.site.host_FAILED";
  let currentSiteUrl =
    data != null
      ? data.site.siteMetadata.siteUrl
      : "data.site.siteMetadata.siteUrl_FAILED";
  let currentLocationPathName =
    currentLocation != null
      ? currentLocation.pathname
      : "location.pathname_FAILED";

  let pathPrefixFromConfig =
    usePathPrefix() != null
      ? usePathPrefix().toString
      : "pathPrefixFromConfig_FAILED";
  let pathPrefixFromEnv =
    process.env.REDOCLY_PREFIX_PATHS != null
      ? process.env.REDOCLY_PREFIX_PATHS
      : "pathPrefixFromEnv_FAILED";
  let pathPrefixFromGraphQL =
    data != null ? data.site.pathPrefix : "pathPrefixFromGraphQL_FAILED";

  var pathPrefix =
    pathPrefixFromConfig != null
      ? pathPrefixFromConfig
      : pathPrefixFromEnv != null
      ? pathPrefixFromEnv
      : pathPrefixFromGraphQL != null
      ? pathPrefixFromGraphQL
      : "";

  var branch = "REPLACE_ME_WITH_HYPHENATED_BRANCH_NAME";
  var buttonMessage = "BUTTON_MESSAGE_NOT_FILLED";

  if (currentHost.includes("preview.redoc.ly")) {
    //newPath = oldStylePath.replace("/fastaf/", "");
    //newPath = trimSlashes(pageId);
    //branch = newPath.split("/")[0].replace("/", "");
    //branch = trimSlashes(branch);
    branch = pathPrefix.split("/")[0].replace("/", "");
    branch = trimSlashes(branch);
    buttonMessage = "Edit Preview Branch on GitHub";
  } else if (currentHost.includes("fast.co/docs")) {
    //newPath = oldStylePath.replace("/docs/", "");
    //newPath = trimSlashes(newPath);
    branch = "master";
    buttonMessage = "Edit on GitHub";
  } else if (currentHost.includes("localhost")) {
    //newPath = trimSlashes(oldStylePath);
    branch = pathPrefix.split("/")[0].replace("/", "");
    branch = trimSlashes(branch);
    branch = "REPLACE_ME_WITH_HYPHENATED_BRANCH_NAME";
    buttonMessage = "Local Dev Button CANNOT Link to GitHub";
  } else {
    buttonMessage = "SOMETHING_WENT_WRONG";
  }

  //let ghEditLinkTest = "FAILED";
  let ghEditLinkTest = ghBaseURL + "/" + branch + "/" + pageId;

  //<Button to={ghEditLinkTest}>{buttonMessage}</Button>
  //<Link to={canonicalUrl}>Canonical URL</Link>

  const canonicalUrl = currentSiteUrl + currentLocationPathName;
  return (
    <div style={{ border: "1px solid red", padding: "10px" }}>
      <div style={{ fontSize: "18px", marginBottom: "10px" }}>
        pathPrefixFromConfig: <strong>{pathPrefixFromConfig}</strong>
      </div>
      <div style={{ fontSize: "18px", marginBottom: "10px" }}>
        pathPrefixFromEnv: <strong>{pathPrefixFromEnv}</strong>
      </div>
      <div style={{ fontSize: "18px", marginBottom: "10px" }}>
        pathPrefixFromGraphQL: <strong>{pathPrefixFromGraphQL}</strong>
      </div>
      <div style={{ fontSize: "18px", marginBottom: "10px" }}>
        pathPrefix picked with logic: <strong>{pathPrefix}</strong>
      </div>
      <div style={{ fontSize: "18px", marginBottom: "10px" }}>
        base URL (currentHost): <strong>{currentHost}</strong>
      </div>
      <div style={{ fontSize: "18px", marginBottom: "10px" }}>
        path (pageId): <strong>{pageId}</strong>
      </div>
      <div style={{ fontSize: "18px", marginBottom: "10px" }}>
        Assembled GitHub link: <strong>{ghEditLinkTest}</strong>
      </div>
      <div style={{ fontSize: "18px", marginBottom: "10px" }}>
        canonicalUrl using data.site.siteMetadata.siteUrl and location.pathname:{" "}
        <strong>{canonicalUrl}</strong>
      </div>
    </div>
  );
}

//let location = document.querySelector("link[rel='canonical']").href;

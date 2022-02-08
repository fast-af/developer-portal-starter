import * as React from "react";
import { useLocation, globalHistory, ServerLocation } from "@reach/router";
import { PageInfo } from "@redocly/developer-portal/dist/engine/auto-graphql";
import { Button, Link, usePageData } from "@redocly/developer-portal/ui";

export function GHEditLink() {
  const ghRepo = "github.com/fast-af/devportal";
  const redoclyPreviewSite = "preview.redoc.ly/fastaf";
  const redoclyFastDocsProdSite = "fast.co/docs";

  const pageId = usePageData().pageId;

  let ghBaseURL = "https://github.com/fast-af/devportal/edit";

  var currentLocation;

  var isDevPortalPage = false;

  if (pageId && pageId.length > 0) {
    currentLocation = usePageData();
    isDevPortalPage = true;
  } else if (useLocation()) {
    currentLocation = useLocation();
  } else if (globalHistory.location) {
    currentLocation = useLocation();
  } else {
    currentLocation = window.location;
  }

  //let currentLocation = globalHistory.location;

  //let currentLocation = window.location;

  let baseURL = currentLocation.origin;
  let oldStylePath = currentLocation.pathname;
  let oldStyleHost = currentLocation.host;

  //let oldStyleLocation = window.location.href;
  //let oldStyleLocation = globalHistory.location.href;
  //let baseURL = globalHistory.location.origin;

  //let oldStylePath = window.location.pathname;
  //let oldStylePath = globalHistory.location.pathname;

  //let oldStyleHost = globalHistory.location.host;

  let newPath = "";
  let branch = "";
  let buttonMessage = "";

  const trimSlashes = (str) =>
    str
      .split("/")
      .filter((v) => v !== "")
      .join("/");

  if (baseURL.includes("preview.redoc.ly/fastaf")) {
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
    buttonMessage = "SOMETHING WENT WRONG";
  }

  var ghEditLinkTest;

  if (isDevPortalPage) {
    let ghEditLinkTest = ghBaseURL + "/" + branch + "/" + pageId;
  } else {
    let ghEditLinkTest = ghBaseURL + "/" + branch + "/" + newPath + ".mdx";
  }
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
      <div style={{ fontSize: "18px", marginBottom: "10px" }}>
        Original GitHub link: <strong>{ghEditLinkTest}</strong>
      </div>
      <Button to={ghEditLinkTest}>{buttonMessage}</Button>
    </div>
  );
}

//ReactDOM.render(<button />, document.getElementById("ghEditLink"));

//export default ghEditLink

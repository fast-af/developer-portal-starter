import * as React from "react";
import { render } from "react-dom";
import { globalHistory } from "@reach/router";
import { Button, Link } from "@redocly/developer-portal/ui";

//let location = document.querySelector("link[rel='canonical']").href;

export function Test() {
  let ghBaseURL = "https://github.com/fast-af/devportal/edit";

  //let oldStyleLocation = window.location.href;
  let oldStyleLocation = globalHistory.location.href;
  let baseURL = globalHistory.location.origin;
  //let oldStylePath = window.location.pathname;
  let oldStylePath = globalHistory.location.pathname;

  let oldStyleHost = globalHistory.location.host;

  let newPath = "";
  let branch = "";
  let buttonMessage = "";

  const trimSlashes = (str) =>
    str
      .split("/")
      .filter((v) => v !== "")
      .join("/");

  if (oldStyleLocation.includes("preview.redoc.ly/fastaf")) {
    newPath = oldStylePath.replace("/fastaf/", "");
    newPath = trimSlashes(newPath);
    branch = newPath.split("/")[0].replace("/", "");
    branch = trimSlashes(branch);
    buttonMessage = "Edit Preview Branch on GitHub";
  } else if (oldStyleLocation.includes("fast.co/docs")) {
    newPath = oldStylePath.replace("/docs/", "");
    newPath = trimSlashes(newPath);
    branch = "master";
    buttonMessage = "Edit on GitHub";
  } else if (oldStyleLocation.includes("localhost")) {
    newPath = trimSlashes(oldStylePath);
    branch = "REPLACE_ME_WITH_HYPHENATED_BRANCH_NAME";
    buttonMessage = "Local Dev Button CANNOT Link to GitHub";
  } else {
    buttonMessage = "SOMETHING WENT WRONG";
  }

  let ghEditLinkTest = ghBaseURL + "/" + branch + "/" + newPath + ".mdx";

  let ghNewEditLink = oldStyleLocation
    .replace(baseURL, ghBaseURL)
    .replace(oldStylePath, "/" + branch + "/" + newPath + ".mdx");

  return (
    <div style={{ border: "1px solid red", padding: "10px" }}>
      <div style={{ fontSize: "18px", marginBottom: "10px" }}>
        Old Style LOCATION: <strong>{oldStyleLocation}</strong>
      </div>
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
      <div style={{ fontSize: "18px", marginBottom: "10px" }}>
        New GitHub link: <strong>{ghNewEditLink}</strong>
      </div>
      <Button to={ghEditLinkTest}>{buttonMessage}</Button>
      <Button to={ghNewEditLink}>{buttonMessage}</Button>
    </div>
  );
}

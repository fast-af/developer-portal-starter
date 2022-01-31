import * as React from "react";
import { Button } from "@redocly/developer-portal/ui";

export function Test() {
  let oldStyleLocation = window.location.href;
  let oldStylePath = window.location.pathname;
  let branch = "";
  let buttonMessage = "";

  if (oldStyleLocation.includes("preview.redoc.ly/fastaf")) {
    oldStylePath = oldStylePath.replace("/fastaf/", "");
    branch = oldStylePath.split("/")[0].replace("/", "");
    buttonMessage = "Edit Preview Branch on GitHub";
  } else if (oldStyleLocation.includes("fast.co/docs")) {
    oldStylePath = oldStylePath.replace("/docs/", "master/");
    buttonMessage = "Edit on GitHub";
  } else if (oldStyleLocation.includes("localhost:")) {
    buttonMessage = "Local Dev Button CANNOT Link to GitHub";
    oldStylePath = "REPLACE_ME_WITH_HYPHENATED_BRANCH_NAME" + oldStylePath;
  } else {
    buttonMessage = "SOMETHING WENT WRONG";
  }

  let oldStylePathWithoutTrailingSlash = oldStylePath.substring(
    0,
    oldStylePath.length - (oldStylePath.endsWith("/") ? 1 : 0)
  );

  let ghEditLink =
    "https://github.com/fast-af/devportal/edit/" +
    oldStylePathWithoutTrailingSlash +
    ".mdx";

  return (
    <div style={{ border: "1px solid red", padding: "10px" }}>
      <div style={{ fontSize: "18px", marginBottom: "10px" }}>
        Old Style LOCATION: <strong>{oldStyleLocation}</strong>
      </div>
      <div style={{ fontSize: "18px", marginBottom: "10px" }}>
        Old Style PATH: <strong>{oldStylePath}</strong>
      </div>
      <Button to={ghEditLink}>{buttonMessage}</Button>
    </div>
  );
}

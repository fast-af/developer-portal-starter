import * as React from "react";
import { Link } from "@redocly/developer-portal/ui";

export function Test() {
  let oldStyleLocation = window.location.href;
  let oldStylePath = window.location.pathname;
  let branch = "";

  if (oldStyleLocation.includes("https://preview.redoc.ly/fastaf")) {
    oldStylePath = oldStylePath.replace("/fastaf/", "");
    branch = oldStylePath.split("/")[0].replace("/", "");
  } else if (oldStyleLocation.includes("fast.co/docs")) {
    oldStylePath = oldStylePath.replace("/docs/", "master/");
  } else if (oldStyleLocation.includes("localhost:")) {
    alert(
      "Unsure how to grab branch during local testing. Master link provided. Use preview link for branch-specific GitHub link."
    );
    oldStylePath = "master" + oldStylePath;
  } else {
    alert("something went wrong with EDIT ON GITHUB feature");
  }

  let oldStylePathWithoutTrailingSlash = oldStylePath.substring(
    0,
    oldStylePath.length - (oldStylePath.endsWith("/") ? 1 : 0)
  );

  let ghMasterEditLink =
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
      <Link to={ghMasterEditLink}>Click Here to Edit on GitHub</Link>
    </div>
  );
}

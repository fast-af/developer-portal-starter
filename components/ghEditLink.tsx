import * as React from "react";
import * as ReactDOM from "react-dom";
import * as Gatsby from "gatsby";

function ghEditLink(props): JSX.Element {
  const extractBranch = (path) => {
    const pathArray = path.split("/");
    const branchIndex = 0;
    return pathArray[branchIndex];
  };

  const extractRelPath = (path) => {
    const pathArray = path.split("/");
    const branchIndex = 1;
    return pathArray[branchIndex];
  };

  let thecurrentPageURL = window.location.href;
  let thecurrentPagePath = window.location.pathname;

  var ghMasterURL;
  var ghBranchURL;
  const ghRepo = "github.com/fast-af/devportal";
  const redoclyPreviewSite = "preview.redoc.ly/fastaf";
  const redoclyFastDocsProdSite = "fast.co/docs";

  var prefix = thecurrentPageURL.includes(redoclyPreviewSite)
    ? redoclyPreviewSite
    : redoclyFastDocsProdSite;

  const regexTest = RegExp(`${prefix}+\/(.*)\/`);
  let fullPath = regexTest.exec;
  var branch;

  if (prefix === redoclyPreviewSite) {
    branch = extractBranch(fullPath);
  } else if (prefix === redoclyFastDocsProdSite) {
    branch = "master";
  } else {
    branch = "SOMETHING-WENT-REALLY-WRONG";
  }

  let relPath = extractRelPath(fullPath);

  //ghMasterURL = ghRepo + "/" + "blob" + "/" + fullPath;
  ghMasterURL = `https://${ghRepo}/blob/master/${fullPath}`;

  //ghBranchURL = ghRepo + "/" + "blob" + "/" + branch + fullPath;
  ghBranchURL = `https://${ghRepo}/blob/${branch}/${fullPath}`;

  //.replace(branch, "");

  //ghBranchURL = thecurrentPageURL;

  return (
    <div style={{ border: "1px solid red", padding: "10px" }}>
      <div style={{ fontSize: "18px", marginBottom: "10px" }}>
        The PATH: <strong>{thecurrentPageURL}</strong>
      </div>
      <div style={{ fontSize: "18px", marginBottom: "10px" }}>
        Edit This Page on Github (current branch):{" "}
        <strong>{ghBranchURL}</strong>
      </div>
      <div style={{ fontSize: "18px", marginBottom: "10px" }}>
        Edit This Page on Github (master branch): <strong>{ghMasterURL}</strong>
      </div>
      <button onClick={() => relPath}>
        Click here to see associated Github branch
      </button>
    </div>
  );
}

//ReactDOM.render(<button />, document.getElementById("ghEditLink"));

//export default ghEditLink

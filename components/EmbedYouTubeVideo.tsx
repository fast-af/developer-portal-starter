import React from "react";
import PropTypes from "prop-types";

export default function YouTubeVideoEmbed({ embedId, start, end, videoTitle }) {
  const startBool = Number.isInteger(start);
  const endBool = Number.isInteger(end);

  var finalEmbedString = embedId;
  if (startBool || endBool) {
    finalEmbedString = finalEmbedString.concat("?");
    if (startBool) {
      finalEmbedString = finalEmbedString.concat(start);
    }

    if (endBool) {
      finalEmbedString = startBool
        ? finalEmbedString.concat("&", end)
        : finalEmbedString.concat(end);
    }
  }
  return (
    <>
      <div className="video-responsive">
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube-nocookie.com/embed/${finalEmbedString}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={videoTitle}
        />{" "}
      </div>
    </>
  );
}

YouTubeVideoEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
  start: PropTypes.number,
  end: PropTypes.number,
  videoTitle: PropTypes.string.isRequired,
};

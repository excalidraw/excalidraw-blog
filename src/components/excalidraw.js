import React from "react";

import logoPath from "../../content/assets/logo.png";
import { rhythm } from "../utils/typography";

const Excalidraw = () => {
  const logo = (
    <img
      src={logoPath}
      style={{
        height: rhythm(1),
        verticalAlign: "middle",
        paddingRight: rhythm(0.05),
        margin: 0,
      }}
      alt="excalidraw"
    />
  );
  return (
    <a
      className="excalidraw-button"
      style={{
        padding: `${rhythm(0.4)} ${rhythm(0.5)} ${rhythm(0.4)} ${rhythm(0.35)}`,
      }}
      href="https://excalidraw.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      {logo} Open Excalidraw
    </a>
  );
};

export default Excalidraw;

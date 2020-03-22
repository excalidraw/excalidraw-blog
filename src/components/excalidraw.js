import React from "react";

import logoPath from "../../content/assets/logo.png";
import { rhythm, scale } from "../utils/typography";

const Excalidraw = () => {
  const logo = (
    <img
      src={logoPath}
      style={{
        height: rhythm(1),
        verticalAlign: "middle",
        background: "#fff",
        paddingRight: rhythm(0.1),
      }}
    />
  );
  return (
    <a
      style={{
        textDecoration: "none",
        padding: "12px 16px",
        fontWeight: 600,
        border: "1px solid #868e96",
        borderRadius: "8px",
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

import React from "react";
import { Link } from "gatsby";

import { rhythm, scale } from "../utils/typography";
import Excalidraw from "./excalidraw";

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(26),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <header>
        <div style={{ fontFamily: "var(--ui-font)", textAlign: "right" }}>
          {location.pathname !== rootPath && (
            <span style={{ float: "left" }}>
              <Link to="/">All posts</Link>
            </span>
          )}
          <Excalidraw />
        </div>
        <span style={{ clear: "both" }} />
        {location.pathname === rootPath ? (
          <h1
            style={{
              ...scale(1.2),
              marginTop: 0,
            }}
          >
            {title}
          </h1>
        ) : null}
      </header>
      <main>{children}</main>
      <footer
        style={{
          textAlign: "center",
          padding: `${rhythm(2)} 0`,
          fontFamily: "var(--ui-font)",
        }}
      >
        © {new Date().getFullYear()} Excalidraw Blog contributors
        {" • "}
        <a href="https://github.com/excalidraw/excalidraw-blog/blob/master/LICENSE">
          MIT Licensed
        </a>
        {" • "}
        <a href="https://twitter.com/excalidraw">Twitter</a>
        {" • "}
        <a href="https://github.com/excalidraw/excalidraw-blog">View source</a>
        {" • "}
        <Link to="/">All posts</Link>
      </footer>
    </div>
  );
};

export default Layout;

import React from "react";
import { Link } from "gatsby";

import logoPath from "../../content/assets/logo.png";

import { rhythm, scale } from "../utils/typography";

function Layout({ location, title, children }) {
  const rootPath = `${__PATH_PREFIX__}/`;
  const logo = (
    <img
      src={logoPath}
      alt=""
      style={{
        height: rhythm(1),
        verticalAlign: "middle",
        background: "white",
        padding: `0 ${rhythm(0.1)}`,
      }}
    />
  );

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
        <p style={{ fontFamily: "var(--ui-font)" }}>
          {location.pathname === rootPath ? (
            <a
              href="https://excalidraw.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              {logo}Open Excalidraw
            </a>
          ) : (
            <>
              <span style={{ float: "right" }}>
                <a
                  href="https://excalidraw.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open Excalidraw{logo}
                </a>
              </span>
              <Link to="/">All posts</Link>
            </>
          )}
          <span style={{ clear: "both" }} />
        </p>
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
        <a href="https://github.com/excalidraw/excalidraw-blog">
          Fork this site
        </a>
        {" • "}
        <Link to="/">All posts</Link>
      </footer>
    </div>
  );
}

export default Layout;

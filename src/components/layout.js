import React from "react";
import { Link } from "gatsby";

import logoPath from "../../content/assets/logo.png";

import { rhythm, scale } from "../utils/typography";

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props;
    const rootPath = `${__PATH_PREFIX__}/archive`;
    const logo = (
      <img
        src={logoPath}
        alt=""
        style={{
          height: rhythm(1),
          verticalAlign: "middle",
          background: "white",
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
              <a href="https://excalidraw.com">{logo}Open Excalidraw</a>
            ) : (
              <>
                <span style={{ float: "right" }}>
                  <a href="https://excalidraw.com">Open Excalidraw{logo}</a>
                </span>
                <Link to="/archive">Archive</Link>
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
          © {new Date().getFullYear()} Excalidraw blog{" "}
          <a href="https://github.com/excalidraw/excalidraw-blog/graphs/contributors">
            contributors
          </a>
          {" • "}
          <a href="https://twitter.com/excalidraw">Twitter</a>
          {" • "}
          <a href="https://github.com/excalidraw/excalidraw-blog">
            Fork this site
          </a>
          {" • "}
          <Link to="/archive">Archive</Link>
        </footer>
      </div>
    );
  }
}

export default Layout;

import React from "react";
import { Link } from "gatsby";
import { ThemeToggler } from "gatsby-plugin-dark-mode";
import { rhythm, scale } from "../utils/typography";
import "./layoutStyles.css";

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props;
    const rootPath = `${__PATH_PREFIX__}/`;
    let header;
    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1.2),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      );
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      );
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(26),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <ThemeToggler>
          {({ theme, toggleTheme }) => {
            const themeEmoji =
              theme === "dark" ? <span>🌞</span> : <span>🌒</span>;
            return (
              <label>
                <input
                  type="checkbox"
                  onChange={(e) =>
                    toggleTheme(e.target.checked ? "dark" : "light")
                  }
                  checked={theme === "dark"}
                />{" "}
                {themeEmoji} mode
              </label>
            );
          }}
        </ThemeToggler>
        <header>{header}</header>
        <main>{children}</main>
        <footer
          style={{
            textAlign: "center",
            padding: `${rhythm(2)} 0`,
          }}
        >
          © {new Date().getFullYear()}
          {" – "}
          <a href="https://twitter.com/excalidraw">Twitter</a>
          {" – "}
          <a href="https://github.com/excalidraw">GitHub</a>
          {" – "}
          <a href="https://excalidraw.com">Excalidraw</a>
        </footer>
      </div>
    );
  }
}

export default Layout;

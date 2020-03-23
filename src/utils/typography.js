import Typography from "typography";
import Wordpress2016 from "typography-theme-wordpress-2016";

Wordpress2016.headerFontFamily = "BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif".split(
  ", "
);
Wordpress2016.headerWeight = 700;

Wordpress2016.overrideThemeStyles = () => {
  return {
    ":root": {
      "--ui-font": Wordpress2016.headerFontFamily.join(","),
    },
    h1: {
      fontFamily: "var(--ui-font)",
      fontWeight: 700,
    },

    "a.gatsby-resp-image-link": {
      boxShadow: "none",
    },
    ".gatsby-highlight": {
      fontSize: "0.9em",
    },
  };
};

delete Wordpress2016.googleFonts;

const typography = new Typography(Wordpress2016);

// Hot reload typography in development.
if (process.env.NODE_ENV !== "production") {
  typography.injectStyles();
}

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;

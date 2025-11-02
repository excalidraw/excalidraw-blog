import Typography from "typography";
import WordPress2016 from "typography-theme-wordpress-2016";

WordPress2016.headerFontFamily = "BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif".split(
  ", ",
);
WordPress2016.headerWeight = 700;

WordPress2016.overrideThemeStyles = () => {
  return {
    ":root": {
      "--ui-font": WordPress2016.headerFontFamily.join(","),
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

delete WordPress2016.googleFonts;

const typography = new Typography(WordPress2016);

// Hot reload typography in development.
if (process.env.NODE_ENV !== "production") {
  typography.injectStyles();
}

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;

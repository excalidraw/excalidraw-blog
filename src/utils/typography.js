import Typography from "typography";
import TwinPeaks from "typography-theme-twin-peaks";

const typography = new Typography(TwinPeaks);

// Hot reload typography in development.
if (process.env.NODE_ENV !== "production") {
  typography.injectStyles();
}

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;

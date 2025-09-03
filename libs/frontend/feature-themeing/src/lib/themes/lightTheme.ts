import { Theme } from "../types/theme";
import colors from "../colors";

export const lightTheme: Omit<Theme, "fontSize" | "spacing"> = {
  name: "light",
  colors: {
    ...colors,
    // Core colors - Beautiful purple-blue theme
    background: { DEFAULT: "#FBFBFE" }, // HSL(240 10% 98%)
    foreground: { DEFAULT: "#1A1A22" }, // HSL(240 10% 8%)

    card: { 
      DEFAULT: "#FFFFFF", // HSL(0 0% 100%)
      foreground: "#1A1A22" // HSL(240 10% 8%)
    },

    popover: { 
      DEFAULT: "#FFFFFF", // HSL(0 0% 100%)
      foreground: "#1A1A22" // HSL(240 10% 8%)
    },

    // Beautiful gradient primary
    primary: {
      DEFAULT: "#3300FF", // HSL(250 100% 60%)
      foreground: "#FFFFFF", // HSL(0 0% 100%)
      light: "#6633FF", // HSL(260 100% 80%)
      glow: "#4D1AFF" // HSL(250 100% 70%)
    },
    "primary-foreground": { DEFAULT: "#FFFFFF" },

    // Elegant secondary
    secondary: {
      DEFAULT: "#F7F7FE", // HSL(240 10% 96%)
      foreground: "#2E2E3D" // HSL(240 10% 20%)
    },
    "secondary-foreground": { DEFAULT: "#2E2E3D" },

    // Soft muted tones
    muted: { 
      DEFAULT: "#F3F3FB", // HSL(240 10% 94%)
      foreground: "#787884" // HSL(240 5% 50%)
    },
    "muted-foreground": { DEFAULT: "#787884" },

    // Accent colors
    accent: {
      DEFAULT: "#E6E6FF", // HSL(260 100% 95%)
      foreground: "#0000FF" // HSL(250 100% 50%)
    },
    "accent-foreground": { DEFAULT: "#0000FF" },

    // Success and warning
    success: { 
      DEFAULT: "#228B22", // HSL(142 76% 36%)
      foreground: "#FFFFFF" // HSL(0 0% 100%)
    },
    warning: { 
      DEFAULT: "#F5C842", // HSL(48 96% 53%)
      foreground: "#000000" // HSL(0 0% 0%)
    },

    destructive: { 
      DEFAULT: "#F05252", // HSL(0 84.2% 60.2%)
      foreground: "#FFFFFF" // HSL(0 0% 100%)
    },
    "destructive-foreground": { DEFAULT: "#FFFFFF" },

    border: { DEFAULT: "#E4E4EF" }, // HSL(240 20% 90%)
    input: { DEFAULT: "#EFEFFA" }, // HSL(240 20% 94%)
    ring: { DEFAULT: "#3300FF" }, // HSL(250 100% 60%)

    sidebar: {
      DEFAULT: "#FBFBFE", // HSL(0 0% 98%) - sidebar-background
      foreground: "#5A5A6B", // HSL(240 5.3% 26.1%) - sidebar-foreground
      primary: "#191927", // HSL(240 5.9% 10%) - sidebar-primary
      "primary-foreground": "#FBFBFE", // HSL(0 0% 98%) - sidebar-primary-foreground
      accent: "#F7F7F9", // HSL(240 4.8% 95.9%) - sidebar-accent
      "accent-foreground": "#191927", // HSL(240 5.9% 10%) - sidebar-accent-foreground
      border: "#D9D9E8", // HSL(220 13% 91%) - sidebar-border
      ring: "#3B82F6" // HSL(217.2 91.2% 59.8%) - sidebar-ring
    }
  },
  boxShadow: {
    DEFAULT: "0 4px 20px hsla(250, 100%, 60%, 0.1)", // shadow-soft
    xs: "0 8px 32px hsla(240, 10%, 50%, 0.08)", // shadow-card
    sm: "0 0 40px hsla(250, 100%, 70%, 0.3)", // shadow-glow
    md: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" // .shadow
  }
};

export default lightTheme;
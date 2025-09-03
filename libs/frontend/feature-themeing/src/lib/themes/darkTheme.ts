import { Theme } from "../types/theme";
import colors from "../colors";

export const darkTheme: Omit<Theme, "fontSize" | "spacing"> = {
  name: "dark",
  colors: {
    ...colors,
    // Dark theme colors
    background: { DEFAULT: "#0C0D18" }, // HSL(222.2 84% 4.9%)
    foreground: { DEFAULT: "#F8FAFC" }, // HSL(210 40% 98%)

    card: { 
      DEFAULT: "#0C0D18", // HSL(222.2 84% 4.9%)
      foreground: "#F8FAFC" // HSL(210 40% 98%)
    },

    popover: { 
      DEFAULT: "#0C0D18", // HSL(222.2 84% 4.9%)
      foreground: "#F8FAFC" // HSL(210 40% 98%)
    },

    primary: {
      DEFAULT: "#F8FAFC", // HSL(210 40% 98%)
      foreground: "#1E2937", // HSL(222.2 47.4% 11.2%)
    },
    "primary-foreground": { DEFAULT: "#1E2937" },

    secondary: {
      DEFAULT: "#34475A", // HSL(217.2 32.6% 17.5%)
      foreground: "#F8FAFC" // HSL(210 40% 98%)
    },
    "secondary-foreground": { DEFAULT: "#F8FAFC" },

    muted: { 
      DEFAULT: "#34475A", // HSL(217.2 32.6% 17.5%)
      foreground: "#A1A9B8" // HSL(215 20.2% 65.1%)
    },
    "muted-foreground": { DEFAULT: "#A1A9B8" },

    accent: {
      DEFAULT: "#34475A", // HSL(217.2 32.6% 17.5%)
      foreground: "#F8FAFC" // HSL(210 40% 98%)
    },
    "accent-foreground": { DEFAULT: "#F8FAFC" },

    destructive: { 
      DEFAULT: "#9B1C1C", // HSL(0 62.8% 30.6%)
      foreground: "#F8FAFC" // HSL(210 40% 98%)
    },
    "destructive-foreground": { DEFAULT: "#F8FAFC" },

    border: { DEFAULT: "#34475A" }, // HSL(217.2 32.6% 17.5%)
    input: { DEFAULT: "#34475A" }, // HSL(217.2 32.6% 17.5%)
    ring: { DEFAULT: "#BFDBFE" }, // HSL(212.7 26.8% 83.9%)

    sidebar: {
      DEFAULT: "#191927", // HSL(240 5.9% 10%) - sidebar-background
      foreground: "#F7F7F9", // HSL(240 4.8% 95.9%) - sidebar-foreground
      primary: "#6366F1", // HSL(224.3 76.3% 48%) - sidebar-primary
      "primary-foreground": "#FFFFFF", // HSL(0 0% 100%) - sidebar-primary-foreground
      accent: "#2E2E3D", // HSL(240 3.7% 15.9%) - sidebar-accent
      "accent-foreground": "#F7F7F9", // HSL(240 4.8% 95.9%) - sidebar-accent-foreground
      border: "#2E2E3D", // HSL(240 3.7% 15.9%) - sidebar-border
      ring: "#3B82F6" // HSL(217.2 91.2% 59.8%) - sidebar-ring
    }
  },
  boxShadow: {
    DEFAULT: "0 4px 20px hsla(250, 100%, 60%, 0.1)",
    xs: "0 8px 32px hsla(240, 10%, 50%, 0.08)",
    sm: "0 0 40px hsla(250, 100%, 70%, 0.3)",
    md: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
  }
};

export default darkTheme;
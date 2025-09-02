import { join } from "path"
import { createGlobPatternsForDependencies } from "@nx/react/tailwind"
import { hairlineWidth } from "nativewind/theme"

import { lightTheme } from "../feature-themeing/src"

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    relative: true,
    files: [
      join(
        __dirname,
        "{src,pages,components,layouts,app}/**/*!(*.stories|*.spec).{ts,tsx,html}"
      ),
      ...createGlobPatternsForDependencies(__dirname)
    ]
  },
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: lightTheme.colors,
      borderWidth: {
        hairline: hairlineWidth()
      },
      boxShadow: lightTheme.boxShadow,
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" }
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out"
      }
    }
  },
  plugins: [require("tailwindcss-animate")]
}

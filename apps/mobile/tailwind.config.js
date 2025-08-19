import { join } from "path"
import { createGlobPatternsForDependencies } from "@nx/react/tailwind"
import { hairlineWidth } from "nativewind/theme"

import { lightTheme } from "../../libs/frontend/shared/feature-themeing/src/lib/themes/light/light"

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
      colors: {
        primary: "#0d4800"
      }
    }
  },
  plugins: []
}

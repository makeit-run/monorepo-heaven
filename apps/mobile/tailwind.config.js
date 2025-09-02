import { join } from "path"
import { createGlobPatternsForDependencies } from "@nx/react/tailwind"
const {
  sharedTheme,
} = require('../../libs/frontend/feature-themeing/src/lib/tailwind-theme');
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
    container: sharedTheme.container,
    extend: {
      colors: sharedTheme.colors,
      borderRadius: sharedTheme.borderRadius,
      keyframes: sharedTheme.keyframes,
      animation: sharedTheme.animation,
    },
  },
  plugins: [require('tailwindcss-animate')],
}

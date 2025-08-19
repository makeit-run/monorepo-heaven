const path = require("path")
const { createGlobPatternsForDependencies } = require("@nx/react/tailwind")


module.exports = {
  content: [
    path.join(__dirname, "src/**/*.{js,ts,jsx,tsx}"),
    ...createGlobPatternsForDependencies(__dirname)
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0289df"
      }
    }
  },
  plugins: []
}

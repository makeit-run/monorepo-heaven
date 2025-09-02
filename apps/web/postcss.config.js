import { join } from "path"
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default {
  plugins: {
    tailwindcss: {
      config: join(__dirname, "tailwind.config.js")
    },
    autoprefixer: {}
  }
}

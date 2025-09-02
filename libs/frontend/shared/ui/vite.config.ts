import * as path from 'path';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

const isExternal = (id: string) => !id.startsWith('.') && !path.isAbsolute(id);
export default defineConfig({
  root: __dirname,
  cacheDir: '../../../../node_modules/.vite/libs/ui',
  plugins: [
    react(),
    nxViteTsPaths(),
    dts({
      entryRoot: 'src',
      tsconfigPath: path.join(__dirname, 'tsconfig.lib.json'),
    }),
  ],

  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },

  // Configuration for building your library.
  // See: https://vitejs.dev/guide/build.html#library-mode
  build: {
    outDir: '../../../../dist/libs/ui',
    reportCompressedSize: true,
    target: 'esnext',
    lib: {
      entry: 'src/index.ts',
      name: 'ui',
      formats: ['es'],
      fileName: '[name]',
    },
    rollupOptions: {
      external: isExternal,
      output: {
        exports: 'named',
        preserveModules: true,
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});

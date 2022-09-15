import { defineConfig, splitVendorChunkPlugin } from 'vite';
import path from 'path';
import vue from '@vitejs/plugin-vue';
import legacy from '@vitejs/plugin-legacy';
import { visualizer } from 'rollup-plugin-visualizer';

// export default defineConfig(({ command, mode, ssrBuild }) => {
//   console.log('command: ' + command);
//   console.log('mode: ' + mode);

//   if (command === 'serve') {
//     return {
//       // dev 独有配置
//     };
//   } else {
//     // command === 'build'
//     return {
//       // build 独有配置
//     };
//   }
// });

export default defineConfig({
  plugins: [
    vue(),
    legacy(),
    splitVendorChunkPlugin(),
    visualizer({
      open: false,
      gzipSize: true,
      brotliSize: true,
    }),
  ],
  define: {
    appName: JSON.stringify('my-custom-name'),
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    // rollupOptions: {
    //   input: path.resolve(__dirname, './src/app.ts'),
    // },
    // rollupOptions: {
    //   input: {
    //     app: path.resolve(__dirname, './src/app.ts'),
    //   },
    // },
  },
});

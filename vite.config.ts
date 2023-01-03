import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import vitePluginImp from 'vite-plugin-imp'; // 对组件库按需引入
import svgrPlugin from 'vite-plugin-svgr'; // Vite plugin to transform SVGs into React components

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src'),
    },
  },
  server: {
    port: 8889,
    proxy: {
      '/api': {
        target: `http://localhost:${process.env.PORT}/api`,
        // changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, ''),
      },
    },
  },
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
    vitePluginImp({
      libList: [
        // {
        //   libName: 'antd',
        //   style: name => `antd/es/${name}/style/index.css`,
        // },
        {
          libName: 'lodash',
          libDirectory: '',
          // whether convert component name from camel to dash
          camel2DashComponentName: false,
          style: () => {
            return false;
          },
        },
      ],
    }),
    svgrPlugin({
      svgrOptions: {
        icon: true,
        // ...svgr options (https://react-svgr.com/docs/options/)
      },
    }),
  ],
});

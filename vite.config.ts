import reactRefresh from '@vitejs/plugin-react-refresh';
import fs from 'fs';
import lessToJS from 'less-vars-to-js';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import htmlPlugin from 'vite-plugin-html-config';

import * as packageJson from './package.json';
const htmlPluginOpt = {
  metas: [
    {
      name: 'viewport',
      content:
        'width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no',
    },
  ],
};

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  const lessThemeVariables = lessToJS(
    fs.readFileSync(path.resolve(__dirname, './src/theme.less'), 'utf8')
  );
  return defineConfig({
    base: process.env.VITE_ASSET_PATH,
    plugins: [
      htmlPlugin(htmlPluginOpt),
      reactRefresh(),
      // createImportPlugin([
      //   {
      //     libraryName: 'antd',
      //     libraryDirectory: 'es',
      //     style: 'css', // true or 'css'
      //   },
      // ]),
      // createStyleImportPlugin({
      //   libs: [
      //     {
      //       libraryName: 'antd',
      //       esModule: true,
      //       resolveStyle: (name) => {
      //         return `antd/es/${name}/style/index`;
      //       },
      //     },
      //   ],
      // }),
      // vitePluginImp({
      //   libList: [
      //     {
      //       libName: 'antd',
      //       style: (name) => `antd/es/${name}/style`,
      //     },
      //   ],
      // }),
      // sentryVitePlugin({
      //   release: { name: packageJson.version },
      //   authToken: process.env.SENTRY_AUTH_TOKEN,
      //   org: 'oagroup',
      //   project: 'fiza-hr-recruiter',
      //   url: 'https://sentry-int.zalo.cloud/',
      // }),
    ],
    css: {
      preprocessorOptions: {
        less: {
          // 支持内联 JavaScript
          javascriptEnabled: true,
          // 重写 less 变量，定制样式
          // modifyVars: lessThemeVariables,
        },
        scss: {
          javascriptEnabled: true,
          // additionalData: `@import "./src/ui/assets/scss/layout.scss";`, // Import global styles
        },
      },
    },
    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
        '@image': path.resolve(__dirname, './src/ui/assets/images'),
      },
    },
    build: {
      sourcemap: false, // Source map generation must be turned on
      outDir: path.resolve(__dirname, './build'),
      modulePreload: {
        resolveDependencies: (url, deps, context) => {
          //     return [];
          // if (url.includes('assets/index')) {
          //   return [];
          // }
          return deps;
        },
      },
      rollupOptions: {
        output: {
          manualChunks: (id) => {
            // console.log(id)
            if (id.includes('commonjsHelpers')) return 'commonjsHelpers';

            if (id.includes('node_modules')) {
              if (id.includes('dayjs') || id.includes('classnames')) {
                return 'utils';
              }

              if (id.includes('moment')) {
                return 'moment';
              }

              if (id.includes('antd')) {
                return 'antd';
              }

              if (id.includes('@ant-design')) {
                return 'ant-design';
              }

              if (
                id.includes('react-router') ||
                id.includes('@remix-run') ||
                id.includes('react-router-dom')
              ) {
                return 'react-router-core';
              }

              if (
                id.includes('react-redux') ||
                id.includes('redux') ||
                id.includes('redux-thunk') ||
                id.includes('use-sync-external-store')
              ) {
                return 'redux-core';
              }
              if (id.includes('axios') || id.includes('axios-retry')) {
                return 'axios-core';
              }
              if (id.includes('lodash')) {
                return 'lodash';
              }

              if (id.includes('@ckeditor/ckeditor5-react')) {
                return 'ckeditor-react';
              }

              if (
                id.includes('@ckeditor/ckeditor5-react') ||
                id.includes('ckeditor5-custom-build')
              ) {
                return 'ckeditor';
              }
              if (id.includes('sentry')) {
                return 'sentry';
              }

              return 'vendor';
            }
          },
        },
      },
    },
  });
};

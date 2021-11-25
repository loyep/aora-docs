import { defineConfig } from 'dumi';

export default defineConfig({
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  mode: 'site',
  hash: true,
  // Because of using GitHub Pages
  base: `/${repo}/`,
  publicPath: `/${repo}/`,
  ssr: {},
  title: 'aora',
  navs: {
    'en-US': [
      null,
      { title: 'GitHub', path: 'https://github.com/umijs/dumi' },
      { title: 'Changelog', path: 'https://github.com/umijs/dumi/releases' },
    ],
    'zh-CN': [
      null,
      { title: 'GitHub', path: 'https://github.com/umijs/dumi' },
      { title: '更新日志', path: 'https://github.com/umijs/dumi/releases' },
    ],
  },
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
      },
    ],
  ],
  scripts: ['https://v1.cnzz.com/z_stat.php?id=1278653578&web_id=1278653578'],
  analytics: {
    ga: 'UA-128069695-2',
  },
  styles: ['a[title=站长统计] { display: none; }'],
  exportStatic: {},
  sitemap: {
    hostname: 'https://d.umijs.org',
  },
  // more config: https://d.umijs.org/config
});

import { defineConfig } from 'vite';
import monkey from 'vite-plugin-monkey';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    monkey({
      entry: 'src/main.ts',
      userscript: {
        // https://www.tampermonkey.net/documentation.php?locale=en
        icon: 'https://vitejs.dev/logo.svg',
        namespace: 'impossible98/livestream-helper',
        match: ['https://live.bilibili.com/*'],
        name: 'Live Stream Helper',
        description: 'Live Stream Helper.',
        author: 'impossible98',
        homepageURL: 'https://codeup.aliyun.com/6476c4e4b44b3d9a1d163598/monkey/livestream-helper',
        license: 'MIT',
        // https://greasyfork.org/en/scripts/501655-live-stream-helper
      },
    }),
  ],
});

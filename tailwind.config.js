const { DEST_PATHS, BUILD_PATHS } = require('./gulp/config/paths');

const themeColorConfig = require('./config/themes/default/colors');
const themeFontsConfig = require('./config/themes/default/fonts');

module.exports = {
  content: [
    `${DEST_PATHS.views}/**/*.{html,js}`,
    `${BUILD_PATHS.views}/**/*.{html,js}`
  ],
  theme: {
    extend: {
      fontFamily: { ...themeFontsConfig },
      colors: { ...themeColorConfig }
    }
  },
  plugins: []
};

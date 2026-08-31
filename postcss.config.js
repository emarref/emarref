export default {
  plugins: {
    'postcss-preset-env': {
      // Compiles native CSS nesting and modern colour syntax down to the
      // browserslist targets in package.json. Includes autoprefixer.
      stage: 2,
    },
  },
};

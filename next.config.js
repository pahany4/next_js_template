module.exports = {
  devIndicators: {
    buildActivity: false
  },
  webpack(config, options) {
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2|mdx)$/,
      use: [
        options.defaultLoaders.babel,
      ]
    });

    return config;
  },
  reactStrictMode: false,
  async headers() {
    return [
      {
        source: '/',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=9999999999, must-revalidate',
          },
        ],
      },
    ]
  },
  pageExtensions: ["js", "jsx", "md", "mdx"],
};

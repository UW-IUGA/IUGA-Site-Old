/**
 * This config file is because nextjs does not natively support CSS and TypeScript, so we must
 * use a loader to make sure the nextjs compiler knows to use CSS and TypeScript when we compile
 * as well as next-images which allows for images to be imported correctly.
 * 
 * Last modified:
 *      William Kwok
 *      June 5, 2019
 */
const withPlugins = require("next-compose-plugins");
const withTypescript = require("@zeit/next-typescript");
const withCSS = require("@zeit/next-css");
const withImages = require("next-images");
const withPdf = (nextConfig = {}) => {
	return Object.assign({}, nextConfig, {
		webpack(config, options) {
			const { isServer } = options;
			nextConfig = Object.assign({ inlineImageLimit: 8192, assetPrefix: "" }, nextConfig);

			if (!options.defaultLoaders) {
				throw new Error(
					'This plugin is not compatible with Next.js versions below 5.0.0 https://err.sh/next-plugins/upgrade'
				)
			}

			config.module.rules.push({
				test: /\.(pdf)$/,
				exclude: nextConfig.exclude,
				use: [
					{
						loader: "url-loader",
						options: {
							limit: nextConfig.inlineImageLimit,
							fallback: "file-loader",
							publicPath: `${nextConfig.assetPrefix}/_next/static/images/`,
							outputPath: `${isServer ? "../" : ""}static/images/`,
							name: "[name]-[hash].[ext]"
						}
					}
				]
			});

			if (typeof nextConfig.webpack === 'function') {
				return nextConfig.webpack(config, options)
			}

			return config
		}
	})
}

module.exports = withPlugins([withTypescript, withCSS, withImages, withPdf]);
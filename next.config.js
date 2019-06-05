/**
 * This config file is because nextjs does not natively support CSS and TypeScript, so we must
 * use a loader to make sure the nextjs compiler knows to use CSS and TypeScript when we compile
 * 
 * Last modified:
 *      William Kwok
 *      June 5, 2019
 */
const withPlugins = require("next-compose-plugins");
const withTypescript = require("@zeit/next-typescript");
const withCSS = require("@zeit/next-css");
module.exports = withPlugins([withTypescript, withCSS]);
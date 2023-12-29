/** @type {import('next').NextConfig} */

const withNextIntl = require("next-intl/plugin")("./app/_i18n/index.ts");

const nextConfig = {};

module.exports = withNextIntl(nextConfig);

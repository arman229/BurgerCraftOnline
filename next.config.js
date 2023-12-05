/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig
module.exports = {
    webpack: (config, { isServer }) => {
        // Add a loader for MP3 files
        config.module.rules.push({
            test: /\.(mp3)$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        publicPath: '/_next/static/sounds/',
                        outputPath: 'static/sounds/',
                        name: '[name].[ext]',
                        esModule: false,
                    },
                },
            ],
        });

        return config;
    },
};

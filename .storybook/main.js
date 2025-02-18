const path = require('path');

module.exports = {
    core: {
        builder: 'webpack5'
    },
    features: {
        postcss: false,
    },
    stories: [
        '../src/**/*.stories.mdx',
        '../src/**/*.stories.@(js|jsx|ts|tsx)'
    ],
    addons: [
        '@storybook/addon-actions',
        '@storybook/addon-docs',
        '@storybook/addon-viewport',
        // '@storybook/addon-storysource',
        '@storybook/addon-knobs',
        '@storybook/addon-a11y',
        '@storybook/addon-controls',
        '@storybook/addon-postcss',
    ],
    "webpackFinal": async (config) => {
        config.resolve.alias['~'] = path.resolve(__dirname, '../src')
        config.module.rules.push({
            test: /\.scss$/,
            sideEffects: true,
            use: [
                'style-loader',
                'css-loader',
                {
                    loader: 'postcss-loader',
                    options: {
                        postcssOptions: {
                            plugins: [
                                ["postcss-preset-env"],
                            ],
                        }
                    }
                },
                'sass-loader'
            ]
        });

        return config
    }
};

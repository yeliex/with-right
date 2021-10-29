import * as Webpack from 'webpack';
import { set } from 'lodash';
import { resolve } from 'path';
import BabelOptions from './babel.config';

import CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

const transform: Webpack.TransformConfiguration = (config) => {
    !config.output && (config.output = {});
    config.output.path = resolve(process.cwd(), './dist');
    config.output.crossOriginLoading = 'anonymous';

    config.resolve = {
        ...config.resolve ?? {},
        modules: ['node_modules'],
        mainFiles: ['index.tsx', 'index.ts', 'index.js'],
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
        mainFields: ['browser', 'module', 'main'],
    };

    !config.module && (config.module = {});
    !config.module.rules && (config.module.rules = []);

    config.module.rules.push({
        test: /\.tsx?$/,
        use: [
            {
                loader: require.resolve('babel-loader'),
                options: BabelOptions,
            },
            {
                loader: require.resolve('ts-loader'),
                options: {
                    transpileOnly: true,
                },
            },
        ],
    });

    config.module.rules.push({
        test: /\.jsx?$/,
        exclude: [/node_modules/],
        use: [
            {
                loader: require.resolve('babel-loader'),
                options: BabelOptions,
            },
        ],
    });

    !config.plugins && (config.plugins = []);
    config.plugins.push(new CaseSensitivePathsPlugin());
    config.plugins.push(new Webpack.DefinePlugin({
        'process.env.VERSION': JSON.stringify(process.env.npm_package_version),
    }));

    set(config, 'optimization.splitChunks.chunks', 'async');

    config.stats = {
        ...(config.stats as Record<string, boolean> || {}),
        assets: true,
        builtAt: true,
        colors: true,
        cached: true,
        chunks: true,
        children: false,
        depth: true,
        env: true,
        entrypoints: true,
        errors: true,
        errorDetails: true,
        moduleAssets: true,
        modules: true,
        moduleTrace: true,
        outputPath: true,
        performance: true,
        reasons: false,
        source: false,
        timings: true,
        warnings: true,
        version: true,
    };

    return config;
};

export default transform;

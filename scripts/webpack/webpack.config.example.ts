import * as Webpack from 'webpack';
import { resolve } from 'path';
import { Entries } from '../utils/entry';
import PostcssOptions from './postcss.config';

import HtmlWebpackPlugin = require('html-webpack-plugin');
import TerserPlugin = require('terser-webpack-plugin');
import MiniCssExtractPlugin = require('mini-css-extract-plugin');

const EXAMPLE_TEMPLATE = resolve(__dirname, '../templates/index.html');

const transform: Webpack.TransformConfiguration = (config, env) => {
    !config.output && (config.output = {});
    config.output.filename = '[name].js';
    config.output.chunkFilename = 'chunk/[name].js';
    config.output.publicPath = '/';

    !config.plugins && (config.plugins = []);

    const { plugins } = config;

    const entries = config.entry as Entries;

    Object.keys(entries).forEach((name) => {
        plugins.push(new HtmlWebpackPlugin({
            inject: 'body',
            title: name,
            filename: `${name}.html`,
            template: EXAMPLE_TEMPLATE,
            hash: true,
            cache: true,
            chunks: [name],
        }));
    });

    !config.module && (config.module = {});
    !config.module.rules && (config.module.rules = []);

    const { rules } = config.module;

    rules.push({
        test: /\.less$/,
        use: [
            MiniCssExtractPlugin.loader,
            {
                loader: require.resolve('@teamsupercell/typings-for-css-modules-loader'),
                options: {
                    banner: '// This file is generated automatically',
                },
            },
            {
                loader: require.resolve('css-loader'),
                options: {
                    sourceMap: true,
                    esModule: true,
                    modules: {
                        exportGlobals: true,
                        localIdentName: '[local]___[hash:base64:5]',
                        exportLocalsConvention: 'camelCaseOnly',
                    },
                },
            },
            {
                loader: require.resolve('postcss-loader'),
                options: { postcssOptions: PostcssOptions },
            },
            {
                loader: require.resolve('less-loader'),
                options: {
                    sourceMap: true,
                    lessOptions: {
                        javascriptEnabled: true,
                    },
                },
            },
        ],
    });

    config.plugins.push(new Webpack.WatchIgnorePlugin({ paths: [/less\.d\.ts$/] }));

    config.plugins.push(new MiniCssExtractPlugin({
        filename: env.NODE_ENV === 'production' ? '[name]-[chunkhash].css' : '[name].css',
        chunkFilename: env.NODE_ENV === 'production' ? 'chunk/[chunkhash].css' : '[id].css',
        experimentalUseImportModule: true,
    }) as any);

    !config.optimization && (config.optimization = {});
    !config.optimization.minimizer && (config.optimization.minimizer = []);
    config.optimization.minimizer.push(new TerserPlugin({
        parallel: true,
        terserOptions: {
            sourceMap: true,
            mangle: true,
            keep_fnames: false,
            keep_classnames: true,
            output: {
                beautify: false,
                comments: false,
            },
            compress: {
                drop_console: true,
                collapse_vars: true,
                reduce_vars: true,
                drop_debugger: false,
            },
        },
    }));

    return config;
};

export default transform;

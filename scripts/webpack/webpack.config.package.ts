import * as Webpack from 'webpack';
import { resolve } from 'path';
import { camelCase, upperFirst } from 'lodash';

import TerserPlugin = require('terser-webpack-plugin');

const transform: Webpack.TransformConfiguration = (config, env) => {
    const packageJson = require(resolve(process.cwd(), 'package.json'));

    !config.output && (config.output = {});
    config.output.path = resolve(process.cwd(), 'dist');
    config.output.filename = env.NODE_ENV === 'production' ? '[name].min.js' : '[name].js';
    config.output.library = {
        type: 'umd',
        name: upperFirst(camelCase(packageJson.name)),
    };

    config.externals = {
        ...config.externals as any ?? {},
        react: {
            root: 'React',
            commonjs: 'react',
            commonjs2: 'react',
            amd: 'react',
        },
        'react-dom': {
            root: 'ReactDom',
            commonjs: 'react-dom',
            commonjs2: 'react-dom',
            amd: 'react-dom',
        },
        lodash: {
            commonjs: 'lodash',
            amd: 'lodash',
            root: '_', // 指向全局变量
        },
    };

    !config.optimization && (config.optimization = {});
    !config.optimization.minimizer && (config.optimization.minimizer = []);

    config.optimization.splitChunks = false;
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

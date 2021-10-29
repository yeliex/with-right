import * as Webpack from 'webpack';
import CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');

const transform: Webpack.TransformConfiguration = (config) => {
    config.mode = 'production';
    config.devtool = 'source-map';

    !config.plugins && (config.plugins = []);

    config.plugins.push(new Webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production'),
    }));

    !config.optimization && (config.optimization = {});
    !config.optimization.minimizer && (config.optimization.minimizer = []);
    config.optimization.minimize = true;
    config.optimization.minimizer.push(new CssMinimizerWebpackPlugin());

    config.stats = {
        ...config.stats as any ?? {},
        performance: false,
        depth: false,
        modules: false,
        moduleTrace: false,
        chunks: false,
    };

    return config;
};

export default transform;

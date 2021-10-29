import * as Webpack from 'webpack';
import 'webpack-dev-server';

const transform: Webpack.TransformConfiguration = (config) => {
    config.mode = 'development';
    config.devtool = 'cheap-module-source-map';

    !config.plugins && (config.plugins = []);

    config.plugins.push(new Webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('development'),
    }));

    config.devServer = {
        compress: false,
        host: '0.0.0.0',
        port: 21801,
        hot: true,
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        allowedHosts: 'all',
        devMiddleware: {
            publicPath: '/',
        },
        client: {
            overlay: {
                warnings: false,
                errors: true,
            },
        },
        static: false,
        historyApiFallback: {
            disableDotRule: true,
            verbose: true,
        },
    };

    return config;
};

export default transform;

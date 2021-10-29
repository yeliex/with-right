import * as Webpack from 'webpack';
import { getEntries, getExamples } from '../utils/entry';
import baseConfig from './webpack.config.base';
import transformDevelopment from './webpack.config.development';
import transformExample from './webpack.config.example';
import transformPackage from './webpack.config.package';
import transformProduction from './webpack.config.production';

declare module 'webpack' {
    export interface Environment {
        WEBPACK_SERVE: boolean;
        WEBPACK_BUILD: boolean;
        WEBPACK_WATCH: boolean;

        NODE_ENV: string;

        source?: 'examples' | 'packages';

        [key: string]: any;
    }

    export type Argv = Record<string, any> & {
        env: Environment;
    };

    export type ConfigurationType = Webpack.Configuration | Webpack.Configuration[];

    export type CreateConfiguration = (
        env: Environment,
        argv: Argv,
    ) => ConfigurationType | Promise<ConfigurationType>;

    export type TransformConfiguration = (
        config: Webpack.Configuration,
        env: Environment,
    ) => Webpack.Configuration | Promise<Webpack.Configuration>;
}

const createConfig: Webpack.CreateConfiguration = async (webpackEnv) => {
    const env = process.env.NODE_ENV = webpackEnv.WEBPACK_SERVE ? 'development' : 'production';

    webpackEnv.NODE_ENV = env;

    let config = await baseConfig({}, webpackEnv);

    if (webpackEnv.source === 'examples') {
        config.entry = await getExamples();
        config = await transformExample(config, webpackEnv);
    } else {
        config.entry = await getEntries(process.cwd());
        config = await transformPackage(config, webpackEnv);
    }

    if (env === 'development') {
        config = await transformDevelopment(config, webpackEnv);
    } else {
        config = await transformProduction(config, webpackEnv);
    }

    return config;
};

export default createConfig;

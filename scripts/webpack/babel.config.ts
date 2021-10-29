export default {
    sourceType: 'unambiguous',
    cacheDirectory: require('path').resolve(require('os').tmpdir(), 'webpack/babel'),
    presets: [
        [
            require.resolve('@babel/preset-react'),
        ],
        [
            require.resolve('@babel/preset-env'),
            {
                useBuiltIns: 'usage',
                corejs: '3.19',
            },
        ],
    ],
    plugins: [
        [
            require.resolve('babel-plugin-import'),
            {
                libraryName: 'lodash',
                libraryDirectory: '',
                camel2DashComponentName: false,
            },
            'import-lodash',
        ],
    ],
};

module.exports = {
    modifyVars: {
        '@primary-color': '#1890ff'
    },
    lessVarsFilePath: './src/styles/variables.less',
    cssLoaderOptions: {
        esModule: false,
        sourceMap: false,
        modules: {
            mode: 'local'
        }
    },
    // Other NextConfig Here...
    webpack: (config) => {
        return config;
    }
}

const withAntdLess = require('next-plugin-antd-less');
module.exports = withAntdLess(module.exports);

const withYAML = require('next-yaml');
module.exports = withYAML(module.exports);
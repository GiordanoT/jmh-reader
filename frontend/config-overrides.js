module.exports = function override(config, env) {
    config.mode = 'development';
    config.optimization = {minimize: true};
    return config;
}

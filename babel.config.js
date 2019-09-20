module.exports = function (api) {
    api.cache(true);
  
    const presets =  ["@babel/preset-env", "@babel/react"];

    const plugins = [  "@babel/proposal-class-properties" ];
  
    return {
      presets,
      plugins
    };
  }
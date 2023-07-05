const getIP = require("./config/utils/getip");
module.exports = {
  // 配置路径别名
  configureWebpack: {
    resolve: {
      alias: {
        "@": "/src",
      },
    },
  },
  chainWebpack: async (config) => {
    // 获取本机外网ip
    const ip = await getIP();
    config.devServer.host(ip);
    console.log("[ 外网ip ] >", ip);
  },
};

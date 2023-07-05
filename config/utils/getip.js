var http = require("http");
const getIP = () => {
  var options = {
    hostname: "4.ipw.cn",
    port: 80,
    path: "/",
    method: "GET",
  };
  return new Promise((resolve, reject) => {
    var req = http.request(options, function (res) {
      res.setEncoding("utf8");
      res.on("data", function (chunk) {
        console.log("BODY: " + chunk);
        resolve(chunk);
      });
    });

    req.on("error", function (e) {
      console.log("problem with request: " + e.message);
      reject(e);
    });
    req.end();
  });
};

module.exports = getIP;

var concurrently = require("concurrently");
var path = require("path");

function getRootPath() {
    console.log("__dirname", __dirname);
    return path.resolve(__dirname, "../");
}

function getPkgVersion() {
    return require(path.join(getRootPath(), "package.json")).version;
}

function printPkgVersion() {
    var version = getPkgVersion();
    console.log("pm2-web version", version);
    console.log();
}
function startApp() {
    console.log("start app:", getRootPath());
    concurrently(["npm:server"], {
        cwd: getRootPath(),
    });
}

printPkgVersion();
startApp();


import CreateServer from "./server";
import CreateBot from "./bot";

let config!: Config;
try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    config = require("../config.json") as Config;
}catch(err) {
    throw new Error("Missing configuration file!");
}

if (!config.port || !config.token) throw new Error("Config file is not complete!");

(() => {
    CreateServer(config.port);
    CreateBot(config.token, config.prefix);
})();

interface Config {
    port: number,
    prefix: string,
    token: string
}
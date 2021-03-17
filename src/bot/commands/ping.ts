import { CommandClientAdd } from "detritus-client";


export default {
    name: "ping",
    run: (ctx) => {
        return ctx.reply("pong!");
    }
} as CommandClientAdd;
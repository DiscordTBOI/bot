
import { CommandClientAdd } from "detritus-client";
import {LinkedUsers} from "../../";
import {Sockets} from "../../../server";
import { error, success } from "../../../utils";

export default {
    name: "link",
    disableDm: true,
    run: (ctx, args) => {
        const id = args.link as string;
        if (!id) return ctx.reply(`
You must provide your TBOI token in order to use this command!

**How to get your token:**
- Download the DiscordTBOI mod (https://github.com/DiscordTBOI/client)
- After you start a new game, open the **console** (https://bindingofisaacrebirth.gamepedia.com/Debug_Console)
- You should see a number, that's your token!

**Tokens change every time you exit the game!**
`);
        if (LinkedUsers.has(ctx.userId)) return error(`You are already linked! Do \`${ctx.prefix}unlink\` to unlink.`, ctx);
        if (!Sockets.has(id)) return error("Invalid token.", ctx);
        LinkedUsers.set(ctx.userId, {socketId: id, channelId: ctx.channelId});
        success("Token linked successfully", ctx);
    }
} as CommandClientAdd;
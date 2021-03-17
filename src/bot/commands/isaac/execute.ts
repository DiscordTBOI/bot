
import { CommandClientAdd } from "detritus-client";
import {LinkedUsers} from "../../";
import {Sockets} from "../../../server";
import { error, success } from "../../../utils";

export default {
    name: "execute",
    disableDm: true,
    run: (ctx, args) => {
        const code = args.execute as string;
        if (code.includes("\n")) return error("Commands cannot include new lines.", ctx);
        const userToken = LinkedUsers.get(ctx.userId);
        if (!userToken) return error(`You are not linked! Do \`${ctx.prefix}link\` to link.`, ctx);
        const socket = Sockets.get(userToken.socketId);
        if (!socket) {
            LinkedUsers.delete(ctx.userId);
            return error("Looks like you exited the game! Unliked account.", ctx);
        }
        socket.write(code + "\n");
        success("Command executed", ctx);
    }
} as CommandClientAdd;
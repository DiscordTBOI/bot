
import { CommandClientAdd } from "detritus-client";
import {LinkedUsers} from "../../";
import {PACKET_SEND_CODES, Sockets} from "../../../server";
import { error, success, sendPacket } from "../../../utils";

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
            return error("Looks like you exited the game! Unlinked account.", ctx);
        }

        sendPacket(PACKET_SEND_CODES.EXECUTE_COMMAND, code.trim(), socket);
        success("Command executed", ctx);
    }
} as CommandClientAdd;
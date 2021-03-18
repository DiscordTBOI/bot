import { Context } from "detritus-client/lib/command";
import { Message } from "detritus-client/lib/structures";
import { Socket } from "node:net";
import { PACKET_SEND_CODES } from "../server";

export function error(message: string, ctx: Context) : Promise<Message> {
    return ctx.reply({content: `> ❌ ${message}`, messageReference: {channelId: ctx.channelId, messageId: ctx.messageId}, allowedMentions: {repliedUser: false}});
}

export function success(message: string, ctx: Context) : Promise<Message> {
    return ctx.reply({content: `> ✅ ${message}`, messageReference: {channelId: ctx.channelId, messageId: ctx.messageId}, allowedMentions: {repliedUser: false}});
}

export function sendPacket(type: PACKET_SEND_CODES, msg: string, socket: Socket) : void {
    socket.write(`${type}${msg}\n`);
}
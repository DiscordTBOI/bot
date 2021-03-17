import { Context } from "detritus-client/lib/command";
import { Message } from "detritus-client/lib/structures";

export function error(message: string, ctx: Context) : Promise<Message> {
    return ctx.reply({content: `> ❌ ${message}`, messageReference: {channelId: ctx.channelId, messageId: ctx.messageId}, allowedMentions: {repliedUser: false}});
}

export function success(message: string, ctx: Context) : Promise<Message> {
    return ctx.reply({content: `> ✅ ${message}`, messageReference: {channelId: ctx.channelId, messageId: ctx.messageId}, allowedMentions: {repliedUser: false}});
}
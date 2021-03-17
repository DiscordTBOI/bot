
import {CommandClient} from "detritus-client";

export const LinkedUsers = new Map<string, LinkedUser>(); // user id - socket id

export default async (token: string, prefix: string): Promise<void> => {

    const commandClient = new CommandClient(token, {
        cache: {
            //channels: {enabled: false},
            emojis: {enabled: false},
            members: {enabled: false},
            messages: {enabled: false},
            presences: {enabled: false},
            users: {enabled: false}
        },
        prefix,
    });

    commandClient.addMultipleIn(`${__dirname}/commands`, {isAbsolute: true, subdirectories: true});
    await commandClient.run();

    console.log("Bot started");
};

export interface LinkedUser {
    socketId: string,
    channelId: string
}
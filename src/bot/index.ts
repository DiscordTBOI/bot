
import {CommandClient, CommandClientAdd} from "detritus-client";
import {getFiles} from "../utils";

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
        prefix
    });

    const allCommands = getFiles(`${__dirname}/commands`);
    for (const commandPath of allCommands) {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const command = require(commandPath).default as CommandClientAdd;
        if (!command) continue;
        commandClient.add(command);
    }

    await commandClient.run();

    console.log("Bot started");
};
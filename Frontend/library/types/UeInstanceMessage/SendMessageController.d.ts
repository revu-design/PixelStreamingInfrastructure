import { DataChannelSender } from '../DataChannel/DataChannelSender';
import { StreamMessageController } from './StreamMessageController';
export declare class SendMessageController {
    toStreamerMessagesMapProvider: StreamMessageController;
    dataChannelSender: DataChannelSender;
    /**
     * @param dataChannelSender - Data channel instance
     * @param toStreamerMessagesMapProvider - Stream Messages instance
     */
    constructor(dataChannelSender: DataChannelSender, toStreamerMessagesMapProvider: StreamMessageController);
    /**
     * Send a message to the streamer through the data channel
     * @param messageType - the type of message we are sending
     * @param messageData - the message data we are sending over the data channel
     * @returns - nil
     */
    sendMessageToStreamer(messageType: string, messageData?: Array<number | string>): void;
}

// Copyright Epic Games, Inc. All Rights Reserved.
import { Logger } from '../Logger/Logger';
export class SendMessageController {
    /**
     * @param dataChannelSender - Data channel instance
     * @param toStreamerMessagesMapProvider - Stream Messages instance
     */
    constructor(dataChannelSender, toStreamerMessagesMapProvider) {
        this.dataChannelSender = dataChannelSender;
        this.toStreamerMessagesMapProvider = toStreamerMessagesMapProvider;
    }
    /**
     * Send a message to the streamer through the data channel
     * @param messageType - the type of message we are sending
     * @param messageData - the message data we are sending over the data channel
     * @returns - nil
     */
    sendMessageToStreamer(messageType, messageData) {
        if (messageData === undefined) {
            messageData = [];
        }
        const toStreamerMessages = this.toStreamerMessagesMapProvider.toStreamerMessages;
        const messageFormat = toStreamerMessages.get(messageType);
        if (messageFormat === undefined) {
            Logger.Error(Logger.GetStackTrace(), `Attempted to send a message to the streamer with message type: ${messageType}, but the frontend hasn't been configured to send such a message. Check you've added the message type in your cpp`);
            return;
        }
        if (messageFormat.structure && messageData && messageFormat.structure.length !== messageData.length) {
            Logger.Error(Logger.GetStackTrace(), `Provided message data doesn't match expected layout. Expected [ ${messageFormat.structure.map((element) => {
                switch (element) {
                    case 'uint8':
                    case 'uint16':
                    case 'int16':
                    case 'float':
                    case 'double':
                        return 'number';
                    case 'string':
                        return 'string';
                }
            }).toString()} ] but received [ ${messageData.map((element) => typeof element).toString()} ]`);
            return;
        }
        let byteLength = 0;
        const textEncoder = new TextEncoder();
        // One loop to calculate the length in bytes of all of the provided data
        messageData.forEach((element, idx) => {
            const type = messageFormat.structure[idx];
            switch (type) {
                case 'uint8':
                    byteLength += 1;
                    break;
                case 'uint16':
                    byteLength += 2;
                    break;
                case 'int16':
                    byteLength += 2;
                    break;
                case 'float':
                    byteLength += 4;
                    break;
                case 'double':
                    byteLength += 8;
                    break;
                case 'string':
                    // 2 bytes for string length
                    byteLength += 2;
                    // 2 bytes per characters
                    byteLength += 2 * textEncoder.encode(element).length;
                    break;
            }
        });
        const data = new DataView(new ArrayBuffer(byteLength + 1));
        data.setUint8(0, messageFormat.id);
        let byteOffset = 1;
        messageData.forEach((element, idx) => {
            const type = messageFormat.structure[idx];
            switch (type) {
                case 'uint8':
                    data.setUint8(byteOffset, element);
                    byteOffset += 1;
                    break;
                case 'uint16':
                    data.setUint16(byteOffset, element, true);
                    byteOffset += 2;
                    break;
                case 'int16':
                    data.setInt16(byteOffset, element, true);
                    byteOffset += 2;
                    break;
                case 'float':
                    data.setFloat32(byteOffset, element, true);
                    byteOffset += 4;
                    break;
                case 'double':
                    data.setFloat64(byteOffset, element, true);
                    byteOffset += 8;
                    break;
                case 'string':
                    data.setUint16(byteOffset, element.length, true);
                    byteOffset += 2;
                    for (let i = 0; i < element.length; i++) {
                        data.setUint16(byteOffset, element.charCodeAt(i), true);
                        byteOffset += 2;
                    }
                    break;
            }
        });
        if (!this.dataChannelSender.canSend()) {
            Logger.Info(Logger.GetStackTrace(), `Data channel cannot send yet, skipping sending message: ${messageType} - ${new Uint8Array(data.buffer)}`);
            return;
        }
        this.dataChannelSender.sendData(data.buffer);
    }
}
//# sourceMappingURL=SendMessageController.js.map
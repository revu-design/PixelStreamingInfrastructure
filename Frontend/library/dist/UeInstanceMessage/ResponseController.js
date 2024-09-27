// Copyright Epic Games, Inc. All Rights Reserved.
import { Logger } from '../Logger/Logger';
export class ResponseController {
    constructor() {
        this.responseEventListeners = new Map();
    }
    /**
     * Add a response event listener to the response map
     * @param name - The name of the response
     * @param listener - The method to be activated when the response is selected
     */
    addResponseEventListener(name, listener) {
        this.responseEventListeners.set(name, listener);
    }
    /**
     * Remove a response event listener to the response map
     * @param name - The name of the response
     */
    removeResponseEventListener(name) {
        this.responseEventListeners.delete(name);
    }
    /**
     * Handle a response when receiving one form the streamer
     * @param message - Data received from the data channel with the command in question
     */
    onResponse(message) {
        Logger.Log(Logger.GetStackTrace(), 'DataChannelReceiveMessageType.Response', 6);
        const responses = new TextDecoder('utf-16').decode(message.slice(1));
        Logger.Log(Logger.GetStackTrace(), responses, 6);
        this.responseEventListeners.forEach((listener) => {
            listener(responses);
        });
    }
}
//# sourceMappingURL=ResponseController.js.map
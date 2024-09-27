export declare class ResponseController {
    responseEventListeners: Map<string, (response: string) => void>;
    /**
     * Add a response event listener to the response map
     * @param name - The name of the response
     * @param listener - The method to be activated when the response is selected
     */
    addResponseEventListener(name: string, listener: (response: string) => void): void;
    /**
     * Remove a response event listener to the response map
     * @param name - The name of the response
     */
    removeResponseEventListener(name: string): void;
    /**
     * Handle a response when receiving one form the streamer
     * @param message - Data received from the data channel with the command in question
     */
    onResponse(message: ArrayBuffer): void;
}

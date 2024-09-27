// Copyright Epic Games, Inc. All Rights Reserved.
import { Logger } from '../Logger/Logger';
/**
 * Handles the Sending and Receiving of messages to the UE Instance via the Data Channel
 */
export class DataChannelController {
    constructor() {
        this.isReceivingFreezeFrame = false;
    }
    /**
     * return the current state of a datachannel controller instance
     * @returns the current DataChannelController instance
     */
    getDataChannelInstance() {
        return this;
    }
    /**
     * To Create and Set up a Data Channel
     * @param peerConnection - The RTC Peer Connection
     * @param label - Label of the Data Channel
     * @param datachannelOptions - Optional RTC DataChannel options
     */
    createDataChannel(peerConnection, label, datachannelOptions) {
        this.peerConnection = peerConnection;
        this.label = label;
        this.datachannelOptions = datachannelOptions;
        if (datachannelOptions == null) {
            this.datachannelOptions = {};
            this.datachannelOptions.ordered = true;
        }
        this.dataChannel = this.peerConnection.createDataChannel(this.label, this.datachannelOptions);
        this.setupDataChannel();
    }
    setupDataChannel() {
        //We Want an Array Buffer not a blob
        this.dataChannel.binaryType = 'arraybuffer';
        this.dataChannel.onopen = (ev) => this.handleOnOpen(ev);
        this.dataChannel.onclose = (ev) => this.handleOnClose(ev);
        this.dataChannel.onmessage = (ev) => this.handleOnMessage(ev);
        this.dataChannel.onerror = (ev) => this.handleOnError(ev);
    }
    /**
     * Handles when the Data Channel is opened
     */
    handleOnOpen(ev) {
        var _a;
        Logger.Log(Logger.GetStackTrace(), `Data Channel (${this.label}) opened.`, 7);
        this.onOpen((_a = this.dataChannel) === null || _a === void 0 ? void 0 : _a.label, ev);
    }
    /**
     * Handles when the Data Channel is closed
     */
    handleOnClose(ev) {
        var _a;
        Logger.Log(Logger.GetStackTrace(), `Data Channel (${this.label}) closed.`, 7);
        this.onClose((_a = this.dataChannel) === null || _a === void 0 ? void 0 : _a.label, ev);
    }
    /**
     * Handles when a message is received
     * @param event - Message Event
     */
    handleOnMessage(event) {
        // Higher log level to prevent log spam with messages received
        Logger.Log(Logger.GetStackTrace(), `Data Channel (${this.label}) message: ${event}`, 8);
    }
    /**
     * Handles when an error is thrown
     * @param event - Error Event
     */
    handleOnError(event) {
        var _a;
        Logger.Log(Logger.GetStackTrace(), `Data Channel (${this.label}) error: ${event}`, 7);
        this.onError((_a = this.dataChannel) === null || _a === void 0 ? void 0 : _a.label, event);
    }
    /**
     * Override to register onOpen handler
     * @param label Data channel label ("datachannel", "send-datachannel", "recv-datachannel")
     * @param ev event
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onOpen(label, ev) {
        // empty default implementation
    }
    /**
     * Override to register onClose handler
     * @param label Data channel label ("datachannel", "send-datachannel", "recv-datachannel")
     * @param ev event
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onClose(label, ev) {
        // empty default implementation
    }
    /**
     * Override to register onError handler
     * @param label Data channel label ("datachannel", "send-datachannel", "recv-datachannel")
     * @param ev event
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onError(label, ev) {
        // empty default implementation
    }
}
//# sourceMappingURL=DataChannelController.js.map
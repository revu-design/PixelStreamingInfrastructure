import { DataChannelController } from './DataChannelController';
/**
 * A class for sending data channel messages
 */
export declare class DataChannelSender {
    dataChannelProvider: DataChannelController;
    /**
     * @param dataChannelProvider - Data channel object type
     */
    constructor(dataChannelProvider: DataChannelController);
    canSend(): boolean;
    /**
     * Send Data over the Data channel to the UE Instance
     * @param data - Message Data Array Buffer
     */
    sendData(data: ArrayBuffer): void;
    /**
     * An override method for resetting the Afk warning timer when data is sent over the data channel
     */
    resetAfkWarningTimerOnDataSend(): void;
}

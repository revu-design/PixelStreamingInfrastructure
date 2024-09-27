import { SendMessageController } from './SendMessageController';
export declare class ToStreamerMessagesController {
    sendMessageController: SendMessageController;
    /**
     * @param sendMessageController - Stream message controller instance
     */
    constructor(sendMessageController: SendMessageController);
    /**
     * Send Request to Take Quality Control to the UE Instance
     */
    SendRequestQualityControl(): void;
    /**
     * Send Max FPS Request to the UE Instance
     */
    SendMaxFpsRequest(): void;
    /**
     * Send Average Bitrate Request to the UE Instance
     */
    SendAverageBitrateRequest(): void;
    /**
     * Send a Start Streaming Message to the UE Instance
     */
    SendStartStreaming(): void;
    /**
     * Send a Stop Streaming Message to the UE Instance
     */
    SendStopStreaming(): void;
    /**
     * Send a Request Initial Settings to the UE Instance
     */
    SendRequestInitialSettings(): void;
}

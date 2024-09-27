// Copyright Epic Games, Inc. All Rights Reserved.
import { Logger } from '../Logger/Logger';
/**
 * Latency Test Results Data
 */
export class LatencyTestResults {
    constructor() {
        //Fields Set from the latency payload regardless of version
        this.ReceiptTimeMs = null;
        this.TransmissionTimeMs = null;
        //Fields Set from the latency payload from 4.27.2
        this.PreCaptureTimeMs = null;
        this.PostCaptureTimeMs = null;
        this.PreEncodeTimeMs = null;
        this.PostEncodeTimeMs = null;
        //Fields Set from the latency payload from 5.0
        this.EncodeMs = null;
        this.CaptureToSendMs = null;
        //Fields Set when processed
        this.testStartTimeMs = 0;
        this.browserReceiptTimeMs = 0;
        //Fields set from calculations
        this.latencyExcludingDecode = 0;
        this.testDuration = 0;
        //ueLatency: number = 0;
        this.networkLatency = 0;
        this.browserSendLatency = 0;
        this.frameDisplayDeltaTimeMs = 0;
        this.endToEndLatency = 0;
        //uePixelStreamLatency: number = 0;
        this.encodeLatency = 0;
    }
    /**
     * Sets the Delta Time Milliseconds
     * @param DeltaTimeMs - Delta Time Milliseconds
     */
    setFrameDisplayDeltaTime(DeltaTimeMs) {
        if (this.frameDisplayDeltaTimeMs == 0) {
            this.frameDisplayDeltaTimeMs = Math.round(DeltaTimeMs);
        }
    }
    /**
     * Process the encoder times and set them
     */
    processFields() {
        if (this.EncodeMs == null &&
            (this.PreEncodeTimeMs != null || this.PostEncodeTimeMs != null)) {
            Logger.Log(Logger.GetStackTrace(), `Setting Encode Ms \n ${this.PostEncodeTimeMs} \n ${this.PreEncodeTimeMs}`, 6);
            this.EncodeMs = this.PostEncodeTimeMs - this.PreEncodeTimeMs;
        }
        if (this.CaptureToSendMs == null &&
            (this.PreCaptureTimeMs != null || this.PostCaptureTimeMs != null)) {
            Logger.Log(Logger.GetStackTrace(), `Setting CaptureToSendMs Ms \n ${this.PostCaptureTimeMs} \n ${this.PreCaptureTimeMs}`, 6);
            this.CaptureToSendMs =
                this.PostCaptureTimeMs - this.PreCaptureTimeMs;
        }
    }
}
//# sourceMappingURL=LatencyTestResults.js.map
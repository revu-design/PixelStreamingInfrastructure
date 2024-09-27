// Copyright Epic Games, Inc. All Rights Reserved.
/**
 * Latency Test Results Data
 */
export class InitialSettings {
    constructor() {
        this.PixelStreamingSettings = new PixelStreamingSettings();
        this.EncoderSettings = new EncoderSettings();
        this.WebRTCSettings = new WebRTCSettings();
    }
    /**
     * Checks for compatibility with the FPS and MaxFPS stats between 4.27 and 5
     */
    ueCompatible() {
        if (this.WebRTCSettings.MaxFPS != null) {
            this.WebRTCSettings.FPS = this.WebRTCSettings.MaxFPS;
        }
    }
}
/**
 * A class for handling Pixel Streaming details
 */
export class PixelStreamingSettings {
}
/**
 * A class for handling encoder stats
 */
export class EncoderSettings {
}
/**
 * A class for handling web rtc stats
 */
export class WebRTCSettings {
}
//# sourceMappingURL=InitialSettings.js.map
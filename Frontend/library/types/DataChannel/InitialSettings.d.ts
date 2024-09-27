/**
 * Latency Test Results Data
 */
export declare class InitialSettings {
    PixelStreamingSettings: PixelStreamingSettings;
    EncoderSettings: EncoderSettings;
    WebRTCSettings: WebRTCSettings;
    constructor();
    /**
     * Checks for compatibility with the FPS and MaxFPS stats between 4.27 and 5
     */
    ueCompatible(): void;
}
/**
 * A class for handling Pixel Streaming details
 */
export declare class PixelStreamingSettings {
    AllowPixelStreamingCommands?: boolean;
    DisableLatencyTest?: boolean;
}
/**
 * A class for handling encoder stats
 */
export declare class EncoderSettings {
    TargetBitrate?: number;
    MaxBitrate?: number;
    MinQP?: number;
    MaxQP?: number;
    RateControl?: 'CBR' | 'VBR' | 'ConstQP';
    FillerData?: boolean;
    MultiPass?: 'DISABLED' | 'QUARTER' | 'FULL';
}
/**
 * A class for handling web rtc stats
 */
export declare class WebRTCSettings {
    DegradationPref?: 'BALANCED' | 'MAINTAIN_FRAMERATE' | 'MAINTAIN_RESOLUTION';
    MinBitrate?: number;
    MaxBitrate?: number;
    LowQP?: number;
    HighQP?: number;
    MaxFPS?: number;
    FPS?: number;
}

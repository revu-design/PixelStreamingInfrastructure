/// <reference types="webxr" />
import { FlagsIds, NumericParametersIds, OptionParametersIds, TextParametersIds } from '../Config/Config';
import { LatencyTestResults } from '../DataChannel/LatencyTestResults';
import { AggregatedStats } from '../PeerConnectionController/AggregatedStats';
import { InitialSettings } from '../pixelstreamingfrontend';
import { MessageStreamerList } from '../WebSockets/MessageReceive';
import { SettingFlag } from '../Config/SettingFlag';
import { SettingNumber } from '../Config/SettingNumber';
import { SettingText } from '../Config/SettingText';
import { SettingOption } from '../Config/SettingOption';
import { DataChannelLatencyTestResponse, DataChannelLatencyTestResult } from "../DataChannel/DataChannelLatencyTestResults";
/**
 * An event that is emitted when AFK disconnect is about to happen.
 * Can be cancelled by calling the callback function provided as part of the event.
 */
export declare class AfkWarningActivateEvent extends Event {
    readonly type: 'afkWarningActivate';
    readonly data: {
        /** How many seconds until the session is disconnected */
        countDown: number;
        /** Callback function that needs to be called if you wish to cancel the AFK disconnect timeout. */
        dismissAfk: () => void;
    };
    constructor(data: AfkWarningActivateEvent['data']);
}
/**
 * An event that is emitted when the AFK disconnect countdown is updated.
 */
export declare class AfkWarningUpdateEvent extends Event {
    readonly type: 'afkWarningUpdate';
    readonly data: {
        /** How many seconds until the session is disconnected */
        countDown: number;
    };
    constructor(data: AfkWarningUpdateEvent['data']);
}
/**
 * An event that is emitted when AFK warning is deactivated.
 */
export declare class AfkWarningDeactivateEvent extends Event {
    readonly type: 'afkWarningDeactivate';
    constructor();
}
/**
 * An event that is emitted when AFK countdown reaches 0 and the user is disconnected.
 */
export declare class AfkTimedOutEvent extends Event {
    readonly type: 'afkTimedOut';
    constructor();
}
/**
 * An event that is emitted when we receive new video quality value.
 */
export declare class VideoEncoderAvgQPEvent extends Event {
    readonly type: 'videoEncoderAvgQP';
    readonly data: {
        /** Average video quality value */
        avgQP: number;
    };
    constructor(data: VideoEncoderAvgQPEvent['data']);
}
/**
 * An event that is emitted after a WebRtc connection has been negotiated.
 */
export declare class WebRtcSdpEvent extends Event {
    readonly type: 'webRtcSdp';
    constructor();
}
/**
 * An event that is emitted when auto connecting.
 */
export declare class WebRtcAutoConnectEvent extends Event {
    readonly type: 'webRtcAutoConnect';
    constructor();
}
/**
 * An event that is emitted when sending a WebRtc offer.
 */
export declare class WebRtcConnectingEvent extends Event {
    readonly type: 'webRtcConnecting';
    constructor();
}
/**
 * An event that is emitted when WebRtc connection has been established.
 */
export declare class WebRtcConnectedEvent extends Event {
    readonly type: 'webRtcConnected';
    constructor();
}
/**
 * An event that is emitted if WebRtc connection has failed.
 */
export declare class WebRtcFailedEvent extends Event {
    readonly type: 'webRtcFailed';
    constructor();
}
/**
 * An event that is emitted if WebRtc connection is disconnected.
 */
export declare class WebRtcDisconnectedEvent extends Event {
    readonly type: 'webRtcDisconnected';
    readonly data: {
        /** Message describing the disconnect reason */
        eventString: string;
        /** true if the user is able to reconnect, false if disconnected because of unrecoverable reasons like not able to connect to the signaling server */
        allowClickToReconnect: boolean;
    };
    constructor(data: WebRtcDisconnectedEvent['data']);
}
/**
 * An event that is emitted when RTCDataChannel is opened.
 */
export declare class DataChannelOpenEvent extends Event {
    readonly type: 'dataChannelOpen';
    readonly data: {
        /** Data channel label. One of 'datachannel', 'send-datachannel', 'recv-datachannel' */
        label: string;
        /** RTCDataChannel onOpen event */
        event: Event;
    };
    constructor(data: DataChannelOpenEvent['data']);
}
/**
 * An event that is emitted when RTCDataChannel is closed.
 */
export declare class DataChannelCloseEvent extends Event {
    readonly type: 'dataChannelClose';
    readonly data: {
        /** Data channel label. One of 'datachannel', 'send-datachannel', 'recv-datachannel' */
        label: string;
        /** RTCDataChannel onClose event */
        event: Event;
    };
    constructor(data: DataChannelCloseEvent['data']);
}
/**
 * An event that is emitted on RTCDataChannel errors.
 */
export declare class DataChannelErrorEvent extends Event {
    readonly type: 'dataChannelError';
    readonly data: {
        /** Data channel label. One of 'datachannel', 'send-datachannel', 'recv-datachannel' */
        label: string;
        /** RTCDataChannel onError event */
        event: Event;
    };
    constructor(data: DataChannelErrorEvent['data']);
}
/**
 * An event that is emitted when the video stream has been initialized.
 */
export declare class VideoInitializedEvent extends Event {
    readonly type: 'videoInitialized';
    constructor();
}
/**
 * An event that is emitted when video stream loading starts.
 */
export declare class StreamLoadingEvent extends Event {
    readonly type: 'streamLoading';
    constructor();
}
/**
 * An event that is emitted when video stream loading has finished.
 */
export declare class StreamPreConnectEvent extends Event {
    readonly type: 'streamConnect';
    constructor();
}
/**
 * An event that is emitted when video stream has stopped.
 */
export declare class StreamPreDisconnectEvent extends Event {
    readonly type: 'streamDisconnect';
    constructor();
}
/**
 * An event that is emitted when video stream is reconnecting.
 */
export declare class StreamReconnectEvent extends Event {
    readonly type: 'streamReconnect';
    constructor();
}
/**
 * An event that is emitted if there are errors loading the video stream.
 */
export declare class PlayStreamErrorEvent extends Event {
    readonly type: 'playStreamError';
    readonly data: {
        /** Error message */
        message: string;
    };
    constructor(data: PlayStreamErrorEvent['data']);
}
/**
 * An event that is emitted before trying to start video playback.
 */
export declare class PlayStreamEvent extends Event {
    readonly type: 'playStream';
    constructor();
}
/**
 * An event that is emitted if the browser rejects video playback. Can happen for example if
 * video auto-play without user interaction is refused by the browser.
 */
export declare class PlayStreamRejectedEvent extends Event {
    readonly type: 'playStreamRejected';
    readonly data: {
        /** Rejection reason */
        reason: unknown;
    };
    constructor(data: PlayStreamRejectedEvent['data']);
}
/**
 * An event that is emitted when receiving a full FreezeFrame image from UE.
 */
export declare class LoadFreezeFrameEvent extends Event {
    readonly type: 'loadFreezeFrame';
    readonly data: {
        /** true if should show click-to-play overlay, not the freeze frame contents */
        shouldShowPlayOverlay: boolean;
        /** true if the received image is valid */
        isValid: boolean;
        /** Image data. Can be e.g. displayed by encoding as a data url. */
        jpegData?: Uint8Array;
    };
    constructor(data: LoadFreezeFrameEvent['data']);
}
/**
 * An event that is emitted when receiving UnfreezeFrame message from UE and video playback is about to be resumed.
 */
export declare class HideFreezeFrameEvent extends Event {
    readonly type: 'hideFreezeFrame';
    constructor();
}
/**
 * An event that is emitted when receiving WebRTC statistics.
 */
export declare class StatsReceivedEvent extends Event {
    readonly type: 'statsReceived';
    readonly data: {
        /** Statistics object */
        aggregatedStats: AggregatedStats;
    };
    constructor(data: StatsReceivedEvent['data']);
}
/**
 * An event that is emitted when streamer list changes.
 */
export declare class StreamerListMessageEvent extends Event {
    readonly type: 'streamerListMessage';
    readonly data: {
        /** Streamer list message containing an array of streamer ids */
        messageStreamerList: MessageStreamerList;
        /** Auto-selected streamer from the list, or null if unable to auto-select and user should be prompted to select */
        autoSelectedStreamerId: string;
        /** Wanted streamer id from various configurations. */
        wantedStreamerId: string;
    };
    constructor(data: StreamerListMessageEvent['data']);
}
/**
 * An event that is emitted when receiving latency test results.
 */
export declare class LatencyTestResultEvent extends Event {
    readonly type: 'latencyTestResult';
    readonly data: {
        /** Latency test result object */
        latencyTimings: LatencyTestResults;
    };
    constructor(data: LatencyTestResultEvent['data']);
}
/**
 * An event that is emitted when receiving data channel latency test response from server.
 * This event is handled by DataChannelLatencyTestController
 */
export declare class DataChannelLatencyTestResponseEvent extends Event {
    readonly type: 'dataChannelLatencyTestResponse';
    readonly data: {
        /** Latency test result object */
        response: DataChannelLatencyTestResponse;
    };
    constructor(data: DataChannelLatencyTestResponseEvent['data']);
}
/**
 * An event that is emitted when data channel latency test results are ready.
 */
export declare class DataChannelLatencyTestResultEvent extends Event {
    readonly type: 'dataChannelLatencyTestResult';
    readonly data: {
        /** Latency test result object */
        result: DataChannelLatencyTestResult;
    };
    constructor(data: DataChannelLatencyTestResultEvent['data']);
}
/**
 * An event that is emitted when receiving initial settings from UE.
 */
export declare class InitialSettingsEvent extends Event {
    readonly type: 'initialSettings';
    readonly data: {
        /** Initial settings from UE */
        settings: InitialSettings;
    };
    constructor(data: InitialSettingsEvent['data']);
}
export type SettingsData = {
    /** Flag id */
    id: FlagsIds;
    type: 'flag';
    /** Flag value */
    value: boolean;
    /** SettingFlag object */
    target: SettingFlag;
} | {
    /** Numeric setting id */
    id: NumericParametersIds;
    type: 'number';
    /** Numeric setting value */
    value: number;
    /** SettingNumber object */
    target: SettingNumber;
} | {
    /** Text setting id */
    id: TextParametersIds;
    type: 'text';
    /** Text setting value */
    value: string;
    /** SettingText object */
    target: SettingText;
} | {
    /** Option setting id */
    id: OptionParametersIds;
    type: 'option';
    /** Option setting selected value */
    value: string;
    /** SettingOption object */
    target: SettingOption;
};
/**
 * An event that is emitted when PixelStreaming settings change.
 */
export declare class SettingsChangedEvent extends Event {
    readonly type: 'settingsChanged';
    readonly data: SettingsData;
    constructor(data: SettingsChangedEvent['data']);
}
/**
 * Event emitted when an XR Session starts
 */
export declare class XrSessionStartedEvent extends Event {
    readonly type: 'xrSessionStarted';
    constructor();
}
/**
 * Event emitted when an XR Session ends
 */
export declare class XrSessionEndedEvent extends Event {
    readonly type: 'xrSessionEnded';
    constructor();
}
export type XrFrameData = {
    /** The frame timestamp  */
    time: DOMHighResTimeStamp;
    /** The XRFrame */
    frame: XRFrame;
};
/**
 * Event emitted when an XR Frame is complete
 */
export declare class XrFrameEvent extends Event {
    readonly type: 'xrFrame';
    readonly data: XrFrameData;
    constructor(data: XrFrameEvent['data']);
}
/**
 * An event that is emitted when receiving a player count from the signalling server
 */
export declare class PlayerCountEvent extends Event {
    readonly type: 'playerCount';
    readonly data: {
        /** count object */
        count: number;
    };
    constructor(data: PlayerCountEvent['data']);
}
export type PixelStreamingEvent = AfkWarningActivateEvent | AfkWarningUpdateEvent | AfkWarningDeactivateEvent | AfkTimedOutEvent | VideoEncoderAvgQPEvent | WebRtcSdpEvent | WebRtcAutoConnectEvent | WebRtcConnectingEvent | WebRtcConnectedEvent | WebRtcFailedEvent | WebRtcDisconnectedEvent | DataChannelOpenEvent | DataChannelCloseEvent | DataChannelErrorEvent | VideoInitializedEvent | StreamLoadingEvent | StreamPreConnectEvent | StreamReconnectEvent | StreamPreDisconnectEvent | PlayStreamErrorEvent | PlayStreamEvent | PlayStreamRejectedEvent | LoadFreezeFrameEvent | HideFreezeFrameEvent | StatsReceivedEvent | StreamerListMessageEvent | LatencyTestResultEvent | DataChannelLatencyTestResponseEvent | DataChannelLatencyTestResultEvent | InitialSettingsEvent | SettingsChangedEvent | XrSessionStartedEvent | XrSessionEndedEvent | XrFrameEvent | PlayerCountEvent;
export declare class EventEmitter extends EventTarget {
    /**
     * Dispatch a new event.
     * @param e event
     * @returns
     */
    dispatchEvent(e: PixelStreamingEvent): boolean;
    /**
     * Register an event handler.
     * @param type event name
     * @param listener event handler function
     */
    addEventListener<T extends PixelStreamingEvent['type'], E extends PixelStreamingEvent & {
        type: T;
    }>(type: T, listener: (e: Event & E) => void): void;
    /**
     * Remove an event handler.
     * @param type event name
     * @param listener event handler function
     */
    removeEventListener<T extends PixelStreamingEvent['type'], E extends PixelStreamingEvent & {
        type: T;
    }>(type: T, listener: (e: Event & E) => void): void;
}

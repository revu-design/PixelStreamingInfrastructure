/**
 * An event that is emitted when AFK disconnect is about to happen.
 * Can be cancelled by calling the callback function provided as part of the event.
 */
export class AfkWarningActivateEvent extends Event {
    constructor(data) {
        super('afkWarningActivate');
        this.data = data;
    }
}
/**
 * An event that is emitted when the AFK disconnect countdown is updated.
 */
export class AfkWarningUpdateEvent extends Event {
    constructor(data) {
        super('afkWarningUpdate');
        this.data = data;
    }
}
/**
 * An event that is emitted when AFK warning is deactivated.
 */
export class AfkWarningDeactivateEvent extends Event {
    constructor() {
        super('afkWarningDeactivate');
    }
}
/**
 * An event that is emitted when AFK countdown reaches 0 and the user is disconnected.
 */
export class AfkTimedOutEvent extends Event {
    constructor() {
        super('afkTimedOut');
    }
}
/**
 * An event that is emitted when we receive new video quality value.
 */
export class VideoEncoderAvgQPEvent extends Event {
    constructor(data) {
        super('videoEncoderAvgQP');
        this.data = data;
    }
}
/**
 * An event that is emitted after a WebRtc connection has been negotiated.
 */
export class WebRtcSdpEvent extends Event {
    constructor() {
        super('webRtcSdp');
    }
}
/**
 * An event that is emitted when auto connecting.
 */
export class WebRtcAutoConnectEvent extends Event {
    constructor() {
        super('webRtcAutoConnect');
    }
}
/**
 * An event that is emitted when sending a WebRtc offer.
 */
export class WebRtcConnectingEvent extends Event {
    constructor() {
        super('webRtcConnecting');
    }
}
/**
 * An event that is emitted when WebRtc connection has been established.
 */
export class WebRtcConnectedEvent extends Event {
    constructor() {
        super('webRtcConnected');
    }
}
/**
 * An event that is emitted if WebRtc connection has failed.
 */
export class WebRtcFailedEvent extends Event {
    constructor() {
        super('webRtcFailed');
    }
}
/**
 * An event that is emitted if WebRtc connection is disconnected.
 */
export class WebRtcDisconnectedEvent extends Event {
    constructor(data) {
        super('webRtcDisconnected');
        this.data = data;
    }
}
/**
 * An event that is emitted when RTCDataChannel is opened.
 */
export class DataChannelOpenEvent extends Event {
    constructor(data) {
        super('dataChannelOpen');
        this.data = data;
    }
}
/**
 * An event that is emitted when RTCDataChannel is closed.
 */
export class DataChannelCloseEvent extends Event {
    constructor(data) {
        super('dataChannelClose');
        this.data = data;
    }
}
/**
 * An event that is emitted on RTCDataChannel errors.
 */
export class DataChannelErrorEvent extends Event {
    constructor(data) {
        super('dataChannelError');
        this.data = data;
    }
}
/**
 * An event that is emitted when the video stream has been initialized.
 */
export class VideoInitializedEvent extends Event {
    constructor() {
        super('videoInitialized');
    }
}
/**
 * An event that is emitted when video stream loading starts.
 */
export class StreamLoadingEvent extends Event {
    constructor() {
        super('streamLoading');
    }
}
/**
 * An event that is emitted when video stream loading has finished.
 */
export class StreamPreConnectEvent extends Event {
    constructor() {
        super('streamConnect');
    }
}
/**
 * An event that is emitted when video stream has stopped.
 */
export class StreamPreDisconnectEvent extends Event {
    constructor() {
        super('streamDisconnect');
    }
}
/**
 * An event that is emitted when video stream is reconnecting.
 */
export class StreamReconnectEvent extends Event {
    constructor() {
        super('streamReconnect');
    }
}
/**
 * An event that is emitted if there are errors loading the video stream.
 */
export class PlayStreamErrorEvent extends Event {
    constructor(data) {
        super('playStreamError');
        this.data = data;
    }
}
/**
 * An event that is emitted before trying to start video playback.
 */
export class PlayStreamEvent extends Event {
    constructor() {
        super('playStream');
    }
}
/**
 * An event that is emitted if the browser rejects video playback. Can happen for example if
 * video auto-play without user interaction is refused by the browser.
 */
export class PlayStreamRejectedEvent extends Event {
    constructor(data) {
        super('playStreamRejected');
        this.data = data;
    }
}
/**
 * An event that is emitted when receiving a full FreezeFrame image from UE.
 */
export class LoadFreezeFrameEvent extends Event {
    constructor(data) {
        super('loadFreezeFrame');
        this.data = data;
    }
}
/**
 * An event that is emitted when receiving UnfreezeFrame message from UE and video playback is about to be resumed.
 */
export class HideFreezeFrameEvent extends Event {
    constructor() {
        super('hideFreezeFrame');
    }
}
/**
 * An event that is emitted when receiving WebRTC statistics.
 */
export class StatsReceivedEvent extends Event {
    constructor(data) {
        super('statsReceived');
        this.data = data;
    }
}
/**
 * An event that is emitted when streamer list changes.
 */
export class StreamerListMessageEvent extends Event {
    constructor(data) {
        super('streamerListMessage');
        this.data = data;
    }
}
/**
 * An event that is emitted when receiving latency test results.
 */
export class LatencyTestResultEvent extends Event {
    constructor(data) {
        super('latencyTestResult');
        this.data = data;
    }
}
/**
 * An event that is emitted when receiving data channel latency test response from server.
 * This event is handled by DataChannelLatencyTestController
 */
export class DataChannelLatencyTestResponseEvent extends Event {
    constructor(data) {
        super('dataChannelLatencyTestResponse');
        this.data = data;
    }
}
/**
 * An event that is emitted when data channel latency test results are ready.
 */
export class DataChannelLatencyTestResultEvent extends Event {
    constructor(data) {
        super('dataChannelLatencyTestResult');
        this.data = data;
    }
}
/**
 * An event that is emitted when receiving initial settings from UE.
 */
export class InitialSettingsEvent extends Event {
    constructor(data) {
        super('initialSettings');
        this.data = data;
    }
}
/**
 * An event that is emitted when PixelStreaming settings change.
 */
export class SettingsChangedEvent extends Event {
    constructor(data) {
        super('settingsChanged');
        this.data = data;
    }
}
/**
 * Event emitted when an XR Session starts
 */
export class XrSessionStartedEvent extends Event {
    constructor() {
        super('xrSessionStarted');
    }
}
/**
 * Event emitted when an XR Session ends
 */
export class XrSessionEndedEvent extends Event {
    constructor() {
        super('xrSessionEnded');
    }
}
/**
 * Event emitted when an XR Frame is complete
 */
export class XrFrameEvent extends Event {
    constructor(data) {
        super('xrFrame');
        this.data = data;
    }
}
/**
 * An event that is emitted when receiving a player count from the signalling server
 */
export class PlayerCountEvent extends Event {
    constructor(data) {
        super('playerCount');
        this.data = data;
    }
}
export class EventEmitter extends EventTarget {
    /**
     * Dispatch a new event.
     * @param e event
     * @returns
     */
    dispatchEvent(e) {
        return super.dispatchEvent(e);
    }
    /**
     * Register an event handler.
     * @param type event name
     * @param listener event handler function
     */
    addEventListener(type, listener) {
        super.addEventListener(type, listener);
    }
    /**
     * Remove an event handler.
     * @param type event name
     * @param listener event handler function
     */
    removeEventListener(type, listener) {
        super.removeEventListener(type, listener);
    }
}
//# sourceMappingURL=EventEmitter.js.map
import { Config } from '../Config/Config';
import { LatencyTestResults } from '../DataChannel/LatencyTestResults';
import { AggregatedStats } from '../PeerConnectionController/AggregatedStats';
import { WebRtcPlayerController } from '../WebRtcPlayer/WebRtcPlayerController';
import { InitialSettings } from '../DataChannel/InitialSettings';
import { PixelStreamingEvent } from '../Util/EventEmitter';
import { MessageOnScreenKeyboard } from '../WebSockets/MessageReceive';
import { WebXRController } from '../WebXR/WebXRController';
import { MessageDirection } from '../UeInstanceMessage/StreamMessageController';
import { DataChannelLatencyTestConfig, DataChannelLatencyTestController } from "../DataChannel/DataChannelLatencyTestController";
import { DataChannelLatencyTestResponse } from "../DataChannel/DataChannelLatencyTestResults";
export interface PixelStreamingOverrides {
    /** The DOM elment where Pixel Streaming video and user input event handlers are attached to.
     * You can give an existing DOM element here. If not given, the library will create a new div element
     * that is not attached anywhere. In this case you can later get access to this new element and
     * attach it to your web page. */
    videoElementParent?: HTMLElement;
}
/**
 * The key class for the browser side of a Pixel Streaming application, it includes:
 * WebRTC handling, XR support, input handling, and emitters for lifetime and state change events.
 * Users are encouraged to use this class as is, through composition, or extend it. In any case,
 * this will likely be the core of your Pixel Streaming experience in terms of functionality.
 */
export declare class PixelStreaming {
    protected _webRtcController: WebRtcPlayerController;
    protected _webXrController: WebXRController;
    protected _dataChannelLatencyTestController: DataChannelLatencyTestController;
    /**
     * Configuration object. You can read or modify config through this object. Whenever
     * the configuration is changed, the library will emit a `settingsChanged` event.
     */
    config: Config;
    private _videoElementParent;
    private allowConsoleCommands;
    private onScreenKeyboardHelper;
    private _videoStartTime;
    private _inputController;
    private _eventEmitter;
    /**
     * @param config - A newly instantiated config object
     * @param overrides - Parameters to override default behaviour
     * returns the base Pixel streaming object
     */
    constructor(config: Config, overrides?: PixelStreamingOverrides);
    /**
     * Gets the element that contains the video stream element.
     */
    get videoElementParent(): HTMLElement;
    /**
     * Configure the settings with on change listeners and any additional per experience settings.
     */
    private configureSettings;
    /**
     * Activate the on screen keyboard when receiving the command from the streamer
     * @param command - the keyboard command
     */
    _activateOnScreenKeyboard(command: MessageOnScreenKeyboard): void;
    /**
     * Set the input control ownership
     * @param inputControlOwnership - does the user have input control ownership
     */
    _onInputControlOwnership(inputControlOwnership: boolean): void;
    /**
     * Instantiate the WebRTCPlayerController interface to provide WebRTCPlayerController functionality within this class and set up anything that requires it
     * @param webRtcPlayerController - a WebRtcPlayerController controller instance
     */
    private setWebRtcPlayerController;
    /**
     * Connect to signaling server.
     */
    connect(): void;
    /**
     * Reconnects to the signaling server. If connection is up, disconnects first
     * before establishing a new connection
     */
    reconnect(): void;
    /**
     * Disconnect from the signaling server and close open peer connections.
     */
    disconnect(): void;
    /**
     * Play the stream. Can be called only after a peer connection has been established.
     */
    play(): void;
    /**
     * Auto connect if AutoConnect flag is enabled
     */
    private checkForAutoConnect;
    /**
     * Will unmute the microphone track which is sent to Unreal Engine.
     * By default, will only unmute an existing mic track.
     *
     * @param forceEnable Can be used for cases when this object wasn't initialized with a mic track.
     * If this parameter is true, the connection will be restarted with a microphone.
     * Warning: this takes some time, as a full renegotiation and reconnection will happen.
     */
    unmuteMicrophone(forceEnable?: boolean): void;
    muteMicrophone(): void;
    private setMicrophoneMuted;
    /**
     * Emit an event on auto connecting
     */
    _onWebRtcAutoConnect(): void;
    /**
     * Set up functionality to happen when receiving a webRTC answer
     */
    _onWebRtcSdp(): void;
    /**
     * Emits a StreamLoading event
     */
    _onStreamLoading(): void;
    /**
     * Event fired when the video is disconnected - emits given eventString or an override
     * message from webRtcController if one has been set
     * @param eventString - a string describing why the connection closed
     * @param allowClickToReconnect - true if we want to allow the user to retry the connection with a click
     */
    _onDisconnect(eventString: string, allowClickToReconnect: boolean): void;
    /**
     * Handles when Web Rtc is connecting
     */
    _onWebRtcConnecting(): void;
    /**
     * Handles when Web Rtc has connected
     */
    _onWebRtcConnected(): void;
    /**
     * Handles when Web Rtc fails to connect
     */
    _onWebRtcFailed(): void;
    /**
     * Handle when the Video has been Initialized
     */
    _onVideoInitialized(): void;
    /**
     * Set up functionality to happen when receiving latency test results
     * @param latency - latency test results object
     */
    _onLatencyTestResult(latencyTimings: LatencyTestResults): void;
    _onDataChannelLatencyTestResponse(response: DataChannelLatencyTestResponse): void;
    /**
     * Set up functionality to happen when receiving video statistics
     * @param videoStats - video statistics as a aggregate stats object
     */
    _onVideoStats(videoStats: AggregatedStats): void;
    /**
     * Set up functionality to happen when calculating the average video encoder qp
     * @param QP - the quality number of the stream
     */
    _onVideoEncoderAvgQP(QP: number): void;
    /**
     * Set up functionality to happen when receiving and handling initial settings for the UE app
     * @param settings - initial UE app settings
     */
    _onInitialSettings(settings: InitialSettings): void;
    /**
     * Set up functionality to happen when setting quality control ownership of a stream
     * @param hasQualityOwnership - does this user have quality ownership of the stream true / false
     */
    _onQualityControlOwnership(hasQualityOwnership: boolean): void;
    _onPlayerCount(playerCount: number): void;
    /**
     * Request a connection latency test.
     * NOTE: There are plans to refactor all request* functions. Expect changes if you use this!
     * @returns
     */
    requestLatencyTest(): boolean;
    /**
     * Request a data channel latency test.
     * NOTE: There are plans to refactor all request* functions. Expect changes if you use this!
     */
    requestDataChannelLatencyTest(config: DataChannelLatencyTestConfig): boolean;
    /**
     * Request for the UE application to show FPS counter.
     * NOTE: There are plans to refactor all request* functions. Expect changes if you use this!
     * @returns
     */
    requestShowFps(): boolean;
    /**
     * Request for a new IFrame from the UE application.
     * NOTE: There are plans to refactor all request* functions. Expect changes if you use this!
     * @returns
     */
    requestIframe(): boolean;
    /**
     * Send data to UE application. The data will be run through JSON.stringify() so e.g. strings
     * and any serializable plain JSON objects with no recurrence can be sent.
     * @returns true if succeeded, false if rejected
     */
    emitUIInteraction(descriptor: object | string): boolean;
    /**
     * Send a command to UE application. Blocks ConsoleCommand descriptors unless UE
     * has signaled that it allows console commands.
     * @returns true if succeeded, false if rejected
     */
    emitCommand(descriptor: object): boolean;
    /**
     * Send a console command to UE application. Only allowed if UE has signaled that it allows
     * console commands.
     * @returns true if succeeded, false if rejected
     */
    emitConsoleCommand(command: string): boolean;
    /**
     * Add a UE -> browser response event listener
     * @param name - The name of the response handler
     * @param listener - The method to be activated when a message is received
     */
    addResponseEventListener(name: string, listener: (response: string) => void): void;
    /**
     * Remove a UE -> browser response event listener
     * @param name - The name of the response handler
     */
    removeResponseEventListener(name: string): void;
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
    /**
     * Enable/disable XR mode.
     */
    toggleXR(): void;
    /**
     * Pass in a function to generate a signalling server URL.
     * This function is useful if you need to programmatically construct your signalling server URL.
     * @param signallingUrlBuilderFunc A function that generates a signalling server url.
     */
    setSignallingUrlBuilder(signallingUrlBuilderFunc: () => string): void;
    /**
     * Public getter for the websocket controller. Access to this property allows you to send
     * custom websocket messages.
     */
    get webSocketController(): import("../pixelstreamingfrontend").WebSocketController;
    /**
     * Public getter for the webXrController controller. Used for all XR features.
     */
    get webXrController(): WebXRController;
    registerMessageHandler(name: string, direction: MessageDirection, handler?: (data: ArrayBuffer | Array<number | string>) => void): void;
    get toStreamerHandlers(): Map<string, (messageData?: (string | number)[]) => void>;
    isReconnecting(): boolean;
}

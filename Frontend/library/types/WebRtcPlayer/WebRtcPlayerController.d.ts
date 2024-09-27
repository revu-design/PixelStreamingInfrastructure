import { WebSocketController } from '../WebSockets/WebSocketController';
import { StreamController } from '../VideoPlayer/StreamController';
import { MessageAnswer, MessageOffer, MessageConfig, MessageStreamerList } from '../WebSockets/MessageReceive';
import { FreezeFrameController } from '../FreezeFrame/FreezeFrameController';
import { AFKController } from '../AFK/AFKController';
import { DataChannelController } from '../DataChannel/DataChannelController';
import { PeerConnectionController } from '../PeerConnectionController/PeerConnectionController';
import { KeyboardController } from '../Inputs/KeyboardController';
import { AggregatedStats } from '../PeerConnectionController/AggregatedStats';
import { Config } from '../Config/Config';
import { FileTemplate } from '../Util/FileUtil';
import { InputClassesFactory } from '../Inputs/InputClassesFactory';
import { VideoPlayer } from '../VideoPlayer/VideoPlayer';
import { StreamMessageController, MessageDirection } from '../UeInstanceMessage/StreamMessageController';
import { ResponseController } from '../UeInstanceMessage/ResponseController';
import * as MessageReceive from '../WebSockets/MessageReceive';
import { SendMessageController } from '../UeInstanceMessage/SendMessageController';
import { ToStreamerMessagesController } from '../UeInstanceMessage/ToStreamerMessagesController';
import { MouseController } from '../Inputs/MouseController';
import { GamePadController } from '../Inputs/GamepadController';
import { DataChannelSender } from '../DataChannel/DataChannelSender';
import { CoordinateConverter, UnquantizedDenormalizedUnsignedCoord } from '../Util/CoordinateConverter';
import { PixelStreaming } from '../PixelStreaming/PixelStreaming';
import { ITouchController } from '../Inputs/ITouchController';
import { DataChannelLatencyTestRequest } from "../DataChannel/DataChannelLatencyTestResults";
/**
 * Entry point for the WebRTC Player
 */
export declare class WebRtcPlayerController {
    config: Config;
    responseController: ResponseController;
    sdpConstraints: RTCOfferOptions;
    webSocketController: WebSocketController;
    sendrecvDataChannelController: DataChannelController;
    recvDataChannelController: DataChannelController;
    dataChannelSender: DataChannelSender;
    datachannelOptions: RTCDataChannelInit;
    videoPlayer: VideoPlayer;
    streamController: StreamController;
    peerConnectionController: PeerConnectionController;
    inputClassesFactory: InputClassesFactory;
    freezeFrameController: FreezeFrameController;
    shouldShowPlayOverlay: boolean;
    afkController: AFKController;
    videoElementParentClientRect: DOMRect;
    latencyStartTime: number;
    pixelStreaming: PixelStreaming;
    streamMessageController: StreamMessageController;
    sendMessageController: SendMessageController;
    toStreamerMessagesController: ToStreamerMessagesController;
    keyboardController: KeyboardController;
    mouseController: MouseController;
    touchController: ITouchController;
    gamePadController: GamePadController;
    coordinateConverter: CoordinateConverter;
    isUsingSFU: boolean;
    isQualityController: boolean;
    statsTimerHandle: number;
    file: FileTemplate;
    preferredCodec: string;
    peerConfig: RTCConfiguration;
    videoAvgQp: number;
    locallyClosed: boolean;
    shouldReconnect: boolean;
    isReconnecting: boolean;
    reconnectAttempt: number;
    disconnectMessage: string;
    subscribedStream: string;
    signallingUrlBuilder: () => string;
    autoJoinTimer: ReturnType<typeof setTimeout>;
    /**
     *
     * @param config - the frontend config object
     * @param pixelStreaming - the PixelStreaming object
     */
    constructor(config: Config, pixelStreaming: PixelStreaming);
    /**
     * Make a request to UnquantizedAndDenormalizeUnsigned coordinates
     * @param x x axis coordinate
     * @param y y axis coordinate
     */
    requestUnquantizedAndDenormalizeUnsigned(x: number, y: number): UnquantizedDenormalizedUnsignedCoord;
    /**
     * Handles when a message is received
     * @param event - Message Event
     */
    handleOnMessage(event: MessageEvent): void;
    /**
     * Register message all handlers
     */
    registerMessageHandlers(): void;
    /**
     * Activate the logic associated with a command from UE
     * @param message
     */
    onCommand(message: ArrayBuffer): void;
    /**
     * Handles a protocol message received from the streamer
     * @param message the message data from the streamer
     */
    onProtocolMessage(message: ArrayBuffer): void;
    /**
     * Handles an input control message when it is received from the streamer
     * @param message The input control message
     */
    onInputControlOwnership(message: ArrayBuffer): void;
    /**
     *
     * @param message
     */
    onGamepadResponse(message: ArrayBuffer): void;
    onAfkTriggered(): void;
    /**
     * Set whether we should timeout when afk.
     * @param afkEnabled If true we timeout when idle for some given amount of time.
     */
    setAfkEnabled(afkEnabled: boolean): void;
    /**
     * Attempt a reconnection to the signalling server
     */
    tryReconnect(message: string): void;
    /**
     * Loads a freeze frame if it is required otherwise shows the play overlay
     */
    loadFreezeFrameOrShowPlayOverlay(): void;
    /**
     * Process the freeze frame and load it
     * @param message The freeze frame data in bytes
     */
    onFreezeFrameMessage(message: ArrayBuffer): void;
    /**
     * Enable the video after hiding a freeze frame
     */
    invalidateFreezeFrameAndEnableVideo(): void;
    /**
     * Prep datachannel data for processing file extension
     * @param data the file extension data
     */
    onFileExtension(data: ArrayBuffer): void;
    /**
     * Prep datachannel data for processing the file mime type
     * @param data the file mime type data
     */
    onFileMimeType(data: ArrayBuffer): void;
    /**
     * Prep datachannel data for processing the file contents
     * @param data the file contents data
     */
    onFileContents(data: ArrayBuffer): void;
    /**
     * Plays the stream audio and video source and sets up other pieces while the stream starts
     */
    playStream(): void;
    /**
     * Plays the video stream
     */
    private playVideo;
    /**
     * Enable the video to play automatically if enableAutoplay is true
     */
    autoPlayVideoOrSetUpPlayOverlay(): void;
    /**
     * Connect to the Signaling server
     */
    connectToSignallingServer(): void;
    /**
     * This will start the handshake to the signalling server
     * @param peerConfig  - RTC Configuration Options from the Signaling server
     * @remark RTC Peer Connection on Ice Candidate event have it handled by handle Send Ice Candidate
     */
    startSession(peerConfig: RTCConfiguration): void;
    /**
     * Checks the peer connection options for a turn server and returns true or false
     */
    checkTurnServerAvailability(options: RTCConfiguration): boolean;
    /**
     * Handles when a Config Message is received contains the Peer Connection Options required (STUN and TURN Server Info)
     * @param messageConfig - Config Message received from the signaling server
     */
    handleOnConfigMessage(messageConfig: MessageConfig): void;
    /**
     * Handles when the signalling server gives us the list of streamer ids.
     */
    handleStreamerListMessage(messageStreamerList: MessageStreamerList): void;
    /**
     * Handle the RTC Answer from the signaling server
     * @param Answer - Answer SDP from the peer.
     */
    handleWebRtcAnswer(Answer: MessageAnswer): void;
    /**
     * Handle the RTC offer from a WebRTC peer (received through the signalling server).
     * @param Offer - Offer SDP from the peer.
     */
    handleWebRtcOffer(Offer: MessageOffer): void;
    /**
     * Handle when the SFU provides the peer with its data channels
     * @param DataChannels - The message from the SFU containing the data channels ids
     */
    handleWebRtcSFUPeerDatachannels(DataChannels: MessageReceive.MessagePeerDataChannels): void;
    handlePostWebrtcNegotiation(): void;
    /**
     * When an ice Candidate is received from the Signaling server add it to the Peer Connection Client
     * @param iceCandidate - Ice Candidate from Server
     */
    handleIceCandidate(iceCandidate: RTCIceCandidateInit): void;
    /**
     * Send the ice Candidate to the signaling server via websocket
     * @param iceEvent - RTC Peer ConnectionIceEvent) {
     */
    handleSendIceCandidate(iceEvent: RTCPeerConnectionIceEvent): void;
    /**
     * Send the ice Candidate to the signaling server via websocket
     * @param iceEvent - RTC Peer ConnectionIceEvent) {
     */
    handleDataChannel(datachannelEvent: RTCDataChannelEvent): void;
    /**
     * Send the RTC Offer Session to the Signaling server via websocket
     * @param offer - RTC Session Description
     */
    handleSendWebRTCOffer(offer: RTCSessionDescriptionInit): void;
    /**
     * Send the RTC Offer Session to the Signaling server via websocket
     * @param answer - RTC Session Description
     */
    handleSendWebRTCAnswer(answer: RTCSessionDescriptionInit): void;
    /**
     * Set the freeze frame overlay to the player div
     */
    setUpMouseAndFreezeFrame(): void;
    /**
     * Close the Connection to the signaling server
     */
    closeSignalingServer(message: string): void;
    /**
     * Close the peer connection
     */
    closePeerConnection(): void;
    /**
     * Close all connections
     */
    close(): void;
    /**
     * Fires a Video Stats Event in the RTC Peer Connection
     */
    getStats(): void;
    /**
     * Send a Latency Test Request to the UE Instance
     */
    sendLatencyTest(): void;
    /**
     * Send a Data Channel Latency Test Request to the UE Instance
     */
    sendDataChannelLatencyTest(descriptor: DataChannelLatencyTestRequest): void;
    /**
     * Send the MinQP encoder setting to the UE Instance.
     * @param minQP - The lower bound for QP when encoding
     * valid values are (1-51) where:
     * 1 = Best quality but highest bitrate.
     * 51 = Worst quality but lowest bitrate.
     * By default the minQP is 1 meaning the encoder is free
     * to aim for the best quality it can on the given network link.
     */
    sendEncoderMinQP(minQP: number): void;
    /**
     * Send the MaxQP encoder setting to the UE Instance.
     * @param maxQP - The upper bound for QP when encoding
     * valid values are (1-51) where:
     * 1 = Best quality but highest bitrate.
     * 51 = Worst quality but lowest bitrate.
     * By default the maxQP is 51 meaning the encoder is free
     * to drop quality as low as needed on the given network link.
     */
    sendEncoderMaxQP(maxQP: number): void;
    /**
     * Send the { WebRTC.MinBitrate: SomeNumber }} command to UE to set
     * the minimum bitrate that we allow WebRTC to use
     * (note setting this too high in poor networks can be problematic).
     * @param minBitrate - The minimum bitrate we would like WebRTC to not fall below.
     */
    sendWebRTCMinBitrate(minBitrate: number): void;
    /**
     * Send the { WebRTC.MaxBitrate: SomeNumber }} command to UE to set
     * the minimum bitrate that we allow WebRTC to use
     * (note setting this too low could result in blocky video).
     * @param minBitrate - The minimum bitrate we would like WebRTC to not fall below.
     */
    sendWebRTCMaxBitrate(maxBitrate: number): void;
    /**
     * Send the { WebRTC.Fps: SomeNumber }} UE 5.0+
     * and { WebRTC.MaxFps } UE 4.27 command to set
     * the maximum fps we would like WebRTC to stream at.
     * @param fps - The maximum stream fps.
     */
    sendWebRTCFps(fps: number): void;
    /**
     * Sends the UI Descriptor `stat fps` to the UE Instance
     */
    sendShowFps(): void;
    /**
     * Send an Iframe request to the streamer
     */
    sendIframeRequest(): void;
    /**
     * Send a UIInteraction message
     */
    emitUIInteraction(descriptor: object | string): void;
    /**
     * Send a Command message
     */
    emitCommand(descriptor: object): void;
    /**
     * Send a console command message
     */
    emitConsoleCommand(command: string): void;
    /**
     * Sends a request to the UE Instance to have ownership of Quality
     */
    sendRequestQualityControlOwnership(): void;
    /**
     * Handles when a Latency Test Result are received from the UE Instance
     * @param message - Latency Test Timings
     */
    handleLatencyTestResult(message: ArrayBuffer): void;
    /**
     * Handles when a Data Channel Latency Test Response is received from the UE Instance
     * @param message - Data Channel Latency Test Response
     */
    handleDataChannelLatencyTestResponse(message: ArrayBuffer): void;
    /**
     * Handles when the Encoder and Web RTC Settings are received from the UE Instance
     * @param message - Initial Encoder and Web RTC Settings
     */
    handleInitialSettings(message: ArrayBuffer): void;
    /**
     * Handles when the Quantization Parameter are received from the UE Instance
     * @param message - Encoders Quantization Parameter
     */
    handleVideoEncoderAvgQP(message: ArrayBuffer): void;
    /**
     * Handles when the video element has been loaded with a srcObject
     */
    handleVideoInitialized(): void;
    /**
     * Flag set if the user has Quality Ownership
     * @param message - Does the current client have Quality Ownership
     */
    onQualityControlOwnership(message: ArrayBuffer): void;
    /**
     * Handles when the Aggregated stats are Collected
     * @param stats - Aggregated Stats
     */
    handleVideoStats(stats: AggregatedStats): void;
    /**
     * To Resize the Video Player element
     */
    resizePlayerStyle(): void;
    setPreferredCodec(codec: string): void;
    setVideoEncoderAvgQP(avgQP: number): void;
    /**
     * enables/disables keyboard event listeners
     */
    setKeyboardInputEnabled(isEnabled: boolean): void;
    /**
     * enables/disables mouse event listeners
     */
    setMouseInputEnabled(isEnabled: boolean): void;
    /**
     * enables/disables touch event listeners
     */
    setTouchInputEnabled(isEnabled: boolean): void;
    /**
     * enables/disables game pad event listeners
     */
    setGamePadInputEnabled(isEnabled: boolean): void;
    registerDataChannelEventEmitters(dataChannel: DataChannelController): void;
    registerMessageHandler(name: string, direction: MessageDirection, handler?: (data: ArrayBuffer | Array<number | string>) => void): void;
}

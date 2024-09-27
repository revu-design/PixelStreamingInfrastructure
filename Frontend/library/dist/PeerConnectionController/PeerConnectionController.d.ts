import { Config } from '../Config/Config';
import { AggregatedStats } from './AggregatedStats';
/**
 * Handles the Peer Connection
 */
export declare class PeerConnectionController {
    peerConnection: RTCPeerConnection;
    aggregatedStats: AggregatedStats;
    config: Config;
    preferredCodec: string;
    updateCodecSelection: boolean;
    /**
     * Create a new RTC Peer Connection client
     * @param options - Peer connection Options
     * @param config - The config for our PS experience.
     */
    constructor(options: RTCConfiguration, config: Config, preferredCodec: string);
    createPeerConnection(options: RTCConfiguration, preferredCodec: string): void;
    /**
     * Create an offer for the Web RTC handshake and send the offer to the signaling server via websocket
     * @param offerOptions - RTC Offer Options
     */
    createOffer(offerOptions: RTCOfferOptions, config: Config): Promise<void>;
    /**
     *
     */
    receiveOffer(offer: RTCSessionDescriptionInit, config: Config): Promise<void>;
    /**
     * Set the Remote Descriptor from the signaling server to the RTC Peer Connection
     * @param answer - RTC Session Descriptor from the Signaling Server
     */
    receiveAnswer(answer: RTCSessionDescriptionInit): void;
    /**
     * Generate Aggregated Stats and then fire a onVideo Stats event
     */
    generateStats(): void;
    /**
     * Close The Peer Connection
     */
    close(): void;
    /**
     * Modify the Session Descriptor
     * @param sdp - Session Descriptor as a string
     * @param useMic - Is the microphone in use
     * @returns A modified Session Descriptor
     */
    mungeSDP(sdp: string, useMic: boolean): string;
    /**
     * When a Ice Candidate is received add to the RTC Peer Connection
     * @param iceCandidate - RTC Ice Candidate from the Signaling Server
     */
    handleOnIce(iceCandidate: RTCIceCandidate): void;
    /**
     * When the RTC Peer Connection Signaling server state Changes
     * @param state - Signaling Server State Change Event
     */
    handleSignalStateChange(state: Event): void;
    /**
     * Handle when the Ice Connection State Changes
     * @param state - Ice Connection State
     */
    handleIceConnectionStateChange(state: Event): void;
    /**
     * Handle when the Ice Gathering State Changes
     * @param state - Ice Gathering State Change
     */
    handleIceGatheringStateChange(state: Event): void;
    /**
     * Activates the onTrack method
     * @param event - The webRtc track event
     */
    handleOnTrack(event: RTCTrackEvent): void;
    /**
     * Activates the onPeerIceCandidate
     * @param event - The peer ice candidate
     */
    handleIceCandidate(event: RTCPeerConnectionIceEvent): void;
    /**
     * Activates the onDataChannel
     * @param event - The peer's data channel
     */
    handleDataChannel(event: RTCDataChannelEvent): void;
    /**
     * An override method for onTrack for use outside of the PeerConnectionController
     * @param trackEvent - The webRtc track event
     */
    onTrack(trackEvent: RTCTrackEvent): void;
    /**
     * An override method for onIceConnectionStateChange for use outside of the PeerConnectionController
     * @param event - The webRtc iceconnectionstatechange event
     */
    onIceConnectionStateChange(event: Event): void;
    /**
     * An override method for onPeerIceCandidate for use outside of the PeerConnectionController
     * @param peerConnectionIceEvent - The peer ice candidate
     */
    onPeerIceCandidate(peerConnectionIceEvent: RTCPeerConnectionIceEvent): void;
    /**
     * An override method for onDataChannel for use outside of the PeerConnectionController
     * @param datachannelEvent - The peer's data channel
     */
    onDataChannel(datachannelEvent: RTCDataChannelEvent): void;
    /**
     * Find the intersection between UE and browser codecs, with fuzzy matching if some parameters are mismatched.
     * @param sdp The remote sdp
     * @returns The intersection between browser supported codecs and ue supported codecs.
     */
    fuzzyIntersectUEAndBrowserCodecs(sdp: RTCSessionDescriptionInit): string[];
    /**
     * Setup tracks on the RTC Peer Connection
     * @param useMic - is mic in use
     */
    setupTransceiversAsync(useMic: boolean): Promise<void>;
    /**
     * And override event for when the video stats are fired
     * @param event - Aggregated Stats
     */
    onVideoStats(event: AggregatedStats): void;
    /**
     * Event to send the RTC offer to the Signaling server
     * @param offer - RTC Offer
     */
    onSendWebRTCOffer(offer: RTCSessionDescriptionInit): void;
    /**
     * Event to send the RTC Answer to the Signaling server
     * @param answer - RTC Answer
     */
    onSendWebRTCAnswer(answer: RTCSessionDescriptionInit): void;
    /**
     * An override for showing the Peer connection connecting Overlay
     */
    showTextOverlayConnecting(): void;
    /**
     * An override for showing the Peer connection Failed overlay
     */
    showTextOverlaySetupFailure(): void;
    parseAvailableCodecs(rtcSessionDescription: RTCSessionDescriptionInit): Array<string>;
}

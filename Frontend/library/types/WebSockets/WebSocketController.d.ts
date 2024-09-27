import * as MessageReceive from './MessageReceive';
import { SignallingProtocol } from './SignallingProtocol';
declare global {
    interface WebSocket {
        onmessagebinary?(event?: MessageEvent): void;
    }
}
/**
 * The controller for the WebSocket and all associated methods
 */
export declare class WebSocketController {
    WS_OPEN_STATE: number;
    webSocket: WebSocket;
    onOpen: EventTarget;
    onClose: EventTarget;
    signallingProtocol: SignallingProtocol;
    constructor();
    /**
     * Connect to the signaling server
     * @param connectionURL - The Address of the signaling server
     * @returns - If there is a connection
     */
    connect(connectionURL: string): boolean;
    /**
     * Handles what happens when a message is received in binary form
     * @param event - Message Received
     */
    handleOnMessageBinary(event: MessageEvent): void;
    /**
     * Handles what happens when a message is received
     * @param event - Message Received
     */
    handleOnMessage(event: MessageEvent): void;
    /**
     * Handles when the Websocket is opened
     * @param event - Not Used
     */
    handleOnOpen(event: Event): void;
    /**
     * Handles when there is an error on the websocket
     * @param event - Error Payload
     */
    handleOnError(): void;
    /**
     * Handles when the Websocket is closed
     * @param event - Close Event
     */
    handleOnClose(event: CloseEvent): void;
    requestStreamerList(): void;
    sendSubscribe(streamerid: string): void;
    sendUnsubscribe(): void;
    sendWebRtcOffer(offer: RTCSessionDescriptionInit): void;
    sendWebRtcAnswer(answer: RTCSessionDescriptionInit): void;
    sendWebRtcDatachannelRequest(): void;
    sendSFURecvDataChannelReady(): void;
    /**
     * Sends an RTC Ice Candidate to the Server
     * @param candidate - RTC Ice Candidate
     */
    sendIceCandidate(candidate: RTCIceCandidate): void;
    /**
     * Closes the Websocket connection
     */
    close(): void;
    /**
     * The Message Contains the payload of the peer connection options used for the RTC Peer hand shake
     * @param messageConfig - Config Message received from he signaling server
     */
    onConfig(messageConfig: MessageReceive.MessageConfig): void;
    /**
     * The Message Contains the payload of the peer connection options used for the RTC Peer hand shake
     * @param messageConfig - Config Message received from he signaling server
     */
    onStreamerList(messageStreamerList: MessageReceive.MessageStreamerList): void;
    /**
     * @param iceCandidate - Ice Candidate sent from the Signaling server server's RTC hand shake
     */
    onIceCandidate(iceCandidate: RTCIceCandidateInit): void;
    /**
     * Event is fired when the websocket receives the answer for the RTC peer Connection
     * @param messageAnswer - The RTC Answer payload from the signaling server
     */
    onWebRtcAnswer(messageAnswer: MessageReceive.MessageAnswer): void;
    /**
     * Event is fired when the websocket receives the offer for the RTC peer Connection
     * @param messageOffer - The sdp offer
     */
    onWebRtcOffer(messageOffer: MessageReceive.MessageOffer): void;
    /**
     * Event is fired when the websocket receives the data channels for the RTC peer Connection from the SFU
     * @param messageDataChannels - The data channels details
     */
    onWebRtcPeerDataChannels(messageDataChannels: MessageReceive.MessagePeerDataChannels): void;
    /**
     * Event is fired when the websocket receives the an updated player count from cirrus
     * @param MessagePlayerCount - The new player count
     */
    onPlayerCount(playerCount: MessageReceive.MessagePlayerCount): void;
}

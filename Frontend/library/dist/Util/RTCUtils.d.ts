export declare class RTCUtils {
    static isVideoTransciever(transceiver: RTCRtpTransceiver | undefined): boolean;
    static canTransceiverReceiveVideo(transceiver: RTCRtpTransceiver | undefined): boolean;
    static canTransceiverSendVideo(transceiver: RTCRtpTransceiver | undefined): boolean;
    static isAudioTransciever(transceiver: RTCRtpTransceiver | undefined): boolean;
    static canTransceiverReceiveAudio(transceiver: RTCRtpTransceiver | undefined): boolean;
    static canTransceiverSendAudio(transceiver: RTCRtpTransceiver | undefined): boolean;
}

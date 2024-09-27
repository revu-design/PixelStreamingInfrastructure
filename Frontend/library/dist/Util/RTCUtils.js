export class RTCUtils {
    static isVideoTransciever(transceiver) {
        return this.canTransceiverReceiveVideo(transceiver) || this.canTransceiverSendVideo(transceiver);
    }
    static canTransceiverReceiveVideo(transceiver) {
        return !!transceiver &&
            (transceiver.direction === 'sendrecv' || transceiver.direction === 'recvonly') &&
            transceiver.receiver &&
            transceiver.receiver.track &&
            transceiver.receiver.track.kind === 'video';
    }
    static canTransceiverSendVideo(transceiver) {
        return !!transceiver &&
            (transceiver.direction === 'sendrecv' || transceiver.direction === 'sendonly') &&
            transceiver.sender &&
            transceiver.sender.track &&
            transceiver.sender.track.kind === 'video';
    }
    static isAudioTransciever(transceiver) {
        return this.canTransceiverReceiveAudio(transceiver) || this.canTransceiverSendAudio(transceiver);
    }
    static canTransceiverReceiveAudio(transceiver) {
        return !!transceiver &&
            (transceiver.direction === 'sendrecv' || transceiver.direction === 'recvonly') &&
            transceiver.receiver &&
            transceiver.receiver.track &&
            transceiver.receiver.track.kind === 'audio';
    }
    static canTransceiverSendAudio(transceiver) {
        return !!transceiver &&
            (transceiver.direction === 'sendrecv' || transceiver.direction === 'sendonly') &&
            transceiver.sender &&
            transceiver.sender.track &&
            transceiver.sender.track.kind === 'audio';
    }
}
//# sourceMappingURL=RTCUtils.js.map
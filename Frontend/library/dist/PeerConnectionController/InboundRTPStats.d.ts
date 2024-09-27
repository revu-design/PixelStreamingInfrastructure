/**
 * Inbound Audio Stats collected from the RTC Stats Report
 */
export declare class InboundAudioStats {
    audioLevel: number;
    bytesReceived: number;
    codecId: string;
    concealedSamples: number;
    concealmentEvents: number;
    fecPacketsDiscarded: number;
    fecPacketsReceived: number;
    headerBytesReceived: number;
    id: string;
    insertedSamplesForDeceleration: number;
    jitter: number;
    jitterBufferDelay: number;
    jitterBufferEmittedCount: number;
    jitterBufferMinimumDelay: number;
    jitterBufferTargetDelay: number;
    kind: string;
    lastPacketReceivedTimestamp: number;
    mediaType: string;
    mid: string;
    packetsDiscarded: number;
    packetsLost: number;
    packetsReceived: number;
    removedSamplesForAcceleration: number;
    silentConcealedSamples: number;
    ssrc: number;
    timestamp: number;
    totalAudioEnergy: number;
    totalSamplesDuration: number;
    totalSamplesReceived: number;
    trackIdentifier: string;
    transportId: string;
    type: string;
    bitrate: number;
}
/**
 * Inbound Video Stats collected from the RTC Stats Report
 */
export declare class InboundVideoStats {
    bytesReceived: number;
    codecId: string;
    firCount: number;
    frameHeight: number;
    frameWidth: number;
    framesAssembledFromMultiplePackets: number;
    framesDecoded: number;
    framesDropped: number;
    framesPerSecond: number;
    framesReceived: number;
    freezeCount: number;
    googTimingFrameInfo: string;
    headerBytesReceived: number;
    id: string;
    jitter: number;
    jitterBufferDelay: number;
    jitterBufferEmittedCount: number;
    keyFramesDecoded: number;
    kind: string;
    lastPacketReceivedTimestamp: number;
    mediaType: string;
    mid: string;
    nackCount: number;
    packetsLost: number;
    packetsReceived: number;
    pauseCount: number;
    pliCount: number;
    ssrc: number;
    timestamp: number;
    totalAssemblyTime: number;
    totalDecodeTime: number;
    totalFreezesDuration: number;
    totalInterFrameDelay: number;
    totalPausesDuration: number;
    totalProcessingDelay: number;
    totalSquaredInterFrameDelay: number;
    trackIdentifier: string;
    transportId: string;
    type: string;
    bitrate: number;
}
/**
 * Inbound Stats collected from the RTC Stats Report
 */
export declare class InboundRTPStats {
    bytesReceived: number;
    codecId: string;
    headerBytesReceived: number;
    id: string;
    jitter: number;
    jitterBufferDelay: number;
    jitterBufferEmittedCount: number;
    kind: string;
    lastPacketReceivedTimestamp: number;
    mediaType: string;
    mid: string;
    packetsLost: number;
    packetsReceived: number;
    ssrc: number;
    timestamp: number;
    trackIdentifier: string;
    transportId: string;
    type: string;
    audioLevel: number;
    concealedSamples: number;
    concealmentEvents: number;
    fecPacketsDiscarded: number;
    fecPacketsReceived: number;
    insertedSamplesForDeceleration: number;
    jitterBufferMinimumDelay: number;
    jitterBufferTargetDelay: number;
    packetsDiscarded: number;
    removedSamplesForAcceleration: number;
    silentConcealedSamples: number;
    totalAudioEnergy: number;
    totalSamplesDuration: number;
    totalSamplesReceived: number;
    firCount: number;
    frameHeight: number;
    frameWidth: number;
    framesAssembledFromMultiplePackets: number;
    framesDecoded: number;
    framesDropped: number;
    framesPerSecond: number;
    framesReceived: number;
    freezeCount: number;
    googTimingFrameInfo: string;
    keyFramesDecoded: number;
    nackCount: number;
    pauseCount: number;
    pliCount: number;
    totalAssemblyTime: number;
    totalDecodeTime: number;
    totalFreezesDuration: number;
    totalInterFrameDelay: number;
    totalPausesDuration: number;
    totalProcessingDelay: number;
    totalSquaredInterFrameDelay: number;
}

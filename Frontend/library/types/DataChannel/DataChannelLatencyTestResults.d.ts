/**
 * Data Channel Latency Test types
 */
/**
 * Unix epoch
 */
export type DataChannelLatencyTestTimestamp = number;
/**
 * Sequence number represented by unsigned int
 */
export type DataChannelLatencyTestSeq = number;
/**
 * Request sent to Streamer
 */
export type DataChannelLatencyTestRequest = {
    Seq: DataChannelLatencyTestSeq;
    FillResponseSize: number;
    Filler: string;
};
/**
 * Response from the Streamer
 */
export type DataChannelLatencyTestResponse = {
    Seq: DataChannelLatencyTestSeq;
    Filler: string;
    ReceivedTimestamp: DataChannelLatencyTestTimestamp;
    SentTimestamp: DataChannelLatencyTestTimestamp;
};
export type DataChannelLatencyTestResult = {
    records: Map<DataChannelLatencyTestSeq, DataChannelLatencyTestRecord>;
    dataChannelRtt: number;
    playerToStreamerTime: number;
    streamerToPlayerTime: number;
    exportLatencyAsCSV: () => string;
};
export declare class DataChannelLatencyTestRecord {
    seq: DataChannelLatencyTestSeq;
    playerSentTimestamp: DataChannelLatencyTestTimestamp;
    playerReceivedTimestamp: DataChannelLatencyTestTimestamp;
    streamerReceivedTimestamp: DataChannelLatencyTestTimestamp;
    streamerSentTimestamp: DataChannelLatencyTestTimestamp;
    requestFillerSize: number;
    responseFillerSize: number;
    constructor(request: DataChannelLatencyTestRequest);
    update(response: DataChannelLatencyTestResponse): void;
}

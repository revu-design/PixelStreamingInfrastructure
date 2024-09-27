/// <reference types="node" />
import { DataChannelLatencyTestRecord, DataChannelLatencyTestRequest, DataChannelLatencyTestResponse, DataChannelLatencyTestResult, DataChannelLatencyTestSeq, DataChannelLatencyTestTimestamp } from "./DataChannelLatencyTestResults";
export type DataChannelLatencyTestConfig = {
    duration: number;
    rps: number;
    requestSize: number;
    responseSize: number;
};
export type DataChannelLatencyTestSink = (request: DataChannelLatencyTestRequest) => void;
export type DataChannelLatencyTestResultCallback = (result: DataChannelLatencyTestResult) => void;
export declare class DataChannelLatencyTestController {
    startTime: DataChannelLatencyTestTimestamp;
    sink: DataChannelLatencyTestSink;
    callback: DataChannelLatencyTestResultCallback;
    records: Map<DataChannelLatencyTestSeq, DataChannelLatencyTestRecord>;
    seq: DataChannelLatencyTestSeq;
    interval: NodeJS.Timer;
    constructor(sink: DataChannelLatencyTestSink, callback: DataChannelLatencyTestResultCallback);
    start(config: DataChannelLatencyTestConfig): boolean;
    stop(): void;
    produceResult(): DataChannelLatencyTestResult;
    isRunning(): boolean;
    receive(response: DataChannelLatencyTestResponse): void;
    sendRequest(requestSize: number, responseSize: number): void;
    createRequest(requestSize: number, responseSize: number): DataChannelLatencyTestRequest;
}

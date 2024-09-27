// Copyright Epic Games, Inc. All Rights Reserved.
export class DataChannelLatencyTestRecord {
    constructor(request) {
        this.seq = request.Seq;
        this.playerSentTimestamp = Date.now();
        this.requestFillerSize = request.Filler ? request.Filler.length : 0;
    }
    update(response) {
        this.playerReceivedTimestamp = Date.now();
        this.streamerReceivedTimestamp = response.ReceivedTimestamp;
        this.streamerSentTimestamp = response.SentTimestamp;
        this.responseFillerSize = response.Filler ? response.Filler.length : 0;
    }
}
//# sourceMappingURL=DataChannelLatencyTestResults.js.map
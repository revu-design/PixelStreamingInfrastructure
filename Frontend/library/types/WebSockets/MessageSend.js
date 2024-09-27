// Copyright Epic Games, Inc. All Rights Reserved.
import { Logger } from '../Logger/Logger';
/**
 * The Send Types that are pushed from the signaling server
 */
export var MessageSendTypes;
(function (MessageSendTypes) {
    MessageSendTypes["LIST_STREAMERS"] = "listStreamers";
    MessageSendTypes["SUBSCRIBE"] = "subscribe";
    MessageSendTypes["UNSUBSCRIBE"] = "unsubscribe";
    MessageSendTypes["ICE_CANDIDATE"] = "iceCandidate";
    MessageSendTypes["OFFER"] = "offer";
    MessageSendTypes["ANSWER"] = "answer";
    MessageSendTypes["DATACHANNELREQUEST"] = "dataChannelRequest";
    MessageSendTypes["SFURECVDATACHANNELREADY"] = "peerDataChannelsReady";
    MessageSendTypes["PONG"] = "pong";
})(MessageSendTypes || (MessageSendTypes = {}));
/**
 * A Wrapper for the message to send to the signaling server
 */
export class MessageSend {
    /**
     * Turns the wrapper into a JSON String
     * @returns - JSON String of the Message to send
     */
    payload() {
        Logger.Log(Logger.GetStackTrace(), 'Sending => \n' + JSON.stringify(this, undefined, 4), 6);
        return JSON.stringify(this);
    }
}
export class MessageListStreamers extends MessageSend {
    constructor() {
        super();
        this.type = MessageSendTypes.LIST_STREAMERS;
    }
}
export class MessageSubscribe extends MessageSend {
    constructor(streamerid) {
        super();
        this.type = MessageSendTypes.SUBSCRIBE;
        this.streamerId = streamerid;
    }
}
export class MessageUnsubscribe extends MessageSend {
    constructor() {
        super();
        this.type = MessageSendTypes.UNSUBSCRIBE;
    }
}
/**
 * Instance Request Message Wrapper
 */
export class MessagePong extends MessageSend {
    constructor(time) {
        super();
        this.type = MessageSendTypes.PONG;
        this.time = time;
    }
}
/**
 *  Web RTC Offer message wrapper
 */
export class MessageWebRTCOffer extends MessageSend {
    /**
     * @param offer - Generated Web RTC Offer
     */
    constructor(offer) {
        super();
        this.type = MessageSendTypes.OFFER;
        if (offer) {
            this.type = offer.type;
            this.sdp = offer.sdp;
        }
    }
}
/**
 *  Web RTC Answer message wrapper
 */
export class MessageWebRTCAnswer extends MessageSend {
    /**
     * @param answer - Generated Web RTC Offer
     */
    constructor(answer) {
        super();
        this.type = MessageSendTypes.ANSWER;
        if (answer) {
            this.type = answer.type;
            this.sdp = answer.sdp;
        }
    }
}
/**
 *  Web RTC Data channel request message wrapper
 */
export class MessageWebRTCDatachannelRequest extends MessageSend {
    constructor() {
        super();
        this.type = MessageSendTypes.DATACHANNELREQUEST;
    }
}
/**
 *  Web RTC SFU Data channel ready message wrapper
 */
export class MessageSFURecvDataChannelReady extends MessageSend {
    constructor() {
        super();
        this.type = MessageSendTypes.SFURECVDATACHANNELREADY;
    }
}
/**
 * RTC Ice Candidate Wrapper
 */
export class MessageIceCandidate {
    /**
     * @param candidate - RTC Ice Candidate
     */
    constructor(candidate) {
        this.type = MessageSendTypes.ICE_CANDIDATE;
        this.candidate = candidate;
    }
    /**
     * Turns the wrapper into a JSON String
     * @returns - JSON String of the Message to send
     */
    payload() {
        Logger.Log(Logger.GetStackTrace(), 'Sending => \n' + JSON.stringify(this, undefined, 4), 6);
        return JSON.stringify(this);
    }
}
//# sourceMappingURL=MessageSend.js.map
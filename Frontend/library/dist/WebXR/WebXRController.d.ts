/// <reference types="webxr" />
import { WebRtcPlayerController } from '../WebRtcPlayer/WebRtcPlayerController';
export declare class WebXRController {
    private xrSession;
    private xrRefSpace;
    private gl;
    private positionLocation;
    private texcoordLocation;
    private resolutionLocation;
    private offsetLocation;
    private positionBuffer;
    private texcoordBuffer;
    private webRtcController;
    private xrGamepadController;
    private xrControllers;
    onSessionStarted: EventTarget;
    onSessionEnded: EventTarget;
    onFrame: EventTarget;
    constructor(webRtcPlayerController: WebRtcPlayerController);
    xrClicked(): void;
    onXrSessionEnded(): void;
    onXrSessionStarted(session: XRSession): void;
    onXrFrame(time: DOMHighResTimeStamp, frame: XRFrame): void;
    private render;
    static isSessionSupported(mode: XRSessionMode): Promise<boolean>;
}

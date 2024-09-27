/// <reference types="webxr" />
import { StreamMessageController } from '../UeInstanceMessage/StreamMessageController';
import { Controller } from './GamepadTypes';
/**
 * The class that handles the functionality of xrgamepads and controllers
 */
export declare class XRGamepadController {
    controllers: Array<Controller>;
    toStreamerMessagesProvider: StreamMessageController;
    /**
     * @param toStreamerMessagesProvider - Stream message instance
     */
    constructor(toStreamerMessagesProvider: StreamMessageController);
    updateStatus(source: XRInputSource, frame: XRFrame, refSpace: XRReferenceSpace): void;
}

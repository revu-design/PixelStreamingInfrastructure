import { FreezeFrame } from './FreezeFrame';
/**
 * A class for controlling freeze frame functionality
 */
export declare class FreezeFrameController {
    freezeFrame: FreezeFrame;
    receiving: boolean;
    size: number;
    jpeg: Uint8Array;
    valid: boolean;
    freezeFrameDelay: number;
    /**
     * Construct a freeze frame controller
     * @param rootDiv - the div that a freeze frame element will be injected into
     */
    constructor(rootDiv: HTMLElement);
    /**
     * Show the freeze frame if it is valid
     */
    showFreezeFrame(): void;
    /**
     * Hide the freeze frame and set the validity to false
     */
    hideFreezeFrame(): void;
    /**
     * Update the freeze frames image source and load it
     * @param jpeg - the freeze frame image as a byte array data
     * @param onLoadCallBack - a call back for managing if the play overlay needs to be shown or not
     */
    updateFreezeFrameAndShow(jpeg: Uint8Array, onLoadCallBack: () => void): void;
    /**
     * Process the new freeze frame image and update it
     * @param view - the freeze frame image as a byte array data
     * @param onLoadCallBack - a call back for managing if the play overlay needs to be shown or not
     */
    processFreezeFrameMessage(view: Uint8Array, onLoadCallBack: () => void): void;
}

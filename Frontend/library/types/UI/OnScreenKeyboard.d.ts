import { UnquantizedDenormalizedUnsignedCoord } from '../Util/CoordinateConverter';
import { MessageOnScreenKeyboard } from '../WebSockets/MessageReceive';
/**
 * Class for handling on screen keyboard usage
 */
export declare class OnScreenKeyboard {
    editTextButton: HTMLButtonElement;
    hiddenInput: HTMLInputElement;
    /**
     *
     * @param videoElementParent The div element the video player is injected into
     */
    constructor(videoElementParent: HTMLElement);
    /**
     * An override for unquantizeAndDenormalizeUnsigned
     * @param x the x axis point
     * @param y the y axis point
     * @returns unquantizeAndDenormalizeUnsigned object
     */
    unquantizeAndDenormalizeUnsigned(x: number, y: number): UnquantizedDenormalizedUnsignedCoord;
    /**
     * Creates on screen keyboard helpers
     * @param videoElementParent The div element the video player i injected into
     */
    createOnScreenKeyboardHelpers(videoElementParent: HTMLElement): void;
    /**
     * Shows the on screen keyboard
     * @param command the command received via the data channel containing keyboard positions
     */
    showOnScreenKeyboard(command: MessageOnScreenKeyboard): void;
}

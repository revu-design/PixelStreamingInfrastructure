import { ActiveKeys } from './InputClassesFactory';
import { StreamMessageController } from '../UeInstanceMessage/StreamMessageController';
import { Config } from '../Config/Config';
interface ICodeToKeyCode {
    [key: string]: number;
}
/**
 * Handles the Keyboard Inputs for the document
 */
export declare class KeyboardController {
    toStreamerMessagesProvider: StreamMessageController;
    activeKeysProvider: ActiveKeys;
    config: Config;
    private keyboardEventListenerTracker;
    CodeToKeyCode: ICodeToKeyCode;
    /**
     * @param toStreamerMessagesProvider Stream message provider class object
     * @param config The applications configuration. We're interested in the suppress browser keys option
     * @param activeKeysProvider Active keys provider class object
     */
    constructor(toStreamerMessagesProvider: StreamMessageController, config: Config, activeKeysProvider: ActiveKeys);
    /**
     * Registers document keyboard events with the controller
     */
    registerKeyBoardEvents(): void;
    /**
     * Unregisters document keyboard events
     */
    unregisterKeyBoardEvents(): void;
    /**
     * Handles When a key is down
     * @param keyboardEvent - Keyboard event
     */
    handleOnKeyDown(keyboardEvent: KeyboardEvent): void;
    /**
     * handles when a key is up
     * @param keyboardEvent - Keyboard event
     */
    handleOnKeyUp(keyboardEvent: KeyboardEvent): void;
    /**
     * Handles when a key is press
     * @param keyboard - Keyboard Event
     */
    handleOnKeyPress(keyboard: KeyboardEvent): void;
    /**
     * Gets the Keycode of the Key pressed
     * @param keyboardEvent - Key board Event
     * @returns - the key code of the Key
     */
    getKeycode(keyboardEvent: KeyboardEvent): number;
    /**
     * Browser keys do not have a charCode so we only need to test keyCode.
     * @param keyCode - the browser keycode number
     */
    isKeyCodeBrowserKey(keyCode: number): boolean;
}
export {};

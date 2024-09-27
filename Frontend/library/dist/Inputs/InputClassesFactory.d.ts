import { FakeTouchController } from './FakeTouchController';
import { KeyboardController } from './KeyboardController';
import { MouseController } from './MouseController';
import { TouchController } from './TouchController';
import { GamePadController } from './GamepadController';
import { Config, ControlSchemeType } from '../Config/Config';
import { CoordinateConverter } from '../Util/CoordinateConverter';
import { StreamMessageController } from '../UeInstanceMessage/StreamMessageController';
import { VideoPlayer } from '../VideoPlayer/VideoPlayer';
/**
 * Class for making and setting up input class types
 */
export declare class InputClassesFactory {
    toStreamerMessagesProvider: StreamMessageController;
    videoElementProvider: VideoPlayer;
    coordinateConverter: CoordinateConverter;
    activeKeys: ActiveKeys;
    /**
     * @param toStreamerMessagesProvider - Stream message instance
     * @param videoElementProvider - Video Player instance
     * @param coordinateConverter - A coordinateConverter instance
     */
    constructor(toStreamerMessagesProvider: StreamMessageController, videoElementProvider: VideoPlayer, coordinateConverter: CoordinateConverter);
    /**
     * Registers browser key events.
     */
    registerKeyBoard(config: Config): KeyboardController;
    /**
     * register mouse events based on a control type
     * @param controlScheme - if the mouse is either hovering or locked
     */
    registerMouse(controlScheme: ControlSchemeType): MouseController;
    /**
     * register touch events
     * @param fakeMouseTouch - the faked mouse touch event
     */
    registerTouch(fakeMouseTouch: boolean, videoElementParentClientRect: DOMRect): FakeTouchController | TouchController;
    /**
     * registers a gamepad
     */
    registerGamePad(): GamePadController;
}
/**
 * A class that keeps track of current active keys
 */
export declare class ActiveKeys {
    activeKeys: Array<number>;
    constructor();
    /**
     * Get the current array of active keys
     * @returns - an array of active keys
     */
    getActiveKeys(): number[];
}

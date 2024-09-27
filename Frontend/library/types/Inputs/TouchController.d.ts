import { CoordinateConverter } from '../Util/CoordinateConverter';
import { StreamMessageController } from '../UeInstanceMessage/StreamMessageController';
import { VideoPlayer } from '../VideoPlayer/VideoPlayer';
import { ITouchController } from './ITouchController';
/**
 * Handles the Touch input Events
 */
export declare class TouchController implements ITouchController {
    toStreamerMessagesProvider: StreamMessageController;
    videoElementProvider: VideoPlayer;
    coordinateConverter: CoordinateConverter;
    videoElementParent: HTMLVideoElement;
    fingers: number[];
    fingerIds: Map<any, any>;
    maxByteValue: number;
    private touchEventListenerTracker;
    /**
     * @param toStreamerMessagesProvider - Stream message instance
     * @param videoElementProvider - Video Player instance
     * @param coordinateConverter - A coordinate converter instance
     */
    constructor(toStreamerMessagesProvider: StreamMessageController, videoElementProvider: VideoPlayer, coordinateConverter: CoordinateConverter);
    /**
     * Unregister all touch events
     */
    unregisterTouchEvents(): void;
    /**
     * Remember a touch command
     * @param touch - the touch command
     */
    rememberTouch(touch: Touch): void;
    /**
     * Forgets a touch command
     * @param touch - the touch command
     */
    forgetTouch(touch: Touch): void;
    /**
     * When a touch event starts
     * @param touchEvent - the touch event being intercepted
     */
    onTouchStart(touchEvent: TouchEvent): void;
    /**
     * When a touch event ends
     * @param touchEvent - the touch event being intercepted
     */
    onTouchEnd(touchEvent: TouchEvent): void;
    /**
     * when a moving touch event occurs
     * @param touchEvent - the touch event being intercepted
     */
    onTouchMove(touchEvent: TouchEvent): void;
    emitTouchData(type: string, touches: TouchList): void;
}

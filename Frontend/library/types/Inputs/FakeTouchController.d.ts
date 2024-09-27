import { CoordinateConverter } from '../Util/CoordinateConverter';
import { StreamMessageController } from '../UeInstanceMessage/StreamMessageController';
import { VideoPlayer } from '../VideoPlayer/VideoPlayer';
import { ITouchController } from './ITouchController';
/**
 * Allows for the usage of fake touch events and implements ITouchController
 * @param dataChannelController - The controller for the Data channel
 * @param videoElementParent - The video player DOM element
 */
export declare class FakeTouchController implements ITouchController {
    fakeTouchFinger: FakeTouchFinger;
    toStreamerMessagesProvider: StreamMessageController;
    videoElementProvider: VideoPlayer;
    coordinateConverter: CoordinateConverter;
    videoElementParentClientRect: DOMRect;
    private touchEventListenerTracker;
    /**
     * @param toStreamerMessagesProvider - Stream message instance
     * @param videoElementProvider - Video element instance
     * @param coordinateConverter - A coordinate converter instance
     */
    constructor(toStreamerMessagesProvider: StreamMessageController, videoElementProvider: VideoPlayer, coordinateConverter: CoordinateConverter);
    /**
     * Unregister all touch events
     */
    unregisterTouchEvents(): void;
    /**
     * Sets the video Element Parent Client Rect numbers for this class
     * @param videoElementParentClientRect - a html ElementParentClientRect object
     */
    setVideoElementParentClientRect(videoElementParentClientRect: DOMRect): void;
    /**
     * When a touch event begins
     * @param touch - the activating touch event
     */
    onTouchStart(touch: TouchEvent): void;
    /**
     * When a touch event ends
     * @param touchEvent - the activating touch event
     */
    onTouchEnd(touchEvent: TouchEvent): void;
    /**
     * On a Move touch event
     * @param touchEvent - the activating touch event
     */
    onTouchMove(touchEvent: TouchEvent): void;
}
/**
 * The interface for finger position mapping
 */
export declare class FakeTouchFinger {
    id: number;
    x: number;
    y: number;
    /**
     * @param id - the button id
     * @param x - the x axis value
     * @param y - the y axis value
     */
    constructor(id: number, x: number, y: number);
}

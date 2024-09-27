import { MouseController } from './MouseController';
import { IMouseEvents } from './IMouseEvents';
import { NormalizedQuantizedUnsignedCoord } from '../Util/CoordinateConverter';
import { ActiveKeys } from './InputClassesFactory';
import { VideoPlayer } from '../VideoPlayer/VideoPlayer';
/**
 * Handle the mouse locked events
 */
export declare class LockedMouseEvents implements IMouseEvents {
    x: number;
    y: number;
    coord: NormalizedQuantizedUnsignedCoord;
    videoElementProvider: VideoPlayer;
    mouseController: MouseController;
    activeKeysProvider: ActiveKeys;
    updateMouseMovePositionEvent: (mouseEvent: MouseEvent) => void;
    private mouseEventListenerTracker;
    /**
     * @param videoElementProvider - Video Player instance
     * @param mouseController - Mouse controller instance
     * @param activeKeysProvider - Active keys provider instance
     * @param playerStyleAttributesProvider - Player style attributes instance
     */
    constructor(videoElementProvider: VideoPlayer, mouseController: MouseController, activeKeysProvider: ActiveKeys);
    /**
     * Unregisters all event handlers
     */
    unregisterMouseEvents(): void;
    /**
     * Handle when the locked state Changed
     */
    lockStateChange(): void;
    /**
     * Handle the mouse move event, sends the mouse data to the UE Instance
     * @param mouseEvent - Mouse Event
     */
    updateMouseMovePosition(mouseEvent: MouseEvent): void;
    /**
     * Handle the mouse Down event, sends the mouse data to the UE Instance
     * @param mouseEvent - Mouse Event
     */
    handleMouseDown(mouseEvent: MouseEvent): void;
    /**
     * Handle the mouse Up event, sends the mouse data to the UE Instance
     * @param mouseEvent - Mouse Event
     */
    handleMouseUp(mouseEvent: MouseEvent): void;
    /**
     * Handle the mouse wheel event, sends the mouse wheel data to the UE Instance
     * @param wheelEvent - Mouse Event
     */
    handleMouseWheel(wheelEvent: WheelEvent): void;
    /**
     * Handle the mouse double click event, sends the mouse data to the UE Instance
     * @param mouseEvent - Mouse Event
     */
    handleMouseDouble(mouseEvent: MouseEvent): void;
    /**
     * Handle the press mouse buttons event, sends the mouse data to the UE Instance
     * @param mouseEvent - Mouse Event
     */
    handlePressMouseButtons(mouseEvent: MouseEvent): void;
    /**
     * Handle the release mouse buttons event, sends the mouse data to the UE Instance
     * @param mouseEvent - Mouse Event
     */
    handleReleaseMouseButtons(mouseEvent: MouseEvent): void;
}
/**
 * Extra types for Document and WheelEvent
 */
declare global {
    interface Document {
        mozPointerLockElement: unknown;
        mozExitPointerLock?(): void;
    }
    interface WheelEvent {
        wheelDelta: number;
    }
}

import { MouseController } from './MouseController';
import { IMouseEvents } from './IMouseEvents';
/**
 * Video Player mouse Hover handler
 */
export declare class HoveringMouseEvents implements IMouseEvents {
    mouseController: MouseController;
    /**
     * @param mouseController - Mouse Controller instance
     */
    constructor(mouseController: MouseController);
    /**
     * Unregister event handlers
     */
    unregisterMouseEvents(): void;
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
     * Consumes the mouse context event. The UE instance has no equivalent and doesn't need to be informed.
     * @param mouseEvent - Mouse Event
     */
    handleContextMenu(mouseEvent: MouseEvent): void;
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

// Copyright Epic Games, Inc. All Rights Reserved.
import { Logger } from '../Logger/Logger';
/**
 * Video Player mouse Hover handler
 */
export class HoveringMouseEvents {
    /**
     * @param mouseController - Mouse Controller instance
     */
    constructor(mouseController) {
        this.mouseController = mouseController;
    }
    /**
     * Unregister event handlers
     */
    unregisterMouseEvents() {
        // empty for HoveringMouseEvents implementation
    }
    /**
     * Handle the mouse move event, sends the mouse data to the UE Instance
     * @param mouseEvent - Mouse Event
     */
    updateMouseMovePosition(mouseEvent) {
        if (!this.mouseController.videoElementProvider.isVideoReady()) {
            return;
        }
        Logger.Log(Logger.GetStackTrace(), 'MouseMove', 6);
        const coord = this.mouseController.coordinateConverter.normalizeAndQuantizeUnsigned(mouseEvent.offsetX, mouseEvent.offsetY);
        const delta = this.mouseController.coordinateConverter.normalizeAndQuantizeSigned(mouseEvent.movementX, mouseEvent.movementY);
        const toStreamerHandlers = this.mouseController.toStreamerMessagesProvider.toStreamerHandlers;
        toStreamerHandlers.get('MouseMove')([
            coord.x,
            coord.y,
            delta.x,
            delta.y
        ]);
        mouseEvent.preventDefault();
    }
    /**
     * Handle the mouse Down event, sends the mouse data to the UE Instance
     * @param mouseEvent - Mouse Event
     */
    handleMouseDown(mouseEvent) {
        if (!this.mouseController.videoElementProvider.isVideoReady()) {
            return;
        }
        Logger.Log(Logger.GetStackTrace(), 'onMouse Down', 6);
        const coord = this.mouseController.coordinateConverter.normalizeAndQuantizeUnsigned(mouseEvent.offsetX, mouseEvent.offsetY);
        const toStreamerHandlers = this.mouseController.toStreamerMessagesProvider.toStreamerHandlers;
        toStreamerHandlers.get('MouseDown')([
            mouseEvent.button,
            coord.x,
            coord.y
        ]);
        mouseEvent.preventDefault();
    }
    /**
     * Handle the mouse Up event, sends the mouse data to the UE Instance
     * @param mouseEvent - Mouse Event
     */
    handleMouseUp(mouseEvent) {
        if (!this.mouseController.videoElementProvider.isVideoReady()) {
            return;
        }
        Logger.Log(Logger.GetStackTrace(), 'onMouse Up', 6);
        const coord = this.mouseController.coordinateConverter.normalizeAndQuantizeUnsigned(mouseEvent.offsetX, mouseEvent.offsetY);
        const toStreamerHandlers = this.mouseController.toStreamerMessagesProvider.toStreamerHandlers;
        toStreamerHandlers.get('MouseUp')([
            mouseEvent.button,
            coord.x,
            coord.y
        ]);
        mouseEvent.preventDefault();
    }
    /**
     * Consumes the mouse context event. The UE instance has no equivalent and doesn't need to be informed.
     * @param mouseEvent - Mouse Event
     */
    handleContextMenu(mouseEvent) {
        if (!this.mouseController.videoElementProvider.isVideoReady()) {
            return;
        }
        mouseEvent.preventDefault();
    }
    /**
     * Handle the mouse wheel event, sends the mouse wheel data to the UE Instance
     * @param wheelEvent - Mouse Event
     */
    handleMouseWheel(wheelEvent) {
        if (!this.mouseController.videoElementProvider.isVideoReady()) {
            return;
        }
        const coord = this.mouseController.coordinateConverter.normalizeAndQuantizeUnsigned(wheelEvent.offsetX, wheelEvent.offsetY);
        const toStreamerHandlers = this.mouseController.toStreamerMessagesProvider.toStreamerHandlers;
        toStreamerHandlers.get('MouseWheel')([
            wheelEvent.wheelDelta,
            coord.x,
            coord.y
        ]);
        wheelEvent.preventDefault();
    }
    /**
     * Handle the mouse double click event, sends the mouse data to the UE Instance
     * @param mouseEvent - Mouse Event
     */
    handleMouseDouble(mouseEvent) {
        if (!this.mouseController.videoElementProvider.isVideoReady()) {
            return;
        }
        const coord = this.mouseController.coordinateConverter.normalizeAndQuantizeUnsigned(mouseEvent.offsetX, mouseEvent.offsetY);
        const toStreamerHandlers = this.mouseController.toStreamerMessagesProvider.toStreamerHandlers;
        toStreamerHandlers.get('MouseDouble')([
            mouseEvent.button,
            coord.x,
            coord.y
        ]);
    }
    /**
     * Handle the press mouse buttons event, sends the mouse data to the UE Instance
     * @param mouseEvent - Mouse Event
     */
    handlePressMouseButtons(mouseEvent) {
        if (!this.mouseController.videoElementProvider.isVideoReady()) {
            return;
        }
        Logger.Log(Logger.GetStackTrace(), 'onMouse press', 6);
        this.mouseController.pressMouseButtons(mouseEvent.buttons, mouseEvent.offsetX, mouseEvent.offsetY);
    }
    /**
     * Handle the release mouse buttons event, sends the mouse data to the UE Instance
     * @param mouseEvent - Mouse Event
     */
    handleReleaseMouseButtons(mouseEvent) {
        if (!this.mouseController.videoElementProvider.isVideoReady()) {
            return;
        }
        Logger.Log(Logger.GetStackTrace(), 'onMouse release', 6);
        this.mouseController.releaseMouseButtons(mouseEvent.buttons, mouseEvent.offsetX, mouseEvent.offsetY);
    }
}
//# sourceMappingURL=HoveringMouseEvents.js.map
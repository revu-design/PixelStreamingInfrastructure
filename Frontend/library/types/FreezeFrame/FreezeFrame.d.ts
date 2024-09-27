/**
 * A class for managing the freeze frame object
 */
export declare class FreezeFrame {
    protected rootDiv: HTMLElement;
    protected rootElement: HTMLDivElement;
    imageElement: HTMLImageElement;
    freezeFrameHeight: number;
    freezeFrameWidth: number;
    /**
     * Construct a freeze frame
     * @param rootDiv the div that a freeze frame element will be injected into
     */
    constructor(rootDiv: HTMLElement);
    /**
     * Set the freeze frame element for showing
     */
    setElementForShow(): void;
    /**
     * Set the freeze frame element for hiding
     */
    setElementForHide(): void;
    /**
     * Update the freeze frames image source
     * @param jpeg - the freeze frame image as a byte array data
     */
    updateImageElementSource(jpeg: Uint8Array): void;
    /**
     * Set the dimensions for the freeze frame from the element and resize it
     */
    setDimensionsFromElementAndResize(): void;
    /**
     * Resize a freeze frame element
     */
    resize(): void;
}

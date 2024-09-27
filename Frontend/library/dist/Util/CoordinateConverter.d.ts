import { VideoPlayer } from '../VideoPlayer/VideoPlayer';
/**
 * Converts coordinates from element relative coordinates to values normalized within the value range of a short (and back again)
 */
export declare class CoordinateConverter {
    videoElementProvider: VideoPlayer;
    videoElementParent: HTMLElement;
    videoElement: HTMLVideoElement;
    ratio: number;
    normalizeAndQuantizeUnsignedFunc: (x: number, y: number) => NormalizedQuantizedUnsignedCoord;
    normalizeAndQuantizeSignedFunc: (x: number, y: number) => NormalizedQuantizedSignedCoord;
    denormalizeAndUnquantizeUnsignedFunc: (x: number, y: number) => UnquantizedDenormalizedUnsignedCoord;
    /**
     * @param videoElementProvider - the div element that the video player will be injected into
     */
    constructor(videoElementProvider: VideoPlayer);
    /**
     * The surface method for setterNormalizeAndQuantizeUnsigned
     * @param x - x axis point
     * @param y - y axis point
     */
    normalizeAndQuantizeUnsigned(x: number, y: number): NormalizedQuantizedUnsignedCoord;
    /**
     * The surface method for setterUnquantizeAndDenormalizeUnsigned
     * @param x - x axis point
     * @param y - y axis point
     */
    unquantizeAndDenormalizeUnsigned(x: number, y: number): UnquantizedDenormalizedUnsignedCoord;
    /**
     * The surface method for setterNormalizeAndQuantizeSigned
     * @param x - x axis point
     * @param y - y axis point
     */
    normalizeAndQuantizeSigned(x: number, y: number): NormalizedQuantizedSignedCoord;
    /**
     * set up the Normalize And Quantize methods based on the aspect ratio and the video player ratio
     */
    setupNormalizeAndQuantize(): void;
    /**
     * normalizeAndQuantizeUnsigned for playerAspectRatio > videoAspectRatio
     * @param x - x axis point
     * @param y - y axis point
     */
    normalizeAndQuantizeUnsignedPlayerBigger(x: number, y: number): NormalizedQuantizedUnsignedCoord;
    /**
     * unquantizeAndDenormalizeUnsigned for playerAspectRatio > videoAspectRatio
     * @param x - x axis point
     * @param y - y axis point
     */
    denormalizeAndUnquantizeUnsignedPlayerBigger(x: number, y: number): UnquantizedDenormalizedUnsignedCoord;
    /**
     * normalizeAndQuantizeSigned for playerAspectRatio > videoAspectRatio
     * @param x - x axis point
     * @param y - y axis point
     */
    normalizeAndQuantizeSignedPlayerBigger(x: number, y: number): NormalizedQuantizedSignedCoord;
    /**
     * normalizeAndQuantizeUnsigned for playerAspectRatio <= videoAspectRatio
     * @param x - x axis point
     * @param y - y axis point
     */
    normalizeAndQuantizeUnsignedPlayerSmaller(x: number, y: number): NormalizedQuantizedUnsignedCoord;
    /**
     * unquantizeAndDenormalizeUnsigned for playerAspectRatio <= videoAspectRatio
     * @param x - x axis point
     * @param y - y axis point
     */
    denormalizeAndUnquantizeUnsignedPlayerSmaller(x: number, y: number): UnquantizedDenormalizedUnsignedCoord;
    /**
     * normalizeAndQuantizeSigned for playerAspectRatio <= videoAspectRatio
     * @param x - x axis point
     * @param y - y axis point
     */
    normalizeAndQuantizeSignedPlayerSmaller(x: number, y: number): NormalizedQuantizedSignedCoord;
}
/**
 * A class for NormalizeAndQuantizeUnsigned objects
 */
export declare class NormalizedQuantizedUnsignedCoord {
    inRange: boolean;
    x: number;
    y: number;
    constructor(inRange: boolean, x: number, y: number);
}
/**
 * A class for UnquantizedAndDenormalizeUnsigned objects
 */
export declare class UnquantizedDenormalizedUnsignedCoord {
    x: number;
    y: number;
    constructor(x: number, y: number);
}
/**
 * A class for NormalizedQuantizedSignedCoord objects
 */
export declare class NormalizedQuantizedSignedCoord {
    x: number;
    y: number;
    constructor(x: number, y: number);
}

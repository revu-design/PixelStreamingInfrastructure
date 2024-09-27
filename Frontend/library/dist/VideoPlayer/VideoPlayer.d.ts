import { Config } from '../Config/Config';
/**
 * Extra types for the HTMLElement
 */
declare global {
    interface HTMLElement {
        mozRequestPointerLock?(): void;
    }
}
/**
 * The video player html element
 */
export declare class VideoPlayer {
    private config;
    private videoElement;
    private audioElement?;
    private orientationChangeTimeout;
    private lastTimeResized;
    onMatchViewportResolutionCallback: (width: number, height: number) => void;
    onResizePlayerCallback: () => void;
    resizeTimeoutHandle: number;
    /**
     * @param videoElementParent the html div the the video player will be injected into
     * @param config the applications configuration. We're interested in the startVideoMuted flag
     */
    constructor(videoElementParent: HTMLElement, config: Config);
    setAudioElement(audioElement: HTMLAudioElement): void;
    /**
     * Sets up the video element with any application config and plays the video element.
     * @returns A promise for if playing the video was successful or not.
     */
    play(): Promise<void>;
    /**
     * @returns True if the video element is paused.
     */
    isPaused(): boolean;
    /**
     * @returns - whether the video element is playing.
     */
    isVideoReady(): boolean;
    /**
     * @returns True if the video element has a valid video source (srcObject).
     */
    hasVideoSource(): boolean;
    /**
     * Get the current context of the html video element
     * @returns - the current context of the video element
     */
    getVideoElement(): HTMLVideoElement;
    /**
     * Get the current context of the html video elements parent
     * @returns - the current context of the video elements parent
     */
    getVideoParentElement(): HTMLElement;
    /**
     * Set the Video Elements src object tracks to enable
     * @param enabled - Enable Tracks on the Src Object
     */
    setVideoEnabled(enabled: boolean): void;
    /**
     * An override for when the video has been initialized with a srcObject
     */
    onVideoInitialized(): void;
    /**
     * On the orientation change of a window clear the timeout
     */
    onOrientationChange(): void;
    /**
     * Resizes the player style based on the window height and width
     * @returns - nil if requirements are satisfied
     */
    resizePlayerStyle(): void;
    /**
     * Resizes the player element to fill the parent element
     */
    resizePlayerStyleToFillParentElement(): void;
    updateVideoStreamSize(): void;
}

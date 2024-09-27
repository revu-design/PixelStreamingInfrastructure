import { Config } from '../Config/Config';
import { PixelStreaming } from '../PixelStreaming/PixelStreaming';
export declare class AFKController {
    active: boolean;
    countdownActive: boolean;
    warnTimer: ReturnType<typeof setTimeout>;
    countDown: number;
    countDownTimer: ReturnType<typeof setInterval>;
    config: Config;
    pixelStreaming: PixelStreaming;
    onDismissAfk: () => void;
    onAFKTimedOutCallback: () => void;
    constructor(config: Config, pixelStreaming: PixelStreaming, onDismissAfk: () => void);
    /**
     * The methods that occur when an afk event listener is clicked
     */
    onAfkClick(): void;
    /**
     * Start the warning timer if a timeout is set greater that 0 seconds
     */
    startAfkWarningTimer(): void;
    /**
     * Stop the afk warning timer
     */
    stopAfkWarningTimer(): void;
    /**
     * Pause the timer which when elapsed will warn the user they are inactive.
     */
    pauseAfkWarningTimer(): void;
    /**
     * If the user interacts then reset the warning timer.
     */
    resetAfkWarningTimer(): void;
    /**
     * Show the AFK overlay and begin the countDown
     */
    activateAfkEvent(): void;
}

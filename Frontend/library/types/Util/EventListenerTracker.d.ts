export type UnregisterFunction = () => void;
export declare class EventListenerTracker {
    private unregisterCallbacks;
    constructor();
    /**
     * Add a new callback that is executed when unregisterAll is called.
     * @param callback
     */
    addUnregisterCallback(callback: UnregisterFunction): void;
    /**
     * Execute all callbacks and clear the list.
     */
    unregisterAll(): void;
}

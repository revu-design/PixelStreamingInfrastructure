export declare class WebXRUtils {
    /**
     * Deep copies a gamepad's values by first converting it to a JSON object and then back to a gamepad
     *
     * @param gamepad the original gamepad
     * @returns a new gamepad object, populated with the original gamepads values
     */
    static deepCopyGamepad(gamepad: Gamepad): Gamepad;
}

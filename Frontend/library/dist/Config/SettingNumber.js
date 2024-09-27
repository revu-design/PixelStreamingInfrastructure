// Copyright Epic Games, Inc. All Rights Reserved.
import { SettingBase } from './SettingBase';
/**
 * A number setting object with a text label. Min and max limit the range of allowed values.
 */
export class SettingNumber extends SettingBase {
    constructor(id, label, description, min, max, defaultNumber, useUrlParams, 
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    defaultOnChangeListener = () => { }) {
        super(id, label, description, defaultNumber, defaultOnChangeListener);
        this._min = min;
        this._max = max;
        // attempt to read the number from the url params
        const urlParams = new URLSearchParams(window.location.search);
        if (!useUrlParams || !urlParams.has(this.id)) {
            this.number = defaultNumber;
        }
        else {
            const parsedValue = Number.parseInt(urlParams.get(this.id));
            this.number = Number.isNaN(parsedValue)
                ? defaultNumber
                : parsedValue;
        }
        this.useUrlParams = useUrlParams;
    }
    /**
     * Persist the setting value in URL.
     */
    updateURLParams() {
        if (this.useUrlParams) {
            // set url params like ?id=number
            const urlParams = new URLSearchParams(window.location.search);
            urlParams.set(this.id, this.number.toString());
            window.history.replaceState({}, '', urlParams.toString() !== ''
                ? `${location.pathname}?${urlParams}`
                : `${location.pathname}`);
        }
    }
    /**
     * Set the number value (will be clamped within range).
     */
    set number(newNumber) {
        this.value = this.clamp(newNumber);
    }
    /**
     * @returns The number stored.
     */
    get number() {
        return this.value;
    }
    /**
     * Clamps a number between the min and max values (inclusive).
     * @param inNumber The number to clamp.
     * @returns The clamped number.
     */
    clamp(inNumber) {
        return Math.max(Math.min(this._max, inNumber), this._min);
    }
    /**
     * Returns the minimum value
     * @returns The minimum value
     */
    get min() {
        return this._min;
    }
    /**
     * Returns the maximum value
     * @returns The maximum value
     */
    get max() {
        return this._max;
    }
    /**
     * Add a change listener to the number object.
     */
    addOnChangedListener(onChangedFunc) {
        this.onChange = onChangedFunc;
    }
}
//# sourceMappingURL=SettingNumber.js.map
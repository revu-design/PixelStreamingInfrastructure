import type { NumericParametersIds } from './Config';
import { SettingBase } from './SettingBase';
/**
 * A number setting object with a text label. Min and max limit the range of allowed values.
 */
export declare class SettingNumber<CustomIds extends string = NumericParametersIds> extends SettingBase {
    _min: number;
    _max: number;
    id: NumericParametersIds | CustomIds;
    onChangeEmit: (changedValue: number) => void;
    useUrlParams: boolean;
    constructor(id: NumericParametersIds | CustomIds, label: string, description: string, min: number, max: number, defaultNumber: number, useUrlParams: boolean, defaultOnChangeListener?: (changedValue: unknown, setting: SettingBase) => void);
    /**
     * Persist the setting value in URL.
     */
    updateURLParams(): void;
    /**
     * Set the number value (will be clamped within range).
     */
    set number(newNumber: number);
    /**
     * @returns The number stored.
     */
    get number(): number;
    /**
     * Clamps a number between the min and max values (inclusive).
     * @param inNumber The number to clamp.
     * @returns The clamped number.
     */
    clamp(inNumber: number): number;
    /**
     * Returns the minimum value
     * @returns The minimum value
     */
    get min(): number;
    /**
     * Returns the maximum value
     * @returns The maximum value
     */
    get max(): number;
    /**
     * Add a change listener to the number object.
     */
    addOnChangedListener(onChangedFunc: (newNumber: number) => void): void;
}

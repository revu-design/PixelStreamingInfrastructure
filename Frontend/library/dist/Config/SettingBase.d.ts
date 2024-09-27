/**
 * Base class for a setting that has a text label and an arbitrary setting value it stores.
 */
export declare class SettingBase {
    id: string;
    description: string;
    _label: string;
    _value: unknown;
    onChange: (changedValue: unknown, setting: SettingBase) => void;
    onChangeEmit: (changedValue: unknown) => void;
    constructor(id: string, label: string, description: string, defaultSettingValue: unknown, defaultOnChangeListener?: (changedValue: unknown, setting: SettingBase) => void);
    /**
     * Set the label text for the setting.
     * @param label setting label.
     */
    set label(inLabel: string);
    /**
     * @returns The label text for the setting.
     */
    get label(): string;
    /**
     * @return The setting's value.
     */
    get value(): unknown;
    /**
     * Update the setting's stored value.
     * @param inValue The new value for the setting.
     */
    set value(inValue: unknown);
}

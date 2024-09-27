// Copyright Epic Games, Inc. All Rights Reserved.
/**
 * Base class for a setting that has a text label and an arbitrary setting value it stores.
 */
export class SettingBase {
    constructor(id, label, description, defaultSettingValue, 
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    defaultOnChangeListener = () => { }) {
        this.onChange = defaultOnChangeListener;
        this.onChangeEmit = () => {
            /* Do nothing, to be overridden. */
        };
        this.id = id;
        this.description = description;
        this.label = label;
        this.value = defaultSettingValue;
    }
    /**
     * Set the label text for the setting.
     * @param label setting label.
     */
    set label(inLabel) {
        this._label = inLabel;
        this.onChangeEmit(this._value);
    }
    /**
     * @returns The label text for the setting.
     */
    get label() {
        return this._label;
    }
    /**
     * @return The setting's value.
     */
    get value() {
        return this._value;
    }
    /**
     * Update the setting's stored value.
     * @param inValue The new value for the setting.
     */
    set value(inValue) {
        this._value = inValue;
        this.onChange(this._value, this);
        this.onChangeEmit(this._value);
    }
}
//# sourceMappingURL=SettingBase.js.map
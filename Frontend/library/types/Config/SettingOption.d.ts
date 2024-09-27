import type { OptionParametersIds } from './Config';
import { SettingBase } from './SettingBase';
/**
 * An Option setting object with a text label. Allows you to specify an array of options and select one of them.
 */
export declare class SettingOption<CustomIds extends string = OptionParametersIds> extends SettingBase {
    id: OptionParametersIds | CustomIds;
    onChangeEmit: (changedValue: string) => void;
    _options: Array<string>;
    useUrlParams: boolean;
    constructor(id: OptionParametersIds | CustomIds, label: string, description: string, defaultTextValue: string, options: Array<string>, useUrlParams: boolean, defaultOnChangeListener?: (changedValue: unknown, setting: SettingBase) => void);
    /**
     * Parse the text value from the url parameters.
     * @returns The text value parsed from the url if the url parameters contains /?id=value, but empty string if just /?id or no url param found.
     */
    getUrlParamText(): string;
    /**
     * Persist the setting value in URL.
     */
    updateURLParams(): void;
    /**
     * Add a change listener to the select element.
     */
    addOnChangedListener(onChangedFunc: (newValue: string) => void): void;
    /**
     * @returns All available options as an array
     */
    get options(): Array<string>;
    /**
     * Set options
     * @param values Array of options
     */
    set options(values: Array<string>);
    /**
     * @returns Selected option as a string
     */
    get selected(): string;
    /**
     * Set selected option if it matches one of the available options
     * @param value Selected option
     */
    set selected(value: string);
}

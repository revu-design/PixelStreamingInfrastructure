import type { TextParametersIds } from './Config';
import { SettingBase } from './SettingBase';
/**
 * A text setting object with a text label.
 */
export declare class SettingText<CustomIds extends string = TextParametersIds> extends SettingBase {
    id: TextParametersIds | CustomIds;
    onChangeEmit: (changedValue: string) => void;
    useUrlParams: boolean;
    constructor(id: TextParametersIds | CustomIds, label: string, description: string, defaultTextValue: string, useUrlParams: boolean, defaultOnChangeListener?: (changedValue: unknown, setting: SettingBase) => void);
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
     * @return The setting's value.
     */
    get text(): string;
    /**
     * Update the setting's stored value.
     * @param inValue The new value for the setting.
     */
    set text(inValue: string);
}

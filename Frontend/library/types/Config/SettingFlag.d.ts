import type { FlagsIds } from './Config';
import { SettingBase } from './SettingBase';
/**
 * A boolean flag setting object with a text label.
 */
export declare class SettingFlag<CustomIds extends string = FlagsIds> extends SettingBase {
    id: FlagsIds | CustomIds;
    onChangeEmit: (changedValue: boolean) => void;
    useUrlParams: boolean;
    constructor(id: FlagsIds | CustomIds, label: string, description: string, defaultFlagValue: boolean, useUrlParams: boolean, defaultOnChangeListener?: (changedValue: unknown, setting: SettingBase) => void);
    /**
     * Parse the flag value from the url parameters.
     * @returns True if the url parameters contains /?id, but False if /?id=false
     */
    getUrlParamFlag(): boolean;
    /**
     * Persist the setting value in URL.
     */
    updateURLParams(): void;
    /**
     * Enables this flag.
     */
    enable(): void;
    /**
     * @return The setting's value.
     */
    get flag(): boolean;
    /**
     * Update the setting's stored value.
     * @param inValue The new value for the setting.
     */
    set flag(inValue: boolean);
}

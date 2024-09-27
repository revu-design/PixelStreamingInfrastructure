// Copyright Epic Games, Inc. All Rights Reserved.
import { SettingBase } from './SettingBase';
/**
 * A text setting object with a text label.
 */
export class SettingText extends SettingBase {
    constructor(id, label, description, defaultTextValue, useUrlParams, 
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    defaultOnChangeListener = () => { }) {
        super(id, label, description, defaultTextValue, defaultOnChangeListener);
        const urlParams = new URLSearchParams(window.location.search);
        if (!useUrlParams || !urlParams.has(this.id)) {
            this.text = defaultTextValue;
        }
        else {
            // parse flag from url parameters
            const urlParamFlag = this.getUrlParamText();
            this.text = urlParamFlag;
        }
        this.useUrlParams = useUrlParams;
    }
    /**
     * Parse the text value from the url parameters.
     * @returns The text value parsed from the url if the url parameters contains /?id=value, but empty string if just /?id or no url param found.
     */
    getUrlParamText() {
        var _a;
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.has(this.id)) {
            return (_a = urlParams.get(this.id)) !== null && _a !== void 0 ? _a : '';
        }
        return '';
    }
    /**
     * Persist the setting value in URL.
     */
    updateURLParams() {
        if (this.useUrlParams) {
            // set url params
            const urlParams = new URLSearchParams(window.location.search);
            urlParams.set(this.id, this.text);
            window.history.replaceState({}, '', urlParams.toString() !== ''
                ? `${location.pathname}?${urlParams}`
                : `${location.pathname}`);
        }
    }
    /**
     * @return The setting's value.
     */
    get text() {
        return this.value;
    }
    /**
     * Update the setting's stored value.
     * @param inValue The new value for the setting.
     */
    set text(inValue) {
        this.value = inValue;
    }
}
//# sourceMappingURL=SettingText.js.map
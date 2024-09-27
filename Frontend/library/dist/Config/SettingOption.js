// Copyright Epic Games, Inc. All Rights Reserved.
import { SettingBase } from './SettingBase';
/**
 * An Option setting object with a text label. Allows you to specify an array of options and select one of them.
 */
export class SettingOption extends SettingBase {
    constructor(id, label, description, defaultTextValue, options, useUrlParams, 
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    defaultOnChangeListener = () => { }) {
        super(id, label, description, [defaultTextValue, defaultTextValue], defaultOnChangeListener);
        this.options = options;
        const urlParams = new URLSearchParams(window.location.search);
        const stringToMatch = useUrlParams && urlParams.has(this.id)
            ? this.getUrlParamText()
            : defaultTextValue;
        this.selected = stringToMatch;
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
            urlParams.set(this.id, this.selected);
            window.history.replaceState({}, '', urlParams.toString() !== ''
                ? `${location.pathname}?${urlParams}`
                : `${location.pathname}`);
        }
    }
    /**
     * Add a change listener to the select element.
     */
    addOnChangedListener(onChangedFunc) {
        this.onChange = onChangedFunc;
    }
    /**
     * @returns All available options as an array
     */
    get options() {
        return this._options;
    }
    /**
     * Set options
     * @param values Array of options
     */
    set options(values) {
        this._options = values;
        this.onChangeEmit(this.selected);
    }
    /**
     * @returns Selected option as a string
     */
    get selected() {
        return this.value;
    }
    /**
     * Set selected option if it matches one of the available options
     * @param value Selected option
     */
    set selected(value) {
        // A user may not specify the full possible value so we instead use the closest match.
        // eg ?xxx=H264 would select 'H264 level-asymmetry-allowed=1;packetization-mode=1;profile-level-id=42001f'
        let filteredList = this.options.filter((option) => option.indexOf(value) !== -1);
        if (filteredList.length) {
            this.value = filteredList[0];
            return;
        }
        // A user has specified a codec with a fmtp string but this codec + fmtp line isn't available.
        // in that case, just use the codec
        filteredList = this.options.filter((option) => option.indexOf(value.split(' ')[0]) !== -1);
        if (filteredList.length) {
            this.value = filteredList[0];
            return;
        }
    }
}
//# sourceMappingURL=SettingOption.js.map
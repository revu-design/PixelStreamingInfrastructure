import { SettingFlag } from './SettingFlag';
import { SettingNumber } from './SettingNumber';
import { SettingText } from './SettingText';
import { SettingOption } from './SettingOption';
import { EventEmitter } from '../Util/EventEmitter';
/**
 * A collection of flags that can be toggled and are core to all Pixel Streaming experiences.
 * These are used in the `Config.Flags` map.
 */
export declare class Flags {
    static AutoConnect: "AutoConnect";
    static AutoPlayVideo: "AutoPlayVideo";
    static AFKDetection: "TimeoutIfIdle";
    static BrowserSendOffer: "OfferToReceive";
    static HoveringMouseMode: "HoveringMouse";
    static ForceMonoAudio: "ForceMonoAudio";
    static ForceTURN: "ForceTURN";
    static FakeMouseWithTouches: "FakeMouseWithTouches";
    static IsQualityController: "ControlsQuality";
    static MatchViewportResolution: "MatchViewportRes";
    static StartVideoMuted: "StartVideoMuted";
    static SuppressBrowserKeys: "SuppressBrowserKeys";
    static UseMic: "UseMic";
    static KeyboardInput: "KeyboardInput";
    static MouseInput: "MouseInput";
    static TouchInput: "TouchInput";
    static GamepadInput: "GamepadInput";
    static XRControllerInput: "XRControllerInput";
    static WaitForStreamer: "WaitForStreamer";
}
export type FlagsKeys = Exclude<keyof typeof Flags, 'prototype'>;
export type FlagsIds = typeof Flags[FlagsKeys];
/**
 * A collection of numeric parameters that are core to all Pixel Streaming experiences.
 *
 */
export declare class NumericParameters {
    static AFKTimeoutSecs: "AFKTimeout";
    static AFKCountdownSecs: "AFKCountdown";
    static MinQP: "MinQP";
    static MaxQP: "MaxQP";
    static WebRTCFPS: "WebRTCFPS";
    static WebRTCMinBitrate: "WebRTCMinBitrate";
    static WebRTCMaxBitrate: "WebRTCMaxBitrate";
    static MaxReconnectAttempts: "MaxReconnectAttempts";
    static StreamerAutoJoinInterval: "StreamerAutoJoinInterval";
}
export type NumericParametersKeys = Exclude<keyof typeof NumericParameters, 'prototype'>;
export type NumericParametersIds = typeof NumericParameters[NumericParametersKeys];
/**
 * A collection of textual parameters that are core to all Pixel Streaming experiences.
 *
 */
export declare class TextParameters {
    static SignallingServerUrl: "ss";
}
export type TextParametersKeys = Exclude<keyof typeof TextParameters, 'prototype'>;
export type TextParametersIds = typeof TextParameters[TextParametersKeys];
/**
 * A collection of enum based parameters that are core to all Pixel Streaming experiences.
 *
 */
export declare class OptionParameters {
    static PreferredCodec: "PreferredCodec";
    static StreamerId: "StreamerId";
}
export type OptionParametersKeys = Exclude<keyof typeof OptionParameters, 'prototype'>;
export type OptionParametersIds = typeof OptionParameters[OptionParametersKeys];
/**
 * Utility types for inferring data type based on setting ID
 */
export type OptionIds = FlagsIds | NumericParametersIds | TextParametersIds | OptionParametersIds;
export type OptionKeys<T> = T extends FlagsIds ? boolean : T extends NumericParametersIds ? number : T extends TextParametersIds ? string : T extends OptionParametersIds ? string : never;
export type AllSettings = {
    [K in OptionIds]: OptionKeys<K>;
};
export interface ConfigParams {
    /** Initial Pixel Streaming settings */
    initialSettings?: Partial<AllSettings>;
    /** If useUrlParams is set true, will read initial values from URL parameters and persist changed settings into URL */
    useUrlParams?: boolean;
}
export declare class Config {
    private flags;
    private numericParameters;
    private textParameters;
    private optionParameters;
    private _useUrlParams;
    constructor(config?: ConfigParams);
    /**
     * True if reading configuration initial values from URL parameters, and
     * persisting changes in URL when changed.
     */
    get useUrlParams(): boolean;
    /**
     * Populate the default settings for a Pixel Streaming application
     */
    private populateDefaultSettings;
    /**
     * Add a callback to fire when the numeric setting is toggled.
     * @param id The id of the flag.
     * @param onChangedListener The callback to fire when the numeric value changes.
     */
    _addOnNumericSettingChangedListener(id: NumericParametersIds, onChangedListener: (newValue: number) => void): void;
    _addOnOptionSettingChangedListener(id: OptionParametersIds, onChangedListener: (newValue: string) => void): void;
    /**
     * @param id The id of the numeric setting we are interested in getting a value for.
     * @returns The numeric value stored in the parameter with the passed id.
     */
    getNumericSettingValue(id: NumericParametersIds): number;
    /**
     * @param id The id of the text setting we are interested in getting a value for.
     * @returns The text value stored in the parameter with the passed id.
     */
    getTextSettingValue(id: TextParametersIds): string;
    /**
     * Set number in the setting.
     * @param id The id of the numeric setting we are interested in.
     * @param value The numeric value to set.
     */
    setNumericSetting(id: NumericParametersIds, value: number): void;
    /**
     * Add a callback to fire when the flag is toggled.
     * @param id The id of the flag.
     * @param onChangeListener The callback to fire when the value changes.
     */
    _addOnSettingChangedListener(id: FlagsIds, onChangeListener: (newFlagValue: boolean) => void): void;
    /**
     * Add a callback to fire when the text is changed.
     * @param id The id of the flag.
     * @param onChangeListener The callback to fire when the value changes.
     */
    _addOnTextSettingChangedListener(id: TextParametersIds, onChangeListener: (newTextValue: string) => void): void;
    /**
     * Get the option which has the given id.
     * @param id The id of the option.
     * @returns The SettingOption object matching id
     */
    getSettingOption(id: OptionParametersIds): SettingOption;
    /**
     * Get the value of the configuration flag which has the given id.
     * @param id The unique id for the flag.
     * @returns True if the flag is enabled.
     */
    isFlagEnabled(id: FlagsIds): boolean;
    /**
     * Set flag to be enabled/disabled.
     * @param id The id of the flag to toggle.
     * @param flagEnabled True if the flag should be enabled.
     */
    setFlagEnabled(id: FlagsIds, flagEnabled: boolean): void;
    /**
     * Set the text setting.
     * @param id The id of the setting
     * @param settingValue The value to set in the setting.
     */
    setTextSetting(id: TextParametersIds, settingValue: string): void;
    /**
     * Set the option setting list of options.
     * @param id The id of the setting
     * @param settingOptions The values the setting could take
     */
    setOptionSettingOptions(id: OptionParametersIds, settingOptions: Array<string>): void;
    /**
     * Set option enum settings selected option.
     * @param id The id of the setting
     * @param settingOptions The value to select out of all the options
     */
    setOptionSettingValue(id: OptionParametersIds, settingValue: string): void;
    /**
     * Set the label for the flag.
     * @param id The id of the flag.
     * @param label The new label to use for the flag.
     */
    setFlagLabel(id: FlagsIds, label: string): void;
    /**
     * Set a subset of all settings in one function call.
     *
     * @param settings A (partial) list of settings to set
     */
    setSettings(settings: Partial<AllSettings>): void;
    /**
     * Get all settings
     * @returns All setting values as an object with setting ids as keys
     */
    getSettings(): Partial<AllSettings>;
    /**
     * Get all Flag settings as an array.
     * @returns All SettingFlag objects
     */
    getFlags(): Array<SettingFlag>;
    /**
     * Get all Text settings as an array.
     * @returns All SettingText objects
     */
    getTextSettings(): Array<SettingText>;
    /**
     * Get all Number settings as an array.
     * @returns All SettingNumber objects
     */
    getNumericSettings(): Array<SettingNumber>;
    /**
     * Get all Option settings as an array.
     * @returns All SettingOption objects
     */
    getOptionSettings(): Array<SettingOption>;
    /**
     * Emit events when settings change.
     * @param eventEmitter
     */
    _registerOnChangeEvents(eventEmitter: EventEmitter): void;
}
/**
 * The enum associated with the mouse being locked or hovering
 */
export declare enum ControlSchemeType {
    LockedMouse = 0,
    HoveringMouse = 1
}

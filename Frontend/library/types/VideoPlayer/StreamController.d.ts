import { MouseController } from '../Inputs/MouseController';
import { VideoPlayer } from './VideoPlayer';
/**
 * Video Player Controller handles the creation of the video HTML element and all handlers
 */
export declare class StreamController {
    videoElementProvider: VideoPlayer;
    audioElement: HTMLAudioElement;
    mouseController: MouseController;
    /**
     * @param videoElementProvider Video Player instance
     */
    constructor(videoElementProvider: VideoPlayer);
    /**
     * Handles when the Peer connection has a track event
     * @param rtcTrackEvent - RTC Track Event
     */
    handleOnTrack(rtcTrackEvent: RTCTrackEvent): void;
    /**
     * Creates the audio device when receiving an RTCTrackEvent with the kind of "audio"
     * @param audioMediaStream - Audio Media stream track
     */
    CreateAudioTrack(audioMediaStream: MediaStream): void;
}

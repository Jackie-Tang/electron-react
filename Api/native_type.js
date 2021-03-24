"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @deprecated Deprecated from v3.2.0.
 *
 * Local voice changer options.
 */
var VoiceChangerPreset;
(function (VoiceChangerPreset) {
    /**
     * The original voice (no local voice change).
     */
    VoiceChangerPreset[VoiceChangerPreset["VOICE_CHANGER_OFF"] = 0] = "VOICE_CHANGER_OFF";
    /**
     * The voice of an old man.
     */
    VoiceChangerPreset[VoiceChangerPreset["VOICE_CHANGER_OLDMAN"] = 1] = "VOICE_CHANGER_OLDMAN";
    /**
     * The voice of a little boy.
     */
    VoiceChangerPreset[VoiceChangerPreset["VOICE_CHANGER_BABYBOY"] = 2] = "VOICE_CHANGER_BABYBOY";
    /**
     * The voice of a little girl.
     */
    VoiceChangerPreset[VoiceChangerPreset["VOICE_CHANGER_BABYGIRL"] = 3] = "VOICE_CHANGER_BABYGIRL";
    /**
     * The voice of Zhu Bajie, a character in Journey to the West who has a voice like that of a growling bear.
     */
    VoiceChangerPreset[VoiceChangerPreset["VOICE_CHANGER_ZHUBAJIE"] = 4] = "VOICE_CHANGER_ZHUBAJIE";
    /**
     * The ethereal voice.
     */
    VoiceChangerPreset[VoiceChangerPreset["VOICE_CHANGER_ETHEREAL"] = 5] = "VOICE_CHANGER_ETHEREAL";
    /**
     * The voice of Hulk.
     */
    VoiceChangerPreset[VoiceChangerPreset["VOICE_CHANGER_HULK"] = 6] = "VOICE_CHANGER_HULK";
    /**
     * A more vigorous voice.
     */
    VoiceChangerPreset[VoiceChangerPreset["VOICE_BEAUTY_VIGOROUS"] = 1048577] = "VOICE_BEAUTY_VIGOROUS";
    /**
     * A deeper voice.
     */
    VoiceChangerPreset[VoiceChangerPreset["VOICE_BEAUTY_DEEP"] = 1048578] = "VOICE_BEAUTY_DEEP";
    /**
     * A mellower voice.
     */
    VoiceChangerPreset[VoiceChangerPreset["VOICE_BEAUTY_MELLOW"] = 1048579] = "VOICE_BEAUTY_MELLOW";
    /**
     * Falsetto.
     */
    VoiceChangerPreset[VoiceChangerPreset["VOICE_BEAUTY_FALSETTO"] = 1048580] = "VOICE_BEAUTY_FALSETTO";
    /**
     * A fuller voice.
     */
    VoiceChangerPreset[VoiceChangerPreset["VOICE_BEAUTY_FULL"] = 1048581] = "VOICE_BEAUTY_FULL";
    /**
     * A clearer voice.
     */
    VoiceChangerPreset[VoiceChangerPreset["VOICE_BEAUTY_CLEAR"] = 1048582] = "VOICE_BEAUTY_CLEAR";
    /**
     * A more resounding voice.
     */
    VoiceChangerPreset[VoiceChangerPreset["VOICE_BEAUTY_RESOUNDING"] = 1048583] = "VOICE_BEAUTY_RESOUNDING";
    /**
     * A more ringing voice.
     */
    VoiceChangerPreset[VoiceChangerPreset["VOICE_BEAUTY_RINGING"] = 1048584] = "VOICE_BEAUTY_RINGING";
    /**
     * A more spatially resonant voice.
     */
    VoiceChangerPreset[VoiceChangerPreset["VOICE_BEAUTY_SPACIAL"] = 1048585] = "VOICE_BEAUTY_SPACIAL";
    /**
     * (For male only) A more magnetic voice. Do not use it when the speaker is a female; otherwise, voice distortion occurs.
     */
    VoiceChangerPreset[VoiceChangerPreset["GENERAL_BEAUTY_VOICE_MALE_MAGNETIC"] = 2097153] = "GENERAL_BEAUTY_VOICE_MALE_MAGNETIC";
    /**
     * (For female only) A fresher voice. Do not use it when the speaker is a male; otherwise, voice distortion occurs.
     */
    VoiceChangerPreset[VoiceChangerPreset["GENERAL_BEAUTY_VOICE_FEMALE_FRESH"] = 2097154] = "GENERAL_BEAUTY_VOICE_FEMALE_FRESH";
    /**
     * (For female only) A more vital voice. Do not use it when the speaker is a male; otherwise, voice distortion occurs.
     */
    VoiceChangerPreset[VoiceChangerPreset["GENERAL_BEAUTY_VOICE_FEMALE_VITALITY"] = 2097155] = "GENERAL_BEAUTY_VOICE_FEMALE_VITALITY";
})(VoiceChangerPreset = exports.VoiceChangerPreset || (exports.VoiceChangerPreset = {}));
/** @deprecated Deprecated from v3.2.0.
 *
 *  Local voice reverberation presets.
 */
var AudioReverbPreset;
(function (AudioReverbPreset) {
    /**
     * Turn off local voice reverberation, that is, to use the original voice.
     */
    AudioReverbPreset[AudioReverbPreset["AUDIO_REVERB_OFF"] = 0] = "AUDIO_REVERB_OFF";
    /**
     * The reverberation style typical of a KTV venue (enhanced).
     */
    AudioReverbPreset[AudioReverbPreset["AUDIO_REVERB_FX_KTV"] = 1048577] = "AUDIO_REVERB_FX_KTV";
    /**
     * The reverberation style typical of a concert hall (enhanced).
     */
    AudioReverbPreset[AudioReverbPreset["AUDIO_REVERB_FX_VOCAL_CONCERT"] = 1048578] = "AUDIO_REVERB_FX_VOCAL_CONCERT";
    /**
     * The reverberation style typical of an uncle's voice.
     */
    AudioReverbPreset[AudioReverbPreset["AUDIO_REVERB_FX_UNCLE"] = 1048579] = "AUDIO_REVERB_FX_UNCLE";
    /**
     * The reverberation style typical of a little sister's voice.
     */
    AudioReverbPreset[AudioReverbPreset["AUDIO_REVERB_FX_SISTER"] = 1048580] = "AUDIO_REVERB_FX_SISTER";
    /**
     * The reverberation style typical of a recording studio (enhanced).
     */
    AudioReverbPreset[AudioReverbPreset["AUDIO_REVERB_FX_STUDIO"] = 1048581] = "AUDIO_REVERB_FX_STUDIO";
    /**
     * The reverberation style typical of popular music (enhanced).
     */
    AudioReverbPreset[AudioReverbPreset["AUDIO_REVERB_FX_POPULAR"] = 1048582] = "AUDIO_REVERB_FX_POPULAR";
    /**
     * The reverberation style typical of R&B music (enhanced).
     */
    AudioReverbPreset[AudioReverbPreset["AUDIO_REVERB_FX_RNB"] = 1048583] = "AUDIO_REVERB_FX_RNB";
    /**
     * The reverberation style typical of the vintage phonograph.
     */
    AudioReverbPreset[AudioReverbPreset["AUDIO_REVERB_FX_PHONOGRAPH"] = 1048584] = "AUDIO_REVERB_FX_PHONOGRAPH";
    /**
     * The reverberation style typical of popular music.
     */
    AudioReverbPreset[AudioReverbPreset["AUDIO_REVERB_POPULAR"] = 1] = "AUDIO_REVERB_POPULAR";
    /**
     * The reverberation style typical of R&B music.
     */
    AudioReverbPreset[AudioReverbPreset["AUDIO_REVERB_RNB"] = 2] = "AUDIO_REVERB_RNB";
    /**
     * The reverberation style typical of rock music.
     */
    AudioReverbPreset[AudioReverbPreset["AUDIO_REVERB_ROCK"] = 3] = "AUDIO_REVERB_ROCK";
    /**
     * The reverberation style typical of hip-hop music.
     */
    AudioReverbPreset[AudioReverbPreset["AUDIO_REVERB_HIPHOP"] = 4] = "AUDIO_REVERB_HIPHOP";
    /**
     * The reverberation style typical of a concert hall.
     */
    AudioReverbPreset[AudioReverbPreset["AUDIO_REVERB_VOCAL_CONCERT"] = 5] = "AUDIO_REVERB_VOCAL_CONCERT";
    /**
     * The reverberation style typical of a KTV venue.
     */
    AudioReverbPreset[AudioReverbPreset["AUDIO_REVERB_KTV"] = 6] = "AUDIO_REVERB_KTV";
    /**
     * The reverberation style typical of a recording studio.
     */
    AudioReverbPreset[AudioReverbPreset["AUDIO_REVERB_STUDIO"] = 7] = "AUDIO_REVERB_STUDIO";
    /**
     * The reverberation of the virtual stereo. The virtual stereo is an effect that renders the monophonic
     * audio as the stereo audio, so that all users in the channel can hear the stereo voice effect.
     * To achieve better virtual stereo reverberation, Agora recommends setting `profile` in `setAudioProfile`
     * as `5`.
     */
    AudioReverbPreset[AudioReverbPreset["AUDIO_VIRTUAL_STEREO"] = 2097153] = "AUDIO_VIRTUAL_STEREO";
})(AudioReverbPreset = exports.AudioReverbPreset || (exports.AudioReverbPreset = {}));
/** The brightness level of the video image captured by the local camera.
 *
 * @since v3.3.1
 */
var CAPTURE_BRIGHTNESS_LEVEL_TYPE;
(function (CAPTURE_BRIGHTNESS_LEVEL_TYPE) {
    /** -1: The SDK does not detect the brightness level of the video image.
     * Wait a few seconds to get the brightness level from
     * `CAPTURE_BRIGHTNESS_LEVEL_TYPE` in the next callback.
     */
    CAPTURE_BRIGHTNESS_LEVEL_TYPE[CAPTURE_BRIGHTNESS_LEVEL_TYPE["CAPTURE_BRIGHTNESS_LEVEL_INVALID"] = -1] = "CAPTURE_BRIGHTNESS_LEVEL_INVALID";
    /** 0: The brightness level of the video image is normal.
     */
    CAPTURE_BRIGHTNESS_LEVEL_TYPE[CAPTURE_BRIGHTNESS_LEVEL_TYPE["CAPTURE_BRIGHTNESS_LEVEL_NORMAL"] = 0] = "CAPTURE_BRIGHTNESS_LEVEL_NORMAL";
    /** 1: The brightness level of the video image is too bright.
     */
    CAPTURE_BRIGHTNESS_LEVEL_TYPE[CAPTURE_BRIGHTNESS_LEVEL_TYPE["CAPTURE_BRIGHTNESS_LEVEL_BRIGHT"] = 1] = "CAPTURE_BRIGHTNESS_LEVEL_BRIGHT";
    /** 2: The brightness level of the video image is too dark.
     */
    CAPTURE_BRIGHTNESS_LEVEL_TYPE[CAPTURE_BRIGHTNESS_LEVEL_TYPE["CAPTURE_BRIGHTNESS_LEVEL_DARK"] = 2] = "CAPTURE_BRIGHTNESS_LEVEL_DARK";
})(CAPTURE_BRIGHTNESS_LEVEL_TYPE = exports.CAPTURE_BRIGHTNESS_LEVEL_TYPE || (exports.CAPTURE_BRIGHTNESS_LEVEL_TYPE = {}));
/**
 * The priority of the remote user.
 */
var Priority;
(function (Priority) {
    /** 50: The user's priority is high. */
    Priority[Priority["PRIORITY_HIGH"] = 50] = "PRIORITY_HIGH";
    /** 100: (Default) The user's priority is normal. */
    Priority[Priority["PRIORITY_NORMAL"] = 100] = "PRIORITY_NORMAL";
})(Priority = exports.Priority || (exports.Priority = {}));
/** Quality change of the local video. */
var QualityAdaptIndication;
(function (QualityAdaptIndication) {
    /** 0: The quality of the local video stays the same. */
    QualityAdaptIndication[QualityAdaptIndication["ADAPT_NONE"] = 0] = "ADAPT_NONE";
    /** 1: The quality improves because the network bandwidth increases. */
    QualityAdaptIndication[QualityAdaptIndication["ADAPT_UP_BANDWIDTH"] = 1] = "ADAPT_UP_BANDWIDTH";
    /** 2: The quality worsens because the network bandwidth decreases. */
    QualityAdaptIndication[QualityAdaptIndication["ADAPT_DOWN_BANDWIDTH"] = 2] = "ADAPT_DOWN_BANDWIDTH";
})(QualityAdaptIndication = exports.QualityAdaptIndication || (exports.QualityAdaptIndication = {}));
/**
 * The type of video mirror mode.
 */
var VideoMirrorModeType;
(function (VideoMirrorModeType) {
    /**
     * `0`: (Default) The SDK determines whether enable the mirror mode.
     */
    VideoMirrorModeType[VideoMirrorModeType["AUTO"] = 0] = "AUTO";
    /**
     * `1`: Enable mirror mode.
     */
    VideoMirrorModeType[VideoMirrorModeType["ENABLED"] = 1] = "ENABLED";
    /**
     * `2`: Disable mirror mode.
     */
    VideoMirrorModeType[VideoMirrorModeType["DISABLED"] = 2] = "DISABLED";
})(VideoMirrorModeType = exports.VideoMirrorModeType || (exports.VideoMirrorModeType = {}));
/** The video encoding degradation preference under limited bandwidth. */
var DegradationPreference;
(function (DegradationPreference) {
    /** 0: (Default) Degrade the frame rate in order to maintain the video
     * quality.
     */
    DegradationPreference[DegradationPreference["MAINTAIN_QUALITY"] = 0] = "MAINTAIN_QUALITY";
    /** 1: Degrade the video quality in order to maintain the frame rate. */
    DegradationPreference[DegradationPreference["MAINTAIN_FRAMERATE"] = 1] = "MAINTAIN_FRAMERATE";
    /** 2: (For future use) Maintain a balance between the frame rate and video
     * quality.
     */
    DegradationPreference[DegradationPreference["MAINTAIN_BALANCED"] = 2] = "MAINTAIN_BALANCED";
})(DegradationPreference = exports.DegradationPreference || (exports.DegradationPreference = {}));
/** The orientation mode. */
var OrientationMode;
(function (OrientationMode) {
    /**
     * 0: (Default) The output video always follows the orientation of the
     * captured video, because the receiver takes the rotational information
     * passed on from the video encoder.
     *
     * Mainly used between Agora SDK.
     * - If the captured video is in landscape mode, the output video is in
     * landscape mode.
     * - If the captured video is in portrait mode, the output video is in
     * portrait mode.
     */
    OrientationMode[OrientationMode["ORIENTATION_MODE_ADAPTIVE"] = 0] = "ORIENTATION_MODE_ADAPTIVE";
    /**
     * 1: The output video is always in landscape mode.
     *
     * If the captured video is
     * in portrait mode, the video encoder crops it to fit the output. Applies to
     * situations where the receiving end cannot process the rotational
     * information.
     *
     * For example, CDN live streaming.
     */
    OrientationMode[OrientationMode["ORIENTATION_MODE_FIXED_LANDSCAPE"] = 1] = "ORIENTATION_MODE_FIXED_LANDSCAPE";
    /**
     * 2: The output video is always in portrait mode.
     *
     * If the captured video is in landscape mode, the video encoder crops it to
     * fit the output. Applies to situations where the receiving end cannot process
     * the rotational information.
     *
     * For example, CDN live streaming.
     */
    OrientationMode[OrientationMode["ORIENTATION_MODE_FIXED_PORTRAIT"] = 2] = "ORIENTATION_MODE_FIXED_PORTRAIT";
})(OrientationMode = exports.OrientationMode || (exports.OrientationMode = {}));
/** Sets the camera capturer preference. */
var CaptureOutPreference;
(function (CaptureOutPreference) {
    /** 0: (Default) self-adapts the camera output parameters to the system
     * performance and network conditions to balance CPU consumption and video
     * preview quality.
     */
    CaptureOutPreference[CaptureOutPreference["CAPTURER_OUTPUT_PREFERENCE_AUTO"] = 0] = "CAPTURER_OUTPUT_PREFERENCE_AUTO";
    /** 1: Prioritizes the system performance.
     *
     * The SDK chooses the dimension
     * and frame rate of the local camera capture closest to those set
     * by the {@link setVideoEncoderConfiguration} method.
     */
    CaptureOutPreference[CaptureOutPreference["CAPTURER_OUTPUT_PREFERENCE_PERFORMANCE"] = 1] = "CAPTURER_OUTPUT_PREFERENCE_PERFORMANCE";
    /** 2: Prioritizes the local preview quality.
     *
     * The SDK chooses higher camera output parameters to improve the local
     * video preview quality. This option requires extra CPU and RAM usage for
     * video pre-processing.
     */
    CaptureOutPreference[CaptureOutPreference["CAPTURER_OUTPUT_PREFERENCE_PREVIEW"] = 2] = "CAPTURER_OUTPUT_PREFERENCE_PREVIEW";
    /** 3: Allows you to customize the width and height of the video image
     * captured by the local camera.
     *
     * @since v3.3.1
     */
    CaptureOutPreference[CaptureOutPreference["CAPTURER_OUTPUT_PREFERENCE_MANUAL"] = 3] = "CAPTURER_OUTPUT_PREFERENCE_MANUAL";
})(CaptureOutPreference = exports.CaptureOutPreference || (exports.CaptureOutPreference = {}));
/**
 * Content hints for screen sharing.
 */
var VideoContentHint;
(function (VideoContentHint) {
    /**
     * 0: (Default) No content hint.
     */
    VideoContentHint[VideoContentHint["CONTENT_HINT_NONE"] = 0] = "CONTENT_HINT_NONE";
    /**
     * 1: Motion-intensive content.
     *
     * Choose this option if you prefer smoothness or when you are sharing a
     * video clip, movie, or video game.
     */
    VideoContentHint[VideoContentHint["CONTENT_HINT_MOTION"] = 1] = "CONTENT_HINT_MOTION";
    /**
     * 2: Motionless content.
     *
     * Choose this option if you prefer sharpness or when you are sharing a
     * picture, PowerPoint slide, or text.
     */
    VideoContentHint[VideoContentHint["CONTENT_HINT_DETAILS"] = 2] = "CONTENT_HINT_DETAILS";
})(VideoContentHint = exports.VideoContentHint || (exports.VideoContentHint = {}));
/** Encryption mode.
 */
var ENCRYPTION_MODE;
(function (ENCRYPTION_MODE) {
    /** 1: (Default) 128-bit AES encryption, XTS mode.
     */
    ENCRYPTION_MODE[ENCRYPTION_MODE["AES_128_XTS"] = 1] = "AES_128_XTS";
    /** 2: 128-bit AES encryption, ECB mode.
     */
    ENCRYPTION_MODE[ENCRYPTION_MODE["AES_128_ECB"] = 2] = "AES_128_ECB";
    /** 3: 256-bit AES encryption, XTS mode.
     */
    ENCRYPTION_MODE[ENCRYPTION_MODE["AES_256_XTS"] = 3] = "AES_256_XTS";
    /** 4: Reserved property.
     */
    ENCRYPTION_MODE[ENCRYPTION_MODE["SM4_128_ECB"] = 4] = "SM4_128_ECB";
    /** 5: 128-bit AES encryption, GCM mode.
     *
     * @since v3.3.1
     */
    ENCRYPTION_MODE[ENCRYPTION_MODE["AES_128_GCM"] = 5] = "AES_128_GCM";
    /** 6: 256-bit AES encryption, GCM mode.
     *
     * @since v3.3.1
     */
    ENCRYPTION_MODE[ENCRYPTION_MODE["AES_256_GCM"] = 6] = "AES_256_GCM";
})(ENCRYPTION_MODE = exports.ENCRYPTION_MODE || (exports.ENCRYPTION_MODE = {}));
;
;
/**
 * @deprecated Video profile.
 */
var VIDEO_PROFILE_TYPE;
(function (VIDEO_PROFILE_TYPE) {
    /** 0: 160 &times; 120, frame rate 15 fps, bitrate 65 Kbps. */
    VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_LANDSCAPE_120P"] = 0] = "VIDEO_PROFILE_LANDSCAPE_120P";
    /** 2: 120 &times; 120, frame rate 15 fps, bitrate 50 Kbps. */
    VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_LANDSCAPE_120P_3"] = 2] = "VIDEO_PROFILE_LANDSCAPE_120P_3";
    /** 10: 320&times;180, frame rate 15 fps, bitrate 140 Kbps. */
    VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_LANDSCAPE_180P"] = 10] = "VIDEO_PROFILE_LANDSCAPE_180P";
    /** 12: 180 &times; 180, frame rate 15 fps, bitrate 100 Kbps. */
    VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_LANDSCAPE_180P_3"] = 12] = "VIDEO_PROFILE_LANDSCAPE_180P_3";
    /** 13: 240 &times; 180, frame rate 15 fps, bitrate 120 Kbps. */
    VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_LANDSCAPE_180P_4"] = 13] = "VIDEO_PROFILE_LANDSCAPE_180P_4";
    /** 20: 320 &times; 240, frame rate 15 fps, bitrate 200 Kbps. */
    VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_LANDSCAPE_240P"] = 20] = "VIDEO_PROFILE_LANDSCAPE_240P";
    /** 22: 240 &times; 240, frame rate 15 fps, bitrate 140 Kbps. */
    VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_LANDSCAPE_240P_3"] = 22] = "VIDEO_PROFILE_LANDSCAPE_240P_3";
    /** 23: 424 &times; 240, frame rate 15 fps, bitrate 220 Kbps. */
    VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_LANDSCAPE_240P_4"] = 23] = "VIDEO_PROFILE_LANDSCAPE_240P_4";
    /** 30: 640 &times; 360, frame rate 15 fps, bitrate 400 Kbps. */
    VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_LANDSCAPE_360P"] = 30] = "VIDEO_PROFILE_LANDSCAPE_360P";
    /** 32: 360 &times; 360, frame rate 15 fps, bitrate 260 Kbps. */
    VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_LANDSCAPE_360P_3"] = 32] = "VIDEO_PROFILE_LANDSCAPE_360P_3";
    /** 33: 640 &times; 360, frame rate 30 fps, bitrate 600 Kbps. */
    VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_LANDSCAPE_360P_4"] = 33] = "VIDEO_PROFILE_LANDSCAPE_360P_4";
    /** 35: 360 &times; 360, frame rate 30 fps, bitrate 400 Kbps. */
    VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_LANDSCAPE_360P_6"] = 35] = "VIDEO_PROFILE_LANDSCAPE_360P_6";
    /** 36: 480 &times; 360, frame rate 15 fps, bitrate 320 Kbps. */
    VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_LANDSCAPE_360P_7"] = 36] = "VIDEO_PROFILE_LANDSCAPE_360P_7";
    /** 37: 480 &times; 360, frame rate 30 fps, bitrate 490 Kbps. */
    VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_LANDSCAPE_360P_8"] = 37] = "VIDEO_PROFILE_LANDSCAPE_360P_8";
    /** 38: 640 &times; 360, frame rate 15 fps, bitrate 800 Kbps.
     * **Note**: `1` (live streaming) profile only.
     */
    VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_LANDSCAPE_360P_9"] = 38] = "VIDEO_PROFILE_LANDSCAPE_360P_9";
    /** 39: 640 &times; 360, frame rate 24 fps, bitrate 800 Kbps.
     * **Note**: `1` (live streaming) profile only.
     */
    VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_LANDSCAPE_360P_10"] = 39] = "VIDEO_PROFILE_LANDSCAPE_360P_10";
    /** 100: 640 &times; 360, frame rate 24 fps, bitrate 1000 Kbps.
     * **Note**: `1` (live streaming) profile only.
     */
    VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_LANDSCAPE_360P_11"] = 100] = "VIDEO_PROFILE_LANDSCAPE_360P_11";
    /** 40: 640 &times; 480, frame rate 15 fps, bitrate 500 Kbps. */
    VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_LANDSCAPE_480P"] = 40] = "VIDEO_PROFILE_LANDSCAPE_480P";
    /** 42: 480 &times; 480, frame rate 15 fps, bitrate 400 Kbps. */
    VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_LANDSCAPE_480P_3"] = 42] = "VIDEO_PROFILE_LANDSCAPE_480P_3";
    /** 43: 640 &times; 480, frame rate 30 fps, bitrate 750 Kbps. */
    VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_LANDSCAPE_480P_4"] = 43] = "VIDEO_PROFILE_LANDSCAPE_480P_4";
    /** 45: 480 &times; 480, frame rate 30 fps, bitrate 600 Kbps. */
    VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_LANDSCAPE_480P_6"] = 45] = "VIDEO_PROFILE_LANDSCAPE_480P_6";
    /** 47: 848 &times; 480, frame rate 15 fps, bitrate 610 Kbps. */
    VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_LANDSCAPE_480P_8"] = 47] = "VIDEO_PROFILE_LANDSCAPE_480P_8";
    /** 48: 848 &times; 480, frame rate 30 fps, bitrate 930 Kbps. */
    VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_LANDSCAPE_480P_9"] = 48] = "VIDEO_PROFILE_LANDSCAPE_480P_9";
    /** 49: 640 &times; 480, frame rate 10 fps, bitrate 400 Kbps. */
    VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_LANDSCAPE_480P_10"] = 49] = "VIDEO_PROFILE_LANDSCAPE_480P_10";
    /** 50: 1280 &times; 720, frame rate 15 fps, bitrate 1130 Kbps. */
    VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_LANDSCAPE_720P"] = 50] = "VIDEO_PROFILE_LANDSCAPE_720P";
    /** 52: 1280 &times; 720, frame rate 30 fps, bitrate 1710 Kbps. */
    VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_LANDSCAPE_720P_3"] = 52] = "VIDEO_PROFILE_LANDSCAPE_720P_3";
    /** 54: 960 &times; 720, frame rate 15 fps, bitrate 910 Kbps. */
    VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_LANDSCAPE_720P_5"] = 54] = "VIDEO_PROFILE_LANDSCAPE_720P_5";
    /** 55: 960 &times; 720, frame rate 30 fps, bitrate 1380 Kbps. */
    VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_LANDSCAPE_720P_6"] = 55] = "VIDEO_PROFILE_LANDSCAPE_720P_6";
    /** 60: 1920 &times; 1080, frame rate 15 fps, bitrate 2080 Kbps. */
    VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_LANDSCAPE_1080P"] = 60] = "VIDEO_PROFILE_LANDSCAPE_1080P";
    /** 62: 1920 &times; 1080, frame rate 30 fps, bitrate 3150 Kbps. */
    VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_LANDSCAPE_1080P_3"] = 62] = "VIDEO_PROFILE_LANDSCAPE_1080P_3";
    /** 64: 1920 &times; 1080, frame rate 60 fps, bitrate 4780 Kbps. */
    VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_LANDSCAPE_1080P_5"] = 64] = "VIDEO_PROFILE_LANDSCAPE_1080P_5";
    /** 66: 2560 &times; 1440, frame rate 30 fps, bitrate 4850 Kbps. */
    VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_LANDSCAPE_1440P"] = 66] = "VIDEO_PROFILE_LANDSCAPE_1440P";
    /** 67: 2560 &times; 1440, frame rate 60 fps, bitrate 6500 Kbps. */
    VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_LANDSCAPE_1440P_2"] = 67] = "VIDEO_PROFILE_LANDSCAPE_1440P_2";
    /** 70: 3840 &times; 2160, frame rate 30 fps, bitrate 6500 Kbps. */
    VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_LANDSCAPE_4K"] = 70] = "VIDEO_PROFILE_LANDSCAPE_4K";
    /** 72: 3840 &times; 2160, frame rate 60 fps, bitrate 6500 Kbps. */
    VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_LANDSCAPE_4K_3"] = 72] = "VIDEO_PROFILE_LANDSCAPE_4K_3";
    /** 1000: 120 &times; 160, frame rate 15 fps, bitrate 65 Kbps. */
    VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_PORTRAIT_120P"] = 1000] = "VIDEO_PROFILE_PORTRAIT_120P";
    /** 1002: 120 &times; 120, frame rate 15 fps, bitrate 50 Kbps. */
    VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_PORTRAIT_120P_3"] = 1002] = "VIDEO_PROFILE_PORTRAIT_120P_3";
    /** 1010: 180 &times; 320, frame rate 15 fps, bitrate 140 Kbps. */
    VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_PORTRAIT_180P"] = 1010] = "VIDEO_PROFILE_PORTRAIT_180P";
    /** 1012: 180 &times; 180, frame rate 15 fps, bitrate 100 Kbps. */
    VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_PORTRAIT_180P_3"] = 1012] = "VIDEO_PROFILE_PORTRAIT_180P_3";
    /** 1013: 180 &times; 240, frame rate 15 fps, bitrate 120 Kbps. */
    VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_PORTRAIT_180P_4"] = 1013] = "VIDEO_PROFILE_PORTRAIT_180P_4";
    /** 1020: 240 &times; 320, frame rate 15 fps, bitrate 200 Kbps. */
    VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_PORTRAIT_240P"] = 1020] = "VIDEO_PROFILE_PORTRAIT_240P";
    /** 1022: 240 &times; 240, frame rate 15 fps, bitrate 140 Kbps. */
    VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_PORTRAIT_240P_3"] = 1022] = "VIDEO_PROFILE_PORTRAIT_240P_3";
    /** 1023: 240 &times; 424, frame rate 15 fps, bitrate 220 Kbps. */
    VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_PORTRAIT_240P_4"] = 1023] = "VIDEO_PROFILE_PORTRAIT_240P_4";
    /** 1030: 360 &times; 640, frame rate 15 fps, bitrate 400 Kbps. */
    VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_PORTRAIT_360P"] = 1030] = "VIDEO_PROFILE_PORTRAIT_360P";
    /** 1032: 360 &times; 360, frame rate 15 fps, bitrate 260 Kbps. */
    VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_PORTRAIT_360P_3"] = 1032] = "VIDEO_PROFILE_PORTRAIT_360P_3";
    /** 1033: 360 &times; 640, frame rate 30 fps, bitrate 600 Kbps. */
    VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_PORTRAIT_360P_4"] = 1033] = "VIDEO_PROFILE_PORTRAIT_360P_4";
    /** 1035: 360 &times; 360, frame rate 30 fps, bitrate 400 Kbps. */
    VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_PORTRAIT_360P_6"] = 1035] = "VIDEO_PROFILE_PORTRAIT_360P_6";
    /** 1036: 360 &times; 480, frame rate 15 fps, bitrate 320 Kbps. */
    VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_PORTRAIT_360P_7"] = 1036] = "VIDEO_PROFILE_PORTRAIT_360P_7";
    /** 1037: 360 &times; 480, frame rate 30 fps, bitrate 490 Kbps. */
    VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_PORTRAIT_360P_8"] = 1037] = "VIDEO_PROFILE_PORTRAIT_360P_8";
    /** 1038: 360 &times; 640, frame rate 15 fps, bitrate 800 Kbps.
     * **Note**: `1` (live streaming) profile only.
     */
    VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_PORTRAIT_360P_9"] = 1038] = "VIDEO_PROFILE_PORTRAIT_360P_9";
    /** 1039: 360 &times; 640, frame rate 24 fps, bitrate 800 Kbps.
     * **Note**: `1` (live streaming) profile only.
     */
    VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_PORTRAIT_360P_10"] = 1039] = "VIDEO_PROFILE_PORTRAIT_360P_10";
    /** 1100: 360 &times; 640, frame rate 24 fps, bitrate 1000 Kbps.
     * **Note**: `1` (live streaming) profile only.
     */
    VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_PORTRAIT_360P_11"] = 1100] = "VIDEO_PROFILE_PORTRAIT_360P_11";
    /** 1040: 480 &times; 640, frame rate 15 fps, bitrate 500 Kbps. */
    VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_PORTRAIT_480P"] = 1040] = "VIDEO_PROFILE_PORTRAIT_480P";
    /** 1042: 480 &times; 480, frame rate 15 fps, bitrate 400 Kbps. */
    VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_PORTRAIT_480P_3"] = 1042] = "VIDEO_PROFILE_PORTRAIT_480P_3";
    /** 1043: 480 &times; 640, frame rate 30 fps, bitrate 750 Kbps. */
    VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_PORTRAIT_480P_4"] = 1043] = "VIDEO_PROFILE_PORTRAIT_480P_4";
    /** 1045: 480 &times; 480, frame rate 30 fps, bitrate 600 Kbps. */
    VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_PORTRAIT_480P_6"] = 1045] = "VIDEO_PROFILE_PORTRAIT_480P_6";
    /** 1047: 480 &times; 848, frame rate 15 fps, bitrate 610 Kbps. */
    VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_PORTRAIT_480P_8"] = 1047] = "VIDEO_PROFILE_PORTRAIT_480P_8";
    /** 1048: 480 &times; 848, frame rate 30 fps, bitrate 930 Kbps. */
    VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_PORTRAIT_480P_9"] = 1048] = "VIDEO_PROFILE_PORTRAIT_480P_9";
    /** 1049: 480 &times; 640, frame rate 10 fps, bitrate 400 Kbps. */
    VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_PORTRAIT_480P_10"] = 1049] = "VIDEO_PROFILE_PORTRAIT_480P_10";
    /** 1050: 720 &times; 1280, frame rate 15 fps, bitrate 1130 Kbps. */
    VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_PORTRAIT_720P"] = 1050] = "VIDEO_PROFILE_PORTRAIT_720P";
    /** 1052: 720 &times; 1280, frame rate 30 fps, bitrate 1710 Kbps. */
    VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_PORTRAIT_720P_3"] = 1052] = "VIDEO_PROFILE_PORTRAIT_720P_3";
    /** 1054: 720 &times; 960, frame rate 15 fps, bitrate 910 Kbps. */
    VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_PORTRAIT_720P_5"] = 1054] = "VIDEO_PROFILE_PORTRAIT_720P_5";
    /** 1055: 720 &times; 960, frame rate 30 fps, bitrate 1380 Kbps. */
    VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_PORTRAIT_720P_6"] = 1055] = "VIDEO_PROFILE_PORTRAIT_720P_6";
    /** 1060: 1080 &times; 1920, frame rate 15 fps, bitrate 2080 Kbps. */
    VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_PORTRAIT_1080P"] = 1060] = "VIDEO_PROFILE_PORTRAIT_1080P";
    /** 1062: 1080 &times; 1920, frame rate 30 fps, bitrate 3150 Kbps. */
    VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_PORTRAIT_1080P_3"] = 1062] = "VIDEO_PROFILE_PORTRAIT_1080P_3";
    /** 1064: 1080 &times; 1920, frame rate 60 fps, bitrate 4780 Kbps. */
    VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_PORTRAIT_1080P_5"] = 1064] = "VIDEO_PROFILE_PORTRAIT_1080P_5";
    /** 1066: 1440 &times; 2560, frame rate 30 fps, bitrate 4850 Kbps. */
    VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_PORTRAIT_1440P"] = 1066] = "VIDEO_PROFILE_PORTRAIT_1440P";
    /** 1067: 1440 &times; 2560, frame rate 60 fps, bitrate 6500 Kbps. */
    VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_PORTRAIT_1440P_2"] = 1067] = "VIDEO_PROFILE_PORTRAIT_1440P_2";
    /** 1070: 2160 &times; 3840, frame rate 30 fps, bitrate 6500 Kbps. */
    VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_PORTRAIT_4K"] = 1070] = "VIDEO_PROFILE_PORTRAIT_4K";
    /** 1072: 2160 &times; 3840, frame rate 60 fps, bitrate 6500 Kbps. */
    VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_PORTRAIT_4K_3"] = 1072] = "VIDEO_PROFILE_PORTRAIT_4K_3";
    /** Default 640 &times; 360, frame rate 15 fps, bitrate 400 Kbps. */
    VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_DEFAULT"] = 30] = "VIDEO_PROFILE_DEFAULT";
})(VIDEO_PROFILE_TYPE = exports.VIDEO_PROFILE_TYPE || (exports.VIDEO_PROFILE_TYPE = {}));
/** Events during the RTMP or RTMPS streaming.
 *
 * @since v3.2.0
 */
var RTMP_STREAMING_EVENT;
(function (RTMP_STREAMING_EVENT) {
    /** An error occurs when you add a background image or a watermark image to the RTMP or RTMPS stream.
     *
     * @since v3.2.0
     */
    RTMP_STREAMING_EVENT[RTMP_STREAMING_EVENT["RTMP_STREAMING_EVENT_FAILED_LOAD_IMAGE"] = 1] = "RTMP_STREAMING_EVENT_FAILED_LOAD_IMAGE";
})(RTMP_STREAMING_EVENT = exports.RTMP_STREAMING_EVENT || (exports.RTMP_STREAMING_EVENT = {}));
;
/** The options for SDK preset audio effects.
 *
 * @since v3.2.0
 */
var AUDIO_EFFECT_PRESET;
(function (AUDIO_EFFECT_PRESET) {
    /** Turn off audio effects and use the original voice.
     */
    AUDIO_EFFECT_PRESET[AUDIO_EFFECT_PRESET["AUDIO_EFFECT_OFF"] = 0] = "AUDIO_EFFECT_OFF";
    /** An audio effect typical of a KTV venue.
     *
     * @note To achieve better audio effect quality, Agora recommends
     * calling {@link setAudioProfile}
     * and setting the `profile` parameter to `4` or `5`
     * before setting this enumerator.
     */
    AUDIO_EFFECT_PRESET[AUDIO_EFFECT_PRESET["ROOM_ACOUSTICS_KTV"] = 33620224] = "ROOM_ACOUSTICS_KTV";
    /** An audio effect typical of a concert hall.
     *
     * @note To achieve better audio effect quality, Agora recommends
     * calling {@link setAudioProfile}
     * and setting the `profile` parameter to `4` or `5`
     * before setting this enumerator.
     */
    AUDIO_EFFECT_PRESET[AUDIO_EFFECT_PRESET["ROOM_ACOUSTICS_VOCAL_CONCERT"] = 33620480] = "ROOM_ACOUSTICS_VOCAL_CONCERT";
    /** An audio effect typical of a recording studio.
     *
     * @note To achieve better audio effect quality, Agora recommends
     * calling {@link setAudioProfile}
     * and setting the `profile` parameter to `4` or `5`
     * before setting this enumerator.
     */
    AUDIO_EFFECT_PRESET[AUDIO_EFFECT_PRESET["ROOM_ACOUSTICS_STUDIO"] = 33620736] = "ROOM_ACOUSTICS_STUDIO";
    /** An audio effect typical of a vintage phonograph.
     *
     * @note To achieve better audio effect quality, Agora recommends
     * calling {@link setAudioProfile}
     * and setting the `profile` parameter to `4` or `5`
     * before setting this enumerator.
     */
    AUDIO_EFFECT_PRESET[AUDIO_EFFECT_PRESET["ROOM_ACOUSTICS_PHONOGRAPH"] = 33620992] = "ROOM_ACOUSTICS_PHONOGRAPH";
    /** A virtual stereo effect that renders monophonic audio as stereo audio.
     *
     * @note Call {@link setAudioProfile} and set the `profile` parameter to
     * `3` or `5` before setting this
     * enumerator; otherwise, the enumerator setting does not take effect.
     */
    AUDIO_EFFECT_PRESET[AUDIO_EFFECT_PRESET["ROOM_ACOUSTICS_VIRTUAL_STEREO"] = 33621248] = "ROOM_ACOUSTICS_VIRTUAL_STEREO";
    /** A more spatial audio effect.
     *
     * @note To achieve better audio effect quality, Agora recommends
     * calling {@link setAudioProfile}
     * and setting the `profile` parameter to `4` or `5`
     * before setting this enumerator.
     */
    AUDIO_EFFECT_PRESET[AUDIO_EFFECT_PRESET["ROOM_ACOUSTICS_SPACIAL"] = 33621504] = "ROOM_ACOUSTICS_SPACIAL";
    /** A more ethereal audio effect.
     *
     * @note To achieve better audio effect quality, Agora recommends
     * calling {@link setAudioProfile}
     * and setting the `profile` parameter to `4` or `5`
     * before setting this enumerator.
     */
    AUDIO_EFFECT_PRESET[AUDIO_EFFECT_PRESET["ROOM_ACOUSTICS_ETHEREAL"] = 33621760] = "ROOM_ACOUSTICS_ETHEREAL";
    /** A 3D voice effect that makes the voice appear to be moving around
     * the user. The default cycle period of the 3D
     * voice effect is 10 seconds. To change the cycle period,
     * call {@link setAudioEffectParameters}
     * after this method.
     *
     * @note
     * - Call {@link setAudioProfile} and set the `profile` parameter to `3`
     * or `5` before setting this enumerator; otherwise, the enumerator
     * setting does not take effect.
     * - If the 3D voice effect is enabled, users need to use stereo audio
     * playback devices to hear the anticipated voice effect.
     */
    AUDIO_EFFECT_PRESET[AUDIO_EFFECT_PRESET["ROOM_ACOUSTICS_3D_VOICE"] = 33622016] = "ROOM_ACOUSTICS_3D_VOICE";
    /** The voice of an uncle.
     *
     * @note
     * - Agora recommends using this enumerator to process a male-sounding
     * voice; otherwise, you may not hear the anticipated voice effect.
     * - To achieve better audio effect quality, Agora recommends
     * calling {@link setAudioProfile}
     * and setting the `profile` parameter to `4` or `5`
     * before setting this enumerator.
     */
    AUDIO_EFFECT_PRESET[AUDIO_EFFECT_PRESET["VOICE_CHANGER_EFFECT_UNCLE"] = 33685760] = "VOICE_CHANGER_EFFECT_UNCLE";
    /** The voice of an old man.
     *
     * @note
     * - Agora recommends using this enumerator to process a male-sounding
     * voice; otherwise, you may not hear the anticipated voice effect.
     * - To achieve better audio effect quality, Agora recommends
     * calling {@link setAudioProfile}
     * and setting the `profile` parameter to `4` or `5`
     * before setting this enumerator.
     */
    AUDIO_EFFECT_PRESET[AUDIO_EFFECT_PRESET["VOICE_CHANGER_EFFECT_OLDMAN"] = 33686016] = "VOICE_CHANGER_EFFECT_OLDMAN";
    /** The voice of a boy.
     *
     * @note
     * - Agora recommends using this enumerator to process a male-sounding
     * voice; otherwise, you may not hear the anticipated voice effect.
     * - To achieve better audio effect quality, Agora recommends
     * calling {@link setAudioProfile}
     * and setting the `profile` parameter to `4` or `5`
     * before setting this enumerator.
     */
    AUDIO_EFFECT_PRESET[AUDIO_EFFECT_PRESET["VOICE_CHANGER_EFFECT_BOY"] = 33686272] = "VOICE_CHANGER_EFFECT_BOY";
    /** The voice of a young woman.
     *
     * @note
     * - Agora recommends using this enumerator to process a female-sounding
     * voice; otherwise, you may not hear the anticipated voice effect.
     * - To achieve better audio effect quality, Agora recommends
     * calling {@link setAudioProfile}
     * and setting the `profile` parameter to `4` or `5`
     * before setting this enumerator.
     */
    AUDIO_EFFECT_PRESET[AUDIO_EFFECT_PRESET["VOICE_CHANGER_EFFECT_SISTER"] = 33686528] = "VOICE_CHANGER_EFFECT_SISTER";
    /** The voice of a girl.
     *
     * @note
     * - Agora recommends using this enumerator to process a female-sounding
     * voice; otherwise, you may not hear the anticipated voice effect.
     * - To achieve better audio effect quality, Agora recommends
     * calling {@link setAudioProfile}
     * and setting the `profile` parameter to `4` or `5`
     * before setting this enumerator.
     */
    AUDIO_EFFECT_PRESET[AUDIO_EFFECT_PRESET["VOICE_CHANGER_EFFECT_GIRL"] = 33686784] = "VOICE_CHANGER_EFFECT_GIRL";
    /** The voice of Pig King, a character in Journey to the West who has a
     * voice like a growling bear.
     *
     * @note To achieve better audio effect quality, Agora recommends
     * calling {@link setAudioProfile}
     * and setting the `profile` parameter to `4` or `5`
     * before setting this enumerator.
     */
    AUDIO_EFFECT_PRESET[AUDIO_EFFECT_PRESET["VOICE_CHANGER_EFFECT_PIGKING"] = 33687040] = "VOICE_CHANGER_EFFECT_PIGKING";
    /** The voice of Hulk.
     *
     * @note To achieve better audio effect quality, Agora recommends
     * calling {@link setAudioProfile}
     * and setting the `profile` parameter to `4` or `5`
     * before setting this enumerator.
     */
    AUDIO_EFFECT_PRESET[AUDIO_EFFECT_PRESET["VOICE_CHANGER_EFFECT_HULK"] = 33687296] = "VOICE_CHANGER_EFFECT_HULK";
    /** An audio effect typical of R&B music.
     *
     * @note Call {@link setAudioProfile} and set the `profile` parameter
     * to `4` or `5` before setting this enumerator; otherwise, the enumerator
     * setting does not take effect.
     */
    AUDIO_EFFECT_PRESET[AUDIO_EFFECT_PRESET["STYLE_TRANSFORMATION_RNB"] = 33751296] = "STYLE_TRANSFORMATION_RNB";
    /** An audio effect typical of popular music.
     *
     * @note Call {@link setAudioProfile} and set the `profile` parameter
     * to `4` or `5` before setting this enumerator; otherwise, the enumerator
     * setting does not take effect.
     */
    AUDIO_EFFECT_PRESET[AUDIO_EFFECT_PRESET["STYLE_TRANSFORMATION_POPULAR"] = 33751552] = "STYLE_TRANSFORMATION_POPULAR";
    /** A pitch correction effect that corrects the user's pitch based on
     * the pitch of the natural C major scale.
     * To change the basic mode and tonic pitch,
     * call {@link setAudioEffectParameters} after this method.
     *
     * @note To achieve better audio effect quality, Agora recommends
     * calling {@link setAudioProfile}
     * and setting the `profile` parameter to `4` or `5`
     * before setting this enumerator.
     */
    AUDIO_EFFECT_PRESET[AUDIO_EFFECT_PRESET["PITCH_CORRECTION"] = 33816832] = "PITCH_CORRECTION";
})(AUDIO_EFFECT_PRESET = exports.AUDIO_EFFECT_PRESET || (exports.AUDIO_EFFECT_PRESET = {}));
;
/** The options for SDK preset voice beautifier effects.
 */
var VOICE_BEAUTIFIER_PRESET;
(function (VOICE_BEAUTIFIER_PRESET) {
    /** Turn off voice beautifier effects and use the original voice.
     */
    VOICE_BEAUTIFIER_PRESET[VOICE_BEAUTIFIER_PRESET["VOICE_BEAUTIFIER_OFF"] = 0] = "VOICE_BEAUTIFIER_OFF";
    /** A more magnetic voice.
     *
     * @note Agora recommends using this enumerator to process a male-sounding
     * voice; otherwise, you may experience vocal distortion.
     */
    VOICE_BEAUTIFIER_PRESET[VOICE_BEAUTIFIER_PRESET["CHAT_BEAUTIFIER_MAGNETIC"] = 16843008] = "CHAT_BEAUTIFIER_MAGNETIC";
    /** A fresher voice.
     *
     * @note Agora recommends using this enumerator to process a
     * female-sounding voice; otherwise, you may experience vocal distortion.
     */
    VOICE_BEAUTIFIER_PRESET[VOICE_BEAUTIFIER_PRESET["CHAT_BEAUTIFIER_FRESH"] = 16843264] = "CHAT_BEAUTIFIER_FRESH";
    /** A more vital voice.
     *
     * @note Agora recommends using this enumerator to process a
     * female-sounding voice; otherwise, you may experience vocal distortion.
     */
    VOICE_BEAUTIFIER_PRESET[VOICE_BEAUTIFIER_PRESET["CHAT_BEAUTIFIER_VITALITY"] = 16843520] = "CHAT_BEAUTIFIER_VITALITY";
    /**
     * @since v3.3.1
     *
     * Singing beautifier effect.
     * - If you call {@link setVoiceBeautifierPreset}(SINGING_BEAUTIFIER),
     * you can beautify a male-sounding voice and add a reverberation
     * effect that sounds like singing in a small room. Agora recommends not
     * using {@link setVoiceBeautifierPreset}(SINGING_BEAUTIFIER)
     * to process a female-sounding voice; otherwise, you may experience vocal
     * distortion.
     * - If you call {@link setVoiceBeautifierParameters}(SINGING_BEAUTIFIER,
     * param1, param2), you can beautify a male- or female-sounding voice and
     * add a reverberation effect.
     */
    VOICE_BEAUTIFIER_PRESET[VOICE_BEAUTIFIER_PRESET["SINGING_BEAUTIFIER"] = 16908544] = "SINGING_BEAUTIFIER";
    /** A more vigorous voice.
     */
    VOICE_BEAUTIFIER_PRESET[VOICE_BEAUTIFIER_PRESET["TIMBRE_TRANSFORMATION_VIGOROUS"] = 16974080] = "TIMBRE_TRANSFORMATION_VIGOROUS";
    /** A deeper voice.
     */
    VOICE_BEAUTIFIER_PRESET[VOICE_BEAUTIFIER_PRESET["TIMBRE_TRANSFORMATION_DEEP"] = 16974336] = "TIMBRE_TRANSFORMATION_DEEP";
    /** A mellower voice.
     */
    VOICE_BEAUTIFIER_PRESET[VOICE_BEAUTIFIER_PRESET["TIMBRE_TRANSFORMATION_MELLOW"] = 16974592] = "TIMBRE_TRANSFORMATION_MELLOW";
    /** A falsetto voice.
     */
    VOICE_BEAUTIFIER_PRESET[VOICE_BEAUTIFIER_PRESET["TIMBRE_TRANSFORMATION_FALSETTO"] = 16974848] = "TIMBRE_TRANSFORMATION_FALSETTO";
    /** A fuller voice.
     */
    VOICE_BEAUTIFIER_PRESET[VOICE_BEAUTIFIER_PRESET["TIMBRE_TRANSFORMATION_FULL"] = 16975104] = "TIMBRE_TRANSFORMATION_FULL";
    /** A clearer voice.
     */
    VOICE_BEAUTIFIER_PRESET[VOICE_BEAUTIFIER_PRESET["TIMBRE_TRANSFORMATION_CLEAR"] = 16975360] = "TIMBRE_TRANSFORMATION_CLEAR";
    /** A more resounding voice.
     */
    VOICE_BEAUTIFIER_PRESET[VOICE_BEAUTIFIER_PRESET["TIMBRE_TRANSFORMATION_RESOUNDING"] = 16975616] = "TIMBRE_TRANSFORMATION_RESOUNDING";
    /** A more ringing voice.
     */
    VOICE_BEAUTIFIER_PRESET[VOICE_BEAUTIFIER_PRESET["TIMBRE_TRANSFORMATION_RINGING"] = 16975872] = "TIMBRE_TRANSFORMATION_RINGING";
})(VOICE_BEAUTIFIER_PRESET = exports.VOICE_BEAUTIFIER_PRESET || (exports.VOICE_BEAUTIFIER_PRESET = {}));
;
/** The latency level of an audience member in interactive live streaming.
 *
 * @note Takes effect only when the user role is audience.
 */
var AUDIENCE_LATENCY_LEVEL_TYPE;
(function (AUDIENCE_LATENCY_LEVEL_TYPE) {
    /** 1: Low latency. */
    AUDIENCE_LATENCY_LEVEL_TYPE[AUDIENCE_LATENCY_LEVEL_TYPE["AUDIENCE_LATENCY_LEVEL_LOW_LATENCY"] = 1] = "AUDIENCE_LATENCY_LEVEL_LOW_LATENCY";
    /** 2: (Default) Ultra low latency. */
    AUDIENCE_LATENCY_LEVEL_TYPE[AUDIENCE_LATENCY_LEVEL_TYPE["AUDIENCE_LATENCY_LEVEL_ULTRA_LOW_LATENCY"] = 2] = "AUDIENCE_LATENCY_LEVEL_ULTRA_LOW_LATENCY";
})(AUDIENCE_LATENCY_LEVEL_TYPE = exports.AUDIENCE_LATENCY_LEVEL_TYPE || (exports.AUDIENCE_LATENCY_LEVEL_TYPE = {}));
;
;
;
/** The options for SDK preset voice conversion effects.
 *
 * @since v3.3.1
 */
var VOICE_CONVERSION_PRESET;
(function (VOICE_CONVERSION_PRESET) {
    /** Turn off voice conversion effects and use the original voice.
     */
    VOICE_CONVERSION_PRESET[VOICE_CONVERSION_PRESET["VOICE_CONVERSION_OFF"] = 0] = "VOICE_CONVERSION_OFF";
    /** A gender-neutral voice. To avoid audio distortion, ensure that you use
     * this enumerator to process a female-sounding voice.
     */
    VOICE_CONVERSION_PRESET[VOICE_CONVERSION_PRESET["VOICE_CHANGER_NEUTRAL"] = 50397440] = "VOICE_CHANGER_NEUTRAL";
    /** A sweet voice. To avoid audio distortion, ensure that you use this
     * enumerator to process a female-sounding voice.
     */
    VOICE_CONVERSION_PRESET[VOICE_CONVERSION_PRESET["VOICE_CHANGER_SWEET"] = 50397696] = "VOICE_CHANGER_SWEET";
    /** A steady voice. To avoid audio distortion, ensure that you use this
     * enumerator to process a male-sounding voice.
     */
    VOICE_CONVERSION_PRESET[VOICE_CONVERSION_PRESET["VOICE_CHANGER_SOLID"] = 50397952] = "VOICE_CHANGER_SOLID";
    /** A deep voice. To avoid audio distortion, ensure that you use this
     * enumerator to process a male-sounding voice.
     */
    VOICE_CONVERSION_PRESET[VOICE_CONVERSION_PRESET["VOICE_CHANGER_BASS"] = 50398208] = "VOICE_CHANGER_BASS";
})(VOICE_CONVERSION_PRESET = exports.VOICE_CONVERSION_PRESET || (exports.VOICE_CONVERSION_PRESET = {}));
;
/** Local video state types.
 */
var LOCAL_VIDEO_STREAM_STATE;
(function (LOCAL_VIDEO_STREAM_STATE) {
    /** 0: Initial state. */
    LOCAL_VIDEO_STREAM_STATE[LOCAL_VIDEO_STREAM_STATE["LOCAL_VIDEO_STREAM_STATE_STOPPED"] = 0] = "LOCAL_VIDEO_STREAM_STATE_STOPPED";
    /** 1: The local video capturing device starts successfully.
     *
     * The SDK also reports this state when you share a maximized window by calling \ref IRtcEngine::startScreenCaptureByWindowId "startScreenCaptureByWindowId".
     */
    LOCAL_VIDEO_STREAM_STATE[LOCAL_VIDEO_STREAM_STATE["LOCAL_VIDEO_STREAM_STATE_CAPTURING"] = 1] = "LOCAL_VIDEO_STREAM_STATE_CAPTURING";
    /** 2: The first video frame is successfully encoded. */
    LOCAL_VIDEO_STREAM_STATE[LOCAL_VIDEO_STREAM_STATE["LOCAL_VIDEO_STREAM_STATE_ENCODING"] = 2] = "LOCAL_VIDEO_STREAM_STATE_ENCODING";
    /** 3: The local video fails to start. */
    LOCAL_VIDEO_STREAM_STATE[LOCAL_VIDEO_STREAM_STATE["LOCAL_VIDEO_STREAM_STATE_FAILED"] = 3] = "LOCAL_VIDEO_STREAM_STATE_FAILED";
})(LOCAL_VIDEO_STREAM_STATE = exports.LOCAL_VIDEO_STREAM_STATE || (exports.LOCAL_VIDEO_STREAM_STATE = {}));
;
/** Local video state error codes.
 */
var LOCAL_VIDEO_STREAM_ERROR;
(function (LOCAL_VIDEO_STREAM_ERROR) {
    /** 0: The local video is normal. */
    LOCAL_VIDEO_STREAM_ERROR[LOCAL_VIDEO_STREAM_ERROR["LOCAL_VIDEO_STREAM_ERROR_OK"] = 0] = "LOCAL_VIDEO_STREAM_ERROR_OK";
    /** 1: No specified reason for the local video failure. */
    LOCAL_VIDEO_STREAM_ERROR[LOCAL_VIDEO_STREAM_ERROR["LOCAL_VIDEO_STREAM_ERROR_FAILURE"] = 1] = "LOCAL_VIDEO_STREAM_ERROR_FAILURE";
    /** 2: No permission to use the local video capturing device. */
    LOCAL_VIDEO_STREAM_ERROR[LOCAL_VIDEO_STREAM_ERROR["LOCAL_VIDEO_STREAM_ERROR_DEVICE_NO_PERMISSION"] = 2] = "LOCAL_VIDEO_STREAM_ERROR_DEVICE_NO_PERMISSION";
    /** 3: The local video capturing device is in use. */
    LOCAL_VIDEO_STREAM_ERROR[LOCAL_VIDEO_STREAM_ERROR["LOCAL_VIDEO_STREAM_ERROR_DEVICE_BUSY"] = 3] = "LOCAL_VIDEO_STREAM_ERROR_DEVICE_BUSY";
    /** 4: The local video capture fails. Check whether the capturing device
     * is working properly.
     */
    LOCAL_VIDEO_STREAM_ERROR[LOCAL_VIDEO_STREAM_ERROR["LOCAL_VIDEO_STREAM_ERROR_CAPTURE_FAILURE"] = 4] = "LOCAL_VIDEO_STREAM_ERROR_CAPTURE_FAILURE";
    /** 5: The local video encoding fails. */
    LOCAL_VIDEO_STREAM_ERROR[LOCAL_VIDEO_STREAM_ERROR["LOCAL_VIDEO_STREAM_ERROR_ENCODE_FAILURE"] = 5] = "LOCAL_VIDEO_STREAM_ERROR_ENCODE_FAILURE";
    /** 11: The shared window is minimized when you share a window by the
     * window symbol.
     */
    LOCAL_VIDEO_STREAM_ERROR[LOCAL_VIDEO_STREAM_ERROR["LOCAL_VIDEO_STREAM_ERROR_SCREEN_CAPTURE_WINDOW_MINIMIZED"] = 11] = "LOCAL_VIDEO_STREAM_ERROR_SCREEN_CAPTURE_WINDOW_MINIMIZED";
    /** 12: The error code indicates that a window shared by the window symbol
     * has been closed, or a full-screen window
     * shared by the window symbol has exited full-screen mode.
     * After exiting full-screen mode, remote users cannot see the shared
     * window. To prevent remote users from seeing a
     * black screen, Agora recommends that you immediately stop screen sharing.
     *
     * Common scenarios for reporting this error code:
     * - When the local user closes the shared window, the SDK reports this
     * error code.
     * - The local user shows some slides in full-screen mode first, and then
     * shares the windows of the slides. After
     * the user exits full-screen mode, the SDK reports this error code.
     * - The local user watches web video or reads web document in full-screen
     * mode first, and then shares the window of
     * the web video or document. After the user exits full-screen mode, the
     * SDK reports this error code.
     */
    LOCAL_VIDEO_STREAM_ERROR[LOCAL_VIDEO_STREAM_ERROR["LOCAL_VIDEO_STREAM_ERROR_SCREEN_CAPTURE_WINDOW_CLOSED"] = 12] = "LOCAL_VIDEO_STREAM_ERROR_SCREEN_CAPTURE_WINDOW_CLOSED";
})(LOCAL_VIDEO_STREAM_ERROR = exports.LOCAL_VIDEO_STREAM_ERROR || (exports.LOCAL_VIDEO_STREAM_ERROR = {}));
;
/** Local audio state types.
 */
var LOCAL_AUDIO_STREAM_STATE;
(function (LOCAL_AUDIO_STREAM_STATE) {
    /** 0: The local audio is in the initial state.
     */
    LOCAL_AUDIO_STREAM_STATE[LOCAL_AUDIO_STREAM_STATE["LOCAL_AUDIO_STREAM_STATE_STOPPED"] = 0] = "LOCAL_AUDIO_STREAM_STATE_STOPPED";
    /** 1: The recording device starts successfully.
     */
    LOCAL_AUDIO_STREAM_STATE[LOCAL_AUDIO_STREAM_STATE["LOCAL_AUDIO_STREAM_STATE_RECORDING"] = 1] = "LOCAL_AUDIO_STREAM_STATE_RECORDING";
    /** 2: The first audio frame encodes successfully.
     */
    LOCAL_AUDIO_STREAM_STATE[LOCAL_AUDIO_STREAM_STATE["LOCAL_AUDIO_STREAM_STATE_ENCODING"] = 2] = "LOCAL_AUDIO_STREAM_STATE_ENCODING";
    /** 3: The local audio fails to start.
     */
    LOCAL_AUDIO_STREAM_STATE[LOCAL_AUDIO_STREAM_STATE["LOCAL_AUDIO_STREAM_STATE_FAILED"] = 3] = "LOCAL_AUDIO_STREAM_STATE_FAILED";
})(LOCAL_AUDIO_STREAM_STATE = exports.LOCAL_AUDIO_STREAM_STATE || (exports.LOCAL_AUDIO_STREAM_STATE = {}));
;
/** Local audio state error codes.
 */
var LOCAL_AUDIO_STREAM_ERROR;
(function (LOCAL_AUDIO_STREAM_ERROR) {
    /** 0: The local audio is normal.
     */
    LOCAL_AUDIO_STREAM_ERROR[LOCAL_AUDIO_STREAM_ERROR["LOCAL_AUDIO_STREAM_ERROR_OK"] = 0] = "LOCAL_AUDIO_STREAM_ERROR_OK";
    /** 1: No specified reason for the local audio failure.
     */
    LOCAL_AUDIO_STREAM_ERROR[LOCAL_AUDIO_STREAM_ERROR["LOCAL_AUDIO_STREAM_ERROR_FAILURE"] = 1] = "LOCAL_AUDIO_STREAM_ERROR_FAILURE";
    /** 2: No permission to use the local audio device.
     */
    LOCAL_AUDIO_STREAM_ERROR[LOCAL_AUDIO_STREAM_ERROR["LOCAL_AUDIO_STREAM_ERROR_DEVICE_NO_PERMISSION"] = 2] = "LOCAL_AUDIO_STREAM_ERROR_DEVICE_NO_PERMISSION";
    /** 3: The microphone is in use.
     */
    LOCAL_AUDIO_STREAM_ERROR[LOCAL_AUDIO_STREAM_ERROR["LOCAL_AUDIO_STREAM_ERROR_DEVICE_BUSY"] = 3] = "LOCAL_AUDIO_STREAM_ERROR_DEVICE_BUSY";
    /** 4: The local audio capturing fails. Check whether the capturing device
     * is working properly.
     */
    LOCAL_AUDIO_STREAM_ERROR[LOCAL_AUDIO_STREAM_ERROR["LOCAL_AUDIO_STREAM_ERROR_RECORD_FAILURE"] = 4] = "LOCAL_AUDIO_STREAM_ERROR_RECORD_FAILURE";
    /** 5: The local audio encoding fails.
     */
    LOCAL_AUDIO_STREAM_ERROR[LOCAL_AUDIO_STREAM_ERROR["LOCAL_AUDIO_STREAM_ERROR_ENCODE_FAILURE"] = 5] = "LOCAL_AUDIO_STREAM_ERROR_ENCODE_FAILURE";
})(LOCAL_AUDIO_STREAM_ERROR = exports.LOCAL_AUDIO_STREAM_ERROR || (exports.LOCAL_AUDIO_STREAM_ERROR = {}));
;
;

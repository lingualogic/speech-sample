/**
 * Help Interface for Configuration
 *
 *  speechServiceName    - Name for the current created service
 *  speechServiceVersion - Version Number of created service
 *  rootState            - Start State for the App
 *  dialogPath           - global Path for speech assets
 *  audioFlag            - true = play AudioFiles, false = speech synthese (TTS)
 * externAudioFlag - true = use extern Audio Sound Service
 */

export interface HelpConfigInterface {
  speechServiceName?: string;
  speechServiceVersion?: number;
  rootState?: string;
  dialogPath?: string;
  audioFlag?: boolean;
  externAudioFlag?: boolean;
}

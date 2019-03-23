/**
 * Configuration for HelpService
 */

import { HelpConfigInterface } from './help-config.interface';

/**
 * Speech-Service Configuration
 *
 * rootState       - State for Start
 * dialogPath      - Root Path for SpeechService
 * audioFlag       - true = play AudioFiles, false = speech synthese (TTS)
 * externAudioFlag - true = use extern Audio Sound Service, false = use intern AudioPlayer
 */
export const HELP_CONFIG: HelpConfigInterface = {
  rootState: 'home',
  dialogPath: 'assets/',
  audioFlag: true,
  externAudioFlag: true
};

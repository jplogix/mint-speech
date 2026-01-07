export type MintSpeechApi = {
  onClipboardTts: (handler: (text: string) => void) => void;
};

declare global {
  interface Window {
    mintSpeech?: MintSpeechApi;
  }
}

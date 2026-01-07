import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('mintSpeech', {
  onClipboardTts: (handler: (text: string) => void) => {
    ipcRenderer.on('clipboard-tts', (_event, text) => handler(text));
  }
});

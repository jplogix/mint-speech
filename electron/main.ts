import { app, BrowserWindow, globalShortcut } from 'electron';
import path from 'node:path';

let mainWindow: BrowserWindow | null = null;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    },
    titleBarStyle: process.platform === 'darwin' ? 'hidden' : 'default',
    frame: process.platform !== 'darwin'
  });

  const url = process.env.NEXT_DEV_SERVER_URL ?? 'http://localhost:3000';
  void mainWindow.loadURL(url);
};

app.whenReady().then(() => {
  createWindow();

  globalShortcut.register('CommandOrControl+Shift+D', () => {
    if (!mainWindow) return;
    if (mainWindow.isVisible()) {
      mainWindow.hide();
    } else {
      mainWindow.show();
    }
  });

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  globalShortcut.unregisterAll();
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

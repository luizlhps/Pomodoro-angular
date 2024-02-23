const { app, BrowserWindow, Menu } = require("electron/main");
const path = require("node:path");

function createWindow() {
  const win = new BrowserWindow({
    width: 600,
    height: 800,
    minWidth: 600,
    minHeight: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });
  Menu.setApplicationMenu(null);
  win.loadFile("dist/main/browser/index.html");
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

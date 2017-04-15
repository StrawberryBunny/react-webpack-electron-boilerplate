const electron = require('electron');
const { app, dialog, BrowserWindow, Menu } = electron;
let mainWindow;
function createWindow() {
    mainWindow = new BrowserWindow({ width: 800, height: 600 });
    mainWindow.setMenu(null);
    mainWindow.loadURL(`file://${__dirname}/index.html`);
    mainWindow.focus();
    mainWindow.webContents.toggleDevTools();
    mainWindow.on('close', () => {
        mainWindow = null;
    });
    mainWindow.maximize();
}
app.on('ready', () => {
    createWindow();
});
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
app.on('activate', () => {
    if (mainWindow == null) {
        createWindow();
    }
});
// Basic init
const electron = require('electron')
const { app, BrowserWindow, ipcMain } = electron
const { format } = require('url')
const path = require('path')
const { Base64 } = require('js-base64');
const os = require('os');
// const AppUpdater = require('./updater');
const { MacUpdater, NsisUpdater } = require('electron-updater');

const isDevelopment = process.env["NODE_ENV"] === "development"

if (isDevelopment) {
	require('electron-reload')(path.join(__dirname, "src"))
} else {

}


// To avoid being garbage collected
let mainWindow

app.allowRendererProcessReuse = false


function createWindow() {
	mainWindow = new BrowserWindow({
		width: 800,
		height: 600,
		webPreferences: {
			nodeIntegration: true,
		},
	});
	mainWindow.openDevTools()
	if (isDevelopment) {
		mainWindow.loadURL(`file://${__dirname}/index.html`)
	} else {
		mainWindow.once('ready-to-show', () => {
			console.log('autoUpdater')
			const sys = os.type().toUpperCase();
			let autoUpdater;
			const opt = {
				provider: "github",
				owner: "Jackie-Tang",
				repo: "electron-react",
				vPrefixedTagName: false,
				releaseType: 'release',
				token: Base64.decode('MGUyZjk0ZWUxZDc3OTgyZGVjM2M4ZDZmNWUxZWUwNmZkY2VlZTkxNA=='),
			};
			if (sys === 'DARWIN') {
				autoUpdater = new MacUpdater(opt)
			} else if (sys === 'WINDOW_NT') {
				autoUpdater = new NsisUpdater(opt)
			}
			// if (autoUpdater.logger) {
			// 	autoUpdater.logger = require('electron-log')
			// 	// 监听输出的日志
			// 	autoUpdater.logger.transports.file.level = 'info'
			// }
			autoUpdater.checkForUpdatesAndNotify();
			autoUpdater.on('update-available', () => {
				mainWindow.webContents.send('update_available');
			});
			autoUpdater.on('update-downloaded', () => {
				mainWindow.webContents.send('update_downloaded');
			});
		});
		mainWindow.loadURL(format({
			pathname: path.join(__dirname, 'index.html'),
			protocol: 'file',
			slashes: true
		}))
	}
	mainWindow.on('closed', function () {
		mainWindow = null;
	});
}

app.on('ready', () => {
	console.log('process.env.GITHUB_TOKEN', Base64.decode('MGUyZjk0ZWUxZDc3OTgyZGVjM2M4ZDZmNWUxZWUwNmZkY2VlZTkxNA=='))

	createWindow();

})

app.on('activate', function () {
	if (mainWindow === null) {
		createWindow();
	}
});

ipcMain.on('app_version', (event) => {
	event.sender.send('app_version', { version: app.getVersion() });
});

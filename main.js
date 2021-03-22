// Basic init
const electron = require('electron')
const { app, BrowserWindow } = electron
const { format } = require('url')
const path = require('path')
// const AppUpdater = require('./updater');
const { autoUpdater } = require('electron-updater');

const isDevelopment = process.env["NODE_ENV"] === "development"
// Let electron reloads by itself when webpack watches changes in ./app/
if (isDevelopment) {
    //only load reload module in dev mode
    require('electron-reload')(path.join(__dirname, "src"))
} else {

}


// To avoid being garbage collected
let mainWindow
let otherWindow

// app.allowRendererProcessReuse = false
app.allowRendererProcessReuse = false

app.on('ready', () => {

    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })

    // otherWindow = new BrowserWindow({
    //     width: 800,
    //     height: 600,
    //     webPreferences:{
    //         nodeIntegration: true
    //     }
    // })

    // if (isDevelopment) {
    mainWindow.openDevTools()
    // otherWindow.openDevTools()
    // }

    if (isDevelopment) {
        mainWindow.loadURL(`file://${__dirname}/index.html`)
        // otherWindow.loadURL(`file://${__dirname}/index.html`)
    } else {
        // checkForUpdates();
        autoUpdater.checkForUpdatesAndNotify();
        autoUpdater.logger = require('electron-log')
        // 监听输出的日志
        autoUpdater.logger.transports.file.level = 'info'
        // global.currentVersion = autoUpdater.currentVersion
        mainWindow.loadURL(format({
            pathname: path.join(__dirname, 'index.html'),
            protocol: 'file',
            slashes: true
        }))
        // mainWindow.webContents.on('did-finish-load', () => {
        //     AppUpdater.checkVersion()
        // })

        // otherWindow.loadURL(format({
        //     pathname: path.join(__dirname, 'index.html'),
        //     protocol: 'file',
        //     slashes: true
        // }))
    }

})

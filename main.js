// Basic init
const electron = require('electron')
const { app, BrowserWindow } = electron
const { format } = require('url')
const path = require('path')
// const AppUpdater = require('./updater');
const { autoUpdater, MacUpdater } = require('electron-updater');

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
    console.log('process.env.GITHUB_TOKEN', process.env.GITHUB_TOKEN)
    mainWindow.openDevTools()
    // otherWindow.openDevTools()
    // }

    if (isDevelopment) {
        mainWindow.loadURL(`file://${__dirname}/index.html`)
        // otherWindow.loadURL(`file://${__dirname}/index.html`)
    } else {
        // checkForUpdates();
        const xxx = new MacUpdater({
            "provider": "github",
            "owner": "Jackie-Tang",
            "repo": "electron-react",
            token: process.env.GITHUB_TOKEN
        })
        xxx.checkForUpdatesAndNotify();
        xxx.logger = require('electron-log')
        // 监听输出的日志
        xxx.logger.transports.file.level = 'info'
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

const { autoUpdater } = require('electron-updater')
const Store = require('electron-store')
const path = require('path')
global.store = new Store()
autoUpdater.logger = require('electron-log')
// 监听输出的日志
autoUpdater.logger.transports.file.level = 'info'
// 设置当前的版本号为自动更新的版本号
global.currentVersion = autoUpdater.currentVersion
autoUpdater.autoDownload = false // 将自动下载包设置为false，产品的需求是让用户自己点击更新下载
// 监听自动更新的几个事件
// 监听如果自动更新失败将停止安装
autoUpdater.on('error', () => {
  // todo something
})
// 检查更新是否已开始时发出
autoUpdater.on('checking-for-update', () => { })
// 检测有可更新的应用包
autoUpdater.on('update-available', info => {
  // todo something
})
// 检测没有可用更新时发出
autoUpdater.on('update-not-available', info => {
  // todo something
})
// 下载可更新的安装包
autoUpdater.on('update-downloaded', info => {
  // todo something
})
// 监听下载进度
autoUpdater.on('download-progress', info => {
  // todo something
})
module.exports = {
  checkVersion() {
    if (global.isDev) {
      autoUpdater.updateConfigPath = path.join(__dirname, '../../dev-app-update.yml')
    }
    autoUpdater.checkForUpdates()
  }
}
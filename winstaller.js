var electronInstaller = require('electron-winstaller');
var resultPromise = electronInstaller.createWindowsInstaller(
  {
    appDirectory: './build/win-unpacked',
    outputDirectory: './ext',
    authors: 'Jackie-Tang',
    exe: 'agroa.exe',
    setupExe: 'agroa-setup.exe',
    setupMsi: 'agroa-setup.msi',
    iconUrl: './src/renderer/assets/agroa.ico',
    setupIcon: './src/renderer/assets/agroa.ico'
  });

resultPromise.then(() => console.log('It worked!'), e => console.log(`No dice: ${e.message}`));
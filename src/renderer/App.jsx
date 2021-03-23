import React, { Component } from 'react'
import { render } from 'react-dom'
import AgoraRtcEngine from 'agora-electron-sdk'
import path from 'path'
import os from 'os'
import SelectDevice from './components/selectDevice'
import Agroa from './components/agroa'

const APPID = '0ea43917eae94e909864e344db8e2371'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      inputDevice: '',
      outputDevice: '',
      ready: false,
    }
  }

  lintAgroa() {
    if (global.rtcEngine) {
      global.rtcEngine.release()
      global.rtcEngine = null
    }

    if (!APPID) {
      alert('Please provide APPID in App.jsx')
      return
    }

    const consoleContainer = document.querySelector('#console')

    let rtcEngine = new AgoraRtcEngine()
    rtcEngine.initialize(APPID)

    // listen to events
    rtcEngine.on('joinedChannel', (channel, uid, elapsed) => {
      consoleContainer.innerHTML = `join channel success ${channel} ${uid} ${elapsed}`
      let localVideoContainer = document.querySelector('#local')
      //setup render area for local user
      rtcEngine.setupLocalVideo(localVideoContainer)
    })
    rtcEngine.on('error', (err, msg) => {
      consoleContainer.innerHTML = `error: code ${err} - ${msg}`
    })
    rtcEngine.on('userJoined', (uid) => {
      //setup render area for joined user
      let remoteVideoContainer = document.querySelector('#remote')
      rtcEngine.setupViewContentMode(uid, 1)
      rtcEngine.subscribe(uid, remoteVideoContainer)
    })

    // set channel profile, 0: video call, 1: live broadcasting
    rtcEngine.setChannelProfile(1)
    rtcEngine.setClientRole(1)

    // enable video, call disableVideo() is you don't need video at all
    rtcEngine.enableVideo()

    const logpath = path.join(os.homedir(), 'agorasdk.log')
    // set where log file should be put for problem diagnostic
    rtcEngine.setLogFile(logpath)

    // join channel to rock!
    rtcEngine.joinChannel(
      null,
      'demoChannel',
      null,
      Math.floor(new Date().getTime() / 1000)
    )

    global.rtcEngine = rtcEngine
  }

  changeDevice(key, deviceId = '') {
    this.setState({
      [key]: deviceId || '',
    })
    console.log(key, deviceId, 'deviceId')
  }

  changeReady(isReady = false) {
    this.setState({
      ready: isReady,
    })
  }

  render() {
    const { inputDevice, outputDevice, ready } = this.state

    return (
      <div className="home">
        <p>版本：1.0.1</p>
        <SelectDevice
          changeDevice={this.changeDevice.bind(this)}
          changeReady={this.changeReady.bind(this)}
        />
        {ready && (
          <Agroa inputDevice={inputDevice} outputDevice={outputDevice} />
        )}
      </div>
    )
  }
}

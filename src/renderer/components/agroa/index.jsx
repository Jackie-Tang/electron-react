import React, { Component } from 'react'
import { render } from 'react-dom'
import AgoraRtcEngine from 'agora-electron-sdk'
import path from 'path'
import os from 'os'
import {
  RtcTokenBuilder,
  RtcRole,
} from 'agora-access-token';

const APPID = 'bf16299f91e04f709516bb9a9e4b2235'
const APPCERTIFICATE = '1ea9877e13a34e7193ff2fcee486f74e'
const CHANNELNAME = 'demoChannel'
const UID = Math.floor(new Date().getTime() / 1000)
const ROLE = RtcRole.PUBLISHER
export default class Agroa extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isInit: false,
      token: '',
    }

    this.rtcEngine = null
    this.consoleContainer = null
    this.remoteVideoContainer = null
    this.localVideoContainer = null
  }

  async getToken() {
    const expirationTimeInSeconds = 3600

    const currentTimestamp = Math.floor(Date.now() / 1000)

    const privilegeExpiredTs = currentTimestamp + expirationTimeInSeconds

    const tokenA = await RtcTokenBuilder.buildTokenWithUid(
      APPID,
      APPCERTIFICATE,
      CHANNELNAME,
      UID,
      ROLE,
      privilegeExpiredTs
    )

    this.setState({
      token: tokenA,
    })
    console.log('Token With Integer Number Uid: ' + tokenA)
  }

  async initAgroa() {
    if (global.rtcEngine) {
      global.rtcEngine.release()
      global.rtcEngine = null
    }

    if (!APPID) {
      alert('Please provide APPID in App.jsx')
      return
    }

    await this.getToken();

    this.consoleContainer = document.querySelector('#console')

    this.rtcEngine = new AgoraRtcEngine()
    this.rtcEngine.initialize(APPID)

    // listen to events
    this.rtcEngine.on('joinedChannel', (channel, uid, elapsed) => {
      this.consoleContainer.innerHTML = `join channel success ${channel}-${uid}-${elapsed}`
      this.localVideoContainer = document.querySelector('#local')

      //setup render area for local user
      this.rtcEngine.setupLocalVideo(this.localVideoContainer)
      const decive = this.rtcEngine.setAudioRecordingDevice(
        this.props.inputDevice
      )
      console.log(decive, this.props.inputDevice, 'sss')
      const enableLoopbackRecording = this.rtcEngine.enableLoopbackRecording(
        true
      )

      console.log(
        enableLoopbackRecording === 0 ? '声卡开启成功' : '声卡开启失败'
      )
      this.setState({
        isInit: true,
      })
    })
    this.rtcEngine.on('error', (err, msg) => {
      this.consoleContainer.innerHTML = `error: code ${err} - ${msg}`
    })

    // 监听用户加入
    this.rtcEngine.on('userJoined', (uid) => {
      //setup render area for joined user
      this.remoteVideoContainer = document.querySelector('#remote')
      this.rtcEngine.setupViewContentMode(uid, 1)
      this.rtcEngine.subscribe(uid, this.remoteVideoContainer)
    })

    //  监听声音
    this.rtcEngine.on(
      'groupAudioVolumeIndication',
      (speakers, speakerNumber, totalVolume) => {
        console.log('speakers-', speakers)
        console.log('speakerNumber-', speakerNumber)
        console.log('totalVolume-', totalVolume)
      }
    )

    // 设置频道场景 0-通信  1-直播  2-游戏
    this.rtcEngine.setChannelProfile(1)

    // 设置直播场景下的用户角色。 1-直播 2-观众
    this.rtcEngine.setClientRole(1)

    // 启用视频模块
    this.rtcEngine.enableVideo()

    const logpath = path.join(os.homedir(), 'agorasdk.log')

    // 设置日志文件
    this.rtcEngine.setLogFile(logpath)

    // 启用说话者音量提示
    this.rtcEngine.enableAudioVolumeIndication(5000, 3)

    const { token } = this.state;

    // 加入频道 参数（token, 频道, (非必选项) 开发者需加入的任何附加信息, uid）
    this.rtcEngine.joinChannel(token, CHANNELNAME, null, UID)

    global.rtcEngine = this.rtcEngine
  }

  levelChannel() {
    const isLevel = this.rtcEngine.leaveChannel()
    this.setState(
      {
        isInit: isLevel != 0,
      },
      () => {
        this.consoleContainer.innerHTML = ''
        // this.remoteVideoContainer.innerHTML = '';
        this.localVideoContainer.innerHTML = ''
      }
    )
    console.log(isLevel)
    console.log(isLevel === 0 ? '断线成功' : '断线失败')
  }

  // closeVideo() {
  //   const isClose = this.rtcEngine.enableLocalVideo(false);
  //   if (isClose === 0) {
  //     this.localVideoContainer.innerHTML = '';
  //   }
  //   console.log(this.localVideoContainer.innerHTML);
  // }

  render() {
    const { isInit } = this.state
    console.log(isInit, 'ssssssssss')

    return (
      <div>
        {!isInit ? (
          <button
            onClick={() => {
              this.initAgroa()
            }}
          >
            连接声网
          </button>
        ) : (
          <div>
            <button
              onClick={() => {
                this.levelChannel()
              }}
            >
              断开连接
            </button>
          </div>
        )}
        <div className="hello">
          <div className="video" id="local"></div>
          <div className="video" id="remote"></div>
        </div>
        <div id="console"></div>
      </div>
    )
  }
}

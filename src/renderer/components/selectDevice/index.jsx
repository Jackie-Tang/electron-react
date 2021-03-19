import React, { Component } from 'react'
import { render } from 'react-dom'
import styles from './styles.css'
import Recorder from '../../assets/recorder/index.js'

export default class SelectDevice extends Component {
  constructor(props) {
    super()

    this.state = {
      ready: false,
      showError: false,
      audioInputList: [],
      audioOutputList: [],
      waveArr: [],
      recording: false,
      duration: 0,
      timer: null,
      inputDevice: '',
      outputDevice: '',
    }

    this.recorder = null
  }
  componentDidMount() {}

  initRecorder() {
    if (this.recorder) return
    const { changeReady } = this.props
    this.recorder = new Recorder()
    console.log(this.recorder)
    this.recorder.on('ready', () => {
      const createRecorder = this.recorder
      console.log('初始化完毕')
      console.log(createRecorder)
      this.setState({
        recorder: createRecorder,
        ready: createRecorder.supported,
        showError: !createRecorder.supported,
        audioInputList: createRecorder.audioInputList || [],
        audioOutputList: createRecorder.audioOutputList || [],
        inputDevice: createRecorder.audioInputList[0].deviceId || '',
        outputDevice: createRecorder.audioOutputList[0].deviceId || '',
      })
      changeReady(createRecorder.supported || false)
      if (createRecorder.supported) {
        this.listenDeviceChange()
      }
    })

  }

  listenDeviceChange() {
    this.recorder.on('devicechange', () => {
      const r = confirm('检测到音频设备发生了变化，需要重新初始化音频环境！')
      this.recorder = this.recorder.destroy()
      this.initRecorder()
    })
  }

  changeDevice(key, event) {
    const deviceId = event.target.value
    this.setState({
      [key]: deviceId || '',
    })
    const { changeDevice } = this.props
    changeDevice(key, deviceId)
  }

  render() {
    const {
      ready,
      showError,
      audioInputList,
      audioOutputList,
      inputDevice,
      outputDevice,
    } = this.state
    return (
      <div className={styles.selectDevice}>
        {!ready ? (
          <button
            onClick={() => {
              this.initRecorder()
            }}
          >
            点击初始化音频环境
          </button>
        ) : (
          <div className={styles.ready}>
            <div className={styles.row}>
              <div className={styles.tag}>设备是否可用：</div>
              <div className={styles.rowContent}>是</div>
            </div>
            <div className={styles.row}>
              <div className={styles.tag}>输入设备列表：</div>
              <div className={styles.rowContent}>
                <select
                  onChange={this.changeDevice.bind(this, 'inputDevice')}
                  value={inputDevice}
                >
                  {audioInputList.map((item, key) => (
                    <option key={`input-${key}`} value={item.deviceId}>
                      {item.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.tag}>输出设备列表：</div>
              <div className={styles.rowContent}>
                <select
                  onChange={this.changeDevice.bind(this, 'outputDevice')}
                  value={outputDevice}
                >
                  {audioOutputList.map((item, key) => (
                    <option key={`output-${key}`} value={item.deviceId}>
                      {item.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        )}
        {showError && (
          <div className={styles.errorTip}>
            初始化失败，请检查1、是否禁用麦克风权限；2、是否禁用音频设备。
          </div>
        )}
      </div>
    )
  }
}

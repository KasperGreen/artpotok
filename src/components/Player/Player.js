import React, { Component } from 'react'
import './Player.css'
import { Timer } from 'react-soundplayer/components'
import classNames from 'classnames'
import _ from 'lodash'
import PlayerCover from 'components/Player/PlayerCover'
import { withSoundCloudAudio } from 'react-soundplayer/addons'

@withSoundCloudAudio
export default class Player extends Component {

  state = {
    activeIndex: 0
  }

  render () {
    const {
        props: {playlist},
        state: {activeIndex}
      } = this,
      track = _.get(playlist, 'tracks[' + activeIndex + ']', {})

    return (
      <div className='Player'>
        <PlayerCover {...{...this.props, track, activeIndex}} />
        {this.renderTrackList()}
      </div>)
  }

  nextIndex = () => {
    const {playlist} = this.props
    let {activeIndex} = this.state

    if (activeIndex >= playlist.tracks.length - 1) {
      return
    }

    if (activeIndex || activeIndex === 0) {
      this.setState({activeIndex: ++activeIndex})
    }
  }
  prevIndex = () => {
    let {activeIndex} = this.state

    if (activeIndex <= 0) {
      return
    }

    if (activeIndex || activeIndex === 0) {
      this.setState({activeIndex: --activeIndex})
    }
  }

  componentDidUpdate (prevProps, prevState, prevContext) {
    const {
      props: {
        playlist,
        playing,
        currentTime,
        duration,
        setPlay
      },
      state: {
        activeIndex
      }
    } = this

    if (playing !== prevProps.playing) {
      setPlay(playing)
    }
    if (currentTime === duration && !playing && prevProps.playing) {
      this.playTrackAtIndex(
        activeIndex === playlist.tracks.length - 1
        ? 0
        : activeIndex + 1
      )
    }
  }

  componentWillUnmount () {
    const {
      props: {
        setPlay
      }
    } = this
    setPlay(false)
  }

  playTrackAtIndex (playlistIndex) {
    const {soundCloudAudio} = this.props

    this.setState({activeIndex: playlistIndex})

    soundCloudAudio.play({playlistIndex})
  }

  renderTrackList () {
    const {playlist} = this.props

    if (!playlist) {
      return <div className="Player-playlist">Loading...</div>
    }

    const tracks = playlist.tracks.map((track, i) => {
      return (
        <button
          key={track.id}
          className={classNames('Player-track_button', {
            'is-active': this.props.soundCloudAudio._playlistIndex === i
          })}
          onClick={this.playTrackAtIndex.bind(this, i)}
        >
          <span className="">{track.title}</span>
          <span className="">{Timer.prettyTime(track.duration / 1000)}</span>
        </button>
      )
    })

    return (
      <div className='Player-playlist'>{tracks}</div>
    )
  }

  shouldComponentUpdate (nextProps, nextState, nextContext) {

    if (typeof document.hidden !== 'undefined') {
      if (document.hidden && nextProps.playing) return false
    }

    return true
  }

}

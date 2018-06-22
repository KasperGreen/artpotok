import React, { Component } from 'react'
import { NextButton, PlayButton, PrevButton, Progress, Timer, VolumeControl } from 'react-soundplayer/components'
import { Helmet } from 'react-helmet'

export default class PlayerCover extends Component {
  render () {
    const {
        props: {
          track, currentTime, duration, playing
        }
      } = this,
      {
        artwork_url, title = '',
        user: {username = ''} = {},
        waveform_url = ''
      } = track,
      art_image_url = (artwork_url || '').replace(/large/, 't500x500')

    return (
      <div className='Player-cover' style={{backgroundImage: `url(${art_image_url})`}}>
        {(username && title && playing) &&
        <Helmet>
          <title>{username} — {title}</title>
        </Helmet>
        }
        <div className='Player-cover-inner'>
          <div>
            <h2 className="Player-cover-artist">{username}</h2>
          </div>
          <h1 className='Player-cover-title'>{title}</h1>
          <div className="Player-buttons-wrapper">
            <div className='Player-cover-main_buttons'>
              <PrevButton
                className="Player-cover-button-prev"
                onPrevClick={this.prevIndex}
                {...this.props}
              />
              <PlayButton
                className="Player-cover-button-play"
                {...this.props}
              />
              <NextButton
                ref={(element) => {this.next_button = element}}
                className="Player-cover-button-next"
                onNextClick={this.nextIndex}
                {...this.props}
              />
            </div>
            <VolumeControl
              className='Player-cover-volume'
              buttonClassName="Player-cover-volume-button"
              {...this.props}
            />
            <Progress
              className="Player-cover-progress"
              innerClassName="Player-cover-progress-inner"
              style={{backgroundImage: 'url(' + waveform_url + ')'}}
              value={(currentTime / duration) * 100 || 0}
              {...this.props}
            />
            <Timer className="Player-cover-timer" duration={duration || 0} currentTime={currentTime} {...this.props} />
          </div>
        </div>
      </div>
    )
  }
}

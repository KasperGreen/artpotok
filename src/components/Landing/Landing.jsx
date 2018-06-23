import React, { Component } from 'react'
import ParallaxMousemove from 'react-parallax-mousemove'
import './Landing.css'
import moon from './images/moon.png'
import LandingAircraftLeft from 'components/Landing/LandingAircraftLeft'
import LandingLogo from 'components/Landing/LandingLogo'
import LandingFamily from 'components/Landing/LandingFamily'
import LandingTrumpet from 'components/Landing/LandingTrumpet'
import LandingContrabass from 'components/Landing/LandingContrabass'
import LandingAircraftRight from 'components/Landing/LandingAircraftRight'
import LandingTreesLeft from 'components/Landing/LandingTreesLeft'
import LandingTreesRight from 'components/Landing/LandingTreesRight'
import LandingTreesRightTop from 'components/Landing/LandingTreesRightTop'
import LandingTreesBottom from 'components/Landing/LandingTreesBottom'
import LandingDate from 'components/Landing/LandingDate'
import classNames from 'classnames'

export default class Landing extends Component {
  state = {
    is_loaded: false
  }

  render () {
    const style = {
      outer: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        overflow: 'hidden',
        top: 0,
        left: 0
      }
    }
    const {
      state: {
        is_loaded
      }
    } = this
    return (
      <div
        className={classNames(
          'Landing',
          {
            'Landing-loaded': is_loaded
          }
        )} ref={this.landing_element}
      >
        <img src={moon} alt={'Луна'} className='Landing-moon' />
        <div className='Landing-loader' />

        <ParallaxMousemove containerStyle={style.outer}>
          <LandingDate />
          <LandingTreesLeft />
          <LandingTreesRight />
          <LandingTreesBottom />
          <LandingTreesRightTop />
          <LandingAircraftLeft />
          <LandingAircraftRight />
          <LandingLogo />
          <LandingFamily />
          <LandingTrumpet />
          <LandingContrabass />
        </ParallaxMousemove>


      </div>
    )
  }

  landing_element = React.createRef()

  componentDidMount () {
    window.addEventListener('load', () => {
      this.setState(
        (state) => {
          return {
            ...state,
            is_loaded: true
          }
        }
      )

    })
  }
}

import React, { Component } from 'react'
import ParallaxMousemove from 'react-parallax-mousemove'
import './Landing.css'
import date from './images/date.png'
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

export default class Landing extends Component {
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
    return (
      <div className="Landing" ref={this.landing_element}>
        <img src={moon} alt={'Луна'} className='Landing-moon' />
        <img src={date} alt={'2-5 августа 2018'} className='Landing-date' />

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
      console.log(' → Все картинки загружены ←  | ')

    })
  }
}

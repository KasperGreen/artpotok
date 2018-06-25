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

  checkImagesLoad = () => {
    this.images_load_timeout = setTimeout(
      () => {
        console.groupCollapsed()
        let images_is_loaded = true
        this.landing_element.current.querySelectorAll('img').forEach((image) => {
          if (!image.complete) images_is_loaded = false
          console.log('images', image.complete, image)
        })
        console.groupEnd()
        if (images_is_loaded) {
          this.setLoaded()
        }
        else {
          this.check_timeout = setTimeout(this.checkImagesLoad())
        }

      },
      200)

  }
  check_timeout = null
  images_load_timeout = null
  landing_element = React.createRef()
  long_images_load_timeout = null
  setLoaded = () => {
    clearTimeout(this.check_timeout)
    this.setState(
      (state) => {
        return {
          ...state,
          is_loaded: true
        }
      }
    )

  }

  componentDidMount () {
    window.addEventListener('load', this.setLoaded)

    this.checkImagesLoad()

    this.long_images_load_timeout = setTimeout(() => {
      if (!this.state.is_loaded) {
        this.setLoaded()
      }
    }, 20000)
  }

  componentWillUnmount () {
    clearTimeout(this.check_timeout)
    clearTimeout(this.images_load_timeout)
    clearTimeout(this.long_images_load_timeout)
    window.removeEventListener('load', this.setLoaded)
  }

}

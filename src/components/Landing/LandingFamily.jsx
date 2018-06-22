import React, { Component } from 'react'
import platform from './images/platform.png'
import fire from './images/fire.png'
import small_fire from './images/fire_small.png'
import balls from './images/balls.png'
import ParallaxMousemove from 'react-parallax-mousemove'

export default class LandingFamily extends Component {
  render () {
    return (
      <div className='Landing-family'>
        <ParallaxMousemove.Layer
          layerStyle={{
            position: 'absolute',
            width: '100%'
          }}
          config={{
            xFactor: 0.05,
            yFactor: 0.05,
            springSettings: {
              stiffness: 50,
              damping: 30
            }
          }}
        >
          <div className="Landing-family-inner">
            <img src={platform} alt="Платформа" className="Landing-family-base" />
            <img src={fire} alt="Огонь" className="Landing-family-fire" />
            <img src={small_fire} alt="Огонь" className="Landing-family-smal_fire" />
            <img src={balls} alt="Мячики" className="Landing-family-balls" />
          </div>
        </ParallaxMousemove.Layer>
      </div>
    )
  }
}

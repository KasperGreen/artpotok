import React, { Component } from 'react'
import ParallaxMousemove from 'react-parallax-mousemove'
import LandingLogoInner from 'components/Landing/LandingLogoInner'

export default class LandingLogo extends Component {
  render () {
    return (
      <div className='Landing-logo'>

        <div className='Landing-image_sizer'>
          <LandingLogoInner />
        </div>

        <ParallaxMousemove.Layer
          layerStyle={{
            position: 'absolute',
            width: '100%'
          }}
          config={{
            xFactor: -0.005,
            yFactor: -0.005,
            springSettings: {
              stiffness: 20,
              damping: 5
            }
          }}
        >
          <LandingLogoInner />
        </ParallaxMousemove.Layer>
      </div>
    )
  }
}

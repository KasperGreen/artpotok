import React, { Component } from 'react'
import ParallaxMousemove from 'react-parallax-mousemove'
import LandingDateInner from 'components/Landing/LandingDateInner'

export default class LandingDate extends Component {
  render () {
    return (
      <div className='Landing-date-wrapper'>
        <div className='Landing-image_sizer'>
          <LandingDateInner />
        </div>

        <ParallaxMousemove.Layer
          layerStyle={{
            position: 'absolute',
            width: '100%'
          }}
          config={{
            xFactor: -0.004,
            yFactor: 0,
            springSettings: {
              stiffness: 25,
              damping: 20
            }
          }}
        >
          <LandingDateInner />
        </ParallaxMousemove.Layer>
      </div>
    )
  }
}

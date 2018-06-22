import React, { Component } from 'react'
import ParallaxMousemove from 'react-parallax-mousemove'
import contrabass from './images/contrabass.png'

export default class LandingContrabass extends Component {
  render () {
    return (
      <div className='Landing-contrabass-wrapper'>
        <img src={contrabass} alt="" className="Landing-image_sizer" />
        <ParallaxMousemove.Layer
          layerStyle={{
            position: 'absolute',
            width: '100%'
          }}
          config={{
            xFactor: 0.08,
            yFactor: 0.08,
            springSettings: {
              stiffness: 5,
              damping: 5
            }
          }}
        >
          <img src={contrabass} alt="" className="Landing-contrabass" />
        </ParallaxMousemove.Layer>
      </div>
    )
  }
}

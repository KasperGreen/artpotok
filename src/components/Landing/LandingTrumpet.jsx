import React, { Component } from 'react'
import ParallaxMousemove from 'react-parallax-mousemove'
import trumpet from './images/trumpet.png'
export default class LandingTrumpet extends Component {
  render () {
    return (
      <div className='Landing-trumpet-wrapper'>
        <img src={trumpet} alt="" className="Landing-image_sizer" />
        <ParallaxMousemove.Layer
          layerStyle={{
            position: 'absolute',
            width: '100%'
          }}
          config={{
            xFactor: -0.1,
            yFactor: -0.1,
            springSettings: {
              stiffness: 5,
              damping: 2
            }
          }}
        >
          <img src={trumpet} alt="" className="Landing-trumpet" />
        </ParallaxMousemove.Layer>
      </div>
    )
  }
}

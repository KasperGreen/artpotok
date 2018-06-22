import React, { Component } from 'react'
import aircraft from './images/aircraft_right.png'
import ParallaxMousemove from 'react-parallax-mousemove'

export default class LandingAircraftRight extends Component {
  render () {
    return (
      <div className='Landing-aircraft-right-wrapper'>
        <img src={aircraft} alt="" className="Landing-image_sizer" />
        <ParallaxMousemove.Layer
          layerStyle={{
            position: 'absolute',
            width: '100%'
          }}
          config={{
            xFactor: -0.07,
            yFactor: -0.07,
            springSettings: {
              stiffness: 60,
              damping: 20
            }
          }}
        >
          <img src={aircraft} alt="Самолётик" className="Landing-aircraft-right" />
        </ParallaxMousemove.Layer>
      </div>
    )
  }
}

import React, { Component } from 'react'
import aircraft from './images/aircraft_left.png'
import ParallaxMousemove from 'react-parallax-mousemove'

export default class LandingAircraftLeft extends Component {
  render () {
    return (
      <div className='LandingAircraftLeft'>
        <div className='Landing-aircraft-left-wrapper'>
          <img src={aircraft} alt="" className="Landing-image_sizer" />
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
            <img src={aircraft} alt="Самолётик" className="Landing-aircraft-left" />
          </ParallaxMousemove.Layer>
        </div>
      </div>
    )
  }
}

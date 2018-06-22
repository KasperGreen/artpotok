import React, { Component } from 'react'
import trees_left from './images/trees_left.png'
import ParallaxMousemove from 'react-parallax-mousemove'

export default class LandingTreesLeft extends Component {
  render () {
    return (
      <div className='Landing-trees-left-wrapper'>
        <img src={trees_left} alt="" className="Landing-image_sizer" />
        <ParallaxMousemove.Layer
          layerStyle={{
            position: 'absolute',
            height: '100%'
          }}
          config={{
            xFactor: 0.03,
            yFactor: 0.03,
            springSettings: {
              stiffness: 10,
              damping: 10
            }
          }}
        >
          <img src={trees_left} alt="" className="Landing-trees-left" />
        </ParallaxMousemove.Layer>
      </div>
    )
  }
}

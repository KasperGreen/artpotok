import React, { Component } from 'react'
import trees_bottom from './images/trees_bottom.png'
import ParallaxMousemove from 'react-parallax-mousemove'

export default class LandingTreesBottom extends Component {
  render () {
    return (
      <div className='Landing-trees-bottom-wrapper'>
        <img src={trees_bottom} alt="" className="Landing-image_sizer" />
        <ParallaxMousemove.Layer
          layerStyle={{
            position: 'absolute',
            width: '100%'
          }}
          config={{
            xFactor: 0.015,
            yFactor: 0.001,
            springSettings: {
              stiffness: 25,
              damping: 25
            }
          }}
        >
          <img src={trees_bottom} alt="" className="Landing-trees-bottom" />
        </ParallaxMousemove.Layer>
      </div>
    )
  }
}

import React, { Component } from 'react'
import trees_right from './images/trees_right.png'
import ParallaxMousemove from 'react-parallax-mousemove'

export default class LandingTreesRight extends Component {
  render () {
    return (
      <div className='Landing-trees-right-wrapper'>
        <img src={trees_right} alt="" className="Landing-image_sizer" />
        <ParallaxMousemove.Layer
          layerStyle={{
            position: 'absolute',
            height: '100%'
          }}
          config={{
            xFactor: 0.02,
            yFactor: 0.02,
            springSettings: {
              stiffness: 20,
              damping: 20
            }
          }}
        >
          <img src={trees_right} alt="" className="Landing-trees-right" />
        </ParallaxMousemove.Layer>
      </div>
    )
  }
}

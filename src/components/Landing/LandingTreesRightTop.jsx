import React, { Component } from 'react'
import trees_right_top from './images/trees_right_top.png'
import ParallaxMousemove from 'react-parallax-mousemove'

export default class LandingTreesRightTop extends Component {
  render () {
    return (
      <div className='Landing-trees-right_top-wrapper'>
        <img src={trees_right_top} alt="" className="Landing-image_sizer" />
        <ParallaxMousemove.Layer
          layerStyle={{
            position: 'absolute',
            height: '100%'
          }}
          config={{
            xFactor: 0.04,
            yFactor: 0.04,
            springSettings: {
              stiffness: 15,
              damping: 15
            }
          }}
        >
          <img src={trees_right_top} alt="" className="Landing-trees-right_top" />
        </ParallaxMousemove.Layer>
      </div>
    )
  }
}

import React, { Component } from 'react'
import ParallaxMousemove from 'react-parallax-mousemove'
import './Landing.css'
import aircraft from './images_bk/aircraft.png'
import aircraft_1 from './images_bk/aircraft-1.png'
import arc from './images_bk/arc.png'
import balls from './images_bk/balls.png'
import contrabass from './images_bk/contrabass.png'
import family_1 from './images_bk/family-1.png'
import fire from './images_bk/fire.png'
import glow from './images_bk/glow.png'
import logo from './images_bk/logo.png'
import moon from './images_bk/moon.png'
import stars from './images_bk/stars.png'
import tree from './images_bk/tree.png'
import tree_1 from './images_bk/tree-1.png'
import trumpet from './images_bk/trumpet.png'

export default class Landing extends Component {
  render () {
    const style = {
      inner: {
        position: 'absolute',
        width: '100%'
      },
      outer: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        overflow: 'hidden',
        top: 0,
        left: 0
      }
    }
    return (
      <div className="Landing" ref={this.landing_element}>
        <img src={tree_1} alt="" className="Landing-tree-left" />
        <img src={logo} alt="" className="logo" />
        <img src={tree} alt="" className="Landing-tree-right" />
        <img src={arc} alt="" className="Landing-arc" />
        <img src={stars} alt="" className="Landing-stars" />
        <img src={moon} alt="" className="Landing-moon" />

        <div className="date">2-5 августа 2018
          <hr />
          <span>Количество билетов ограничено</span>
        </div>
        <div className="Landing-family">
          <img data-depth="0" src={family_1} alt="Платформа" className="Landing-family-base" />
          <img src={fire} alt="Огонь" className="Landing-family-fire" />
          <img src={balls} alt="Мячики" className="Landing-family-balls" />
        </div>
        <ParallaxMousemove containerStyle={style.outer}>

          <div className='Landing-aircraft-left-wrapper'>
            <img src={aircraft} alt="" className="Landing-image_sizer" />
            <ParallaxMousemove.Layer
              layerStyle={style.inner}
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

          <div className='Landing-thumpet-wrapper'>
            <img src={trumpet} alt="" className="Landing-image_sizer" />
            <ParallaxMousemove.Layer
              layerStyle={style.inner}
              config={{
                xFactor: -0.1,
                yFactor: -0.1,
                springSettings: {
                  stiffness: 5,
                  damping: 2
                }
              }}
            >
              <img src={trumpet} alt="" className="Landing-thumpet" />
            </ParallaxMousemove.Layer>
          </div>

          <img data-depth="0.03" src={aircraft_1} alt="" className="aircraft right" />




          <div className='Landing-glow-wrapper'>
            <img src={glow} alt="" className="Landing-image_sizer" />
            <ParallaxMousemove.Layer
              layerStyle={style.inner}
              config={{
                xFactor: -0.02,
                yFactor: -0.02,
                springSettings: {
                  stiffness: 10,
                  damping: 10
                }
              }}
            >
              <img src={glow} alt="" className="Landing-glow" />
            </ParallaxMousemove.Layer>
          </div>

        </ParallaxMousemove>
      </div>
    )
  }

  landing_element = React.createRef()

  componentDidMount () {
    window.addEventListener('load', () => {
      console.log(' → Все картинки загружены ←  | ')

    })
  }
}

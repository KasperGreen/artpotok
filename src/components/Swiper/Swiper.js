import React, { Component } from 'react'
import SwiperLib from 'react-id-swiper'
import 'react-id-swiper/src/styles/css/swiper.css'
import PropTypes from 'prop-types'
import './Swiper.css'

export default class Swiper extends Component {
  render () {
    const {
      props: {
        slides
      }
    } = this
    return (
      <div className='Swiper'>
        <SwiperLib
          {...{
            renderCustomPrevButton: () => <button className="Swiper-button-prev" />,
            renderCustomNextButton: () => <button className="Swiper-button-next" />,
            navigation: {
              nextEl: '.Swiper-button-next',
              prevEl: '.Swiper-button-prev'
            },
            slidesPerView: 4,
            slidesPerGroup: 4,
            pagination: {
              el: '.Swiper-button-dots',
              clickable: true,
            },
            loop: true,
            breakpoints: {
              632: {
                slidesPerView: 1,
                slidesPerGroup: 1,

              },
              1024: {
                slidesPerView: 2,
                slidesPerGroup: 2,
              }
            }

          }}
        >
          {slides.map((slide, key) => {
            return (
              <div key={key}>{slide}</div>
            )
          })}
        </SwiperLib>
      </div>
    )
  }

  swiper = false
  static defaultProps = {
    slides: [],
  }

  static propTypes = {
    slides: PropTypes.arrayOf(PropTypes.node),
  }

}

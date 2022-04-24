import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './carousel.module.css';
import { ContainerBlack } from '../styles/GlobalTheme';

export default function Carousel () {
    const settings = {
      dots: true,
      autoplay: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <ContainerBlack>
      <div className={styles.container}>
        <Slider {...settings}>
        <div className={styles.wrapper}>
          <img src='/images/phone.png' alt="Credit to Joshua Earle on Unsplash"/>
        </div>
        <div><img src='/images/phone.png' alt="Credit to Alisa Anton on Unsplash"/></div>
        <div><img src='/images/phone.png' alt="Credit to Igor Ovsyannykov on Unsplash"/></div>
        <div><img src='/images/phone.png' alt="Credit to Pierre Châtel-Innocenti on Unsplash"/></div>
        <div><img src='/images/phone.png' alt="Credit to Richard Nolan on Unsplash"/></div>
        <div><img src='/images/phone.png' alt="Credit to Cristina Gottardi on Unsplash"/></div>
        </Slider>
      </div>
      </ContainerBlack>
    );
}
/* Importando estilos do slick-carousel */
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// ImagensSection.js
import React from 'react';
import Slider from 'react-slick';
import style from './ImagensSection.module.css'; // Se tiver estilos adicionais
import Image from "next/image";
import Img from '../../../public/ImagensSection/calhas1.jpg';
import Img2 from '../../../public/ImagensSection/calhas2.jpg';
import Img3 from '../../../public/ImagensSection/calhas3.jpg';

const ImagensSection = () => {
  // Configurações do carrossel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className={style['carousel-container']}>
      <Slider {...settings}>
        <div className={style.holdImg}>
          <Image className={style.img1} src={Img} alt="Imagem 1"/>
        </div>
        <div className={style.holdImg}>
          <Image className={style.img2} src={Img2} alt="Imagem 2" />
        </div>
        <div className={style.holdImg}>
          <Image className={style.img3} src={Img3} alt="Imagem 3" />
        </div>
        <div className={style.holdAll}>
          <div className={style.holdVideos}>
            <video className={style.video} controls>
              <source src='/Video/Video3.mp4' type="video/mp4" />
            </video>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default ImagensSection;

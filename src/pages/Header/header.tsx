import React from 'react'
import style from './header.module.css'
import Img from '../../../public/Logo/Logo.png'
import Image, { StaticImageData } from 'next/image'



const Headerr = () => {
  return (
    <div className={style.allIn} id='home'>
      <div className={style.HoldOpcoes}>
          <Image className={style.ImgLogo} src={Img} alt='Logo' />
        <div className={style.opcoes}>
          <a href='#home' className={style.pp}>Home</a>
          <a href='#produtos'>Produtos</a>
          <a href='#contato'>Contato</a>
          <a href='#sobre'>Sobre</a>
        </div>
      </div>
    </div>
  ) 
}

export default Headerr

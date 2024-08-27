import Image from 'next/image'
import React from 'react'
import img from '../../../public/Produtos/p.jpg'
import style from './produtos.module.css'
import img1 from '../../../public/Produtos/calha4.jpg'
import img2 from '../../../public/Produtos/piso.jpg'

export default function Produtos() {
  return (
    <section className={style.container} id='produtos'>
      <h1 className={style.title}>Produtos</h1>
      <div className={style.section}>
        <div className={style.holdAll}>
        <h2>Calhas</h2>
        <Image className={style.img}  alt='img' src={img}/>
      </div>
      <div className={style.holdAll}>
        <h2>Telhados</h2>
        <Image className={style.img} alt='img' src={img1}/>
      </div>
      <div className={style.holdAll}>
        <h2>Outros</h2>
        <Image property='priority' className={style.img} alt='img' src={img2}/>
        </div>
      </div>
    </section>
  )
}

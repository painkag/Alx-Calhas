import Image from 'next/image'
import React from 'react'
import img from '../../../public/QuemSomos/Quem somos.jpg'
import style from './quemSomos.module.css'
import SobreModal from '../SobreModal/sobre'

export default function QuemSomos() {
  return (
    <div className={style.holdAll} id='sobre'>
        <div className={style.teste}>
            <div className={style.holdText}>
                <h1>Somos a A.L.X CALHAS</h1>
                <h3>PIONEIRISMO A ORIGEM DE UMA MARCA FORTE.</h3>
                <p>Com mais de 100 anos de história, a calha forte produz centenas de toneladas de calhas, rufos, telhas e outros produtos por mês</p>
                {/* @ts-ignore */}
                <SobreModal className={style.modal} color='primary' textButton='Saiba mais' textH2='Sobre nós' textP='Somos uma empresa dedicada a fornecer soluções inovadoras.'/>
            </div>
            <div className={style.holdImg}>
                <Image src={img} alt='Imagem de quem somos' className={style.img} />
            </div>
        </div>
    </div>
  )
}

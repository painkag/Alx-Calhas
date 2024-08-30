import Image from 'next/image';
import React from 'react';
import img from '../../../public/QuemSomos/Quem somos.jpg';
import style from './quemSomos.module.css';
import SobreModal from '../SobreModal/sobre';

export default function QuemSomos() {
  return (
    <div className={style.holdAll} id="sobre">
      <div className={style.teste}>
        <div className={style.holdText}>
          <h1 className={style.h11}>Somos a A.L.X CALHAS</h1>
          <h3 className={style.h33}>PIONEIRISMO A ORIGEM DE UMA MARCA FORTE.</h3>
          <p>
          A ALX Calhas tem anos de experiência na produção de calhas, rufos, telhas e outros produtos, sempre focando na qualidade e na satisfação dos nossos clientes.
          </p>
          <SobreModal
            textButton="Saiba mais"
            textH2="Sobre nós"
            textP="Somos uma empresa dedicada a fornecer soluções inovadoras."
          />
        </div>
        <div className={style.holdImg}>
          <Image src={img} alt="Imagem de quem somos" className={style.img} />
        </div>
      </div>
    </div>
  );
}

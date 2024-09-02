import React from 'react';
import Buttonn from '../Button/button';
import { handleWhatsClick } from '../../utils/whatszapUtils';
import style from './orcamento.module.css';

export default function Orcamento() {
  const phoneNumber = '+5511987782295';
  const message = 'Olá, gostaria de mais informações.';

  const handleClick = () => {
    handleWhatsClick({ phoneNumber, message });
  };

  return (
    <section className={style.section}>
      <h2 className={style.title}>Faça seu orçamento</h2>
      <p className={style.text}>Entre em contato conosco para obter um orçamento personalizado para o seu projeto.</p>
      <Buttonn onClick={handleClick} />
      <div className={style.pulser}></div>
    </section>
  );
}

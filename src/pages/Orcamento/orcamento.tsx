import React from 'react';
import Buttonn from '../Button/button';
import { handleWhatsClick } from '../../utils/whatszapUtils';
import style from './orcamento.module.css';

const phoneNumber = '+5511987782295';
const message = 'Olá, gostaria de mais informações.';

export default function Orcamento() {
  const handleClick = () => {
    handleWhatsClick({ phoneNumber, message });
    // Chama a função de rastreamento de conversão do Google
    if (typeof window.gtag === 'function') {
      (window as any).gtag('event', 'conversion', {
        'send_to': 'AW-16506400196/8cdpCIHjv84ZEMTb7r49',
        'value': 1.0,
        'currency': 'BRL',
        'event_callback': () => console.log('Conversion tracked!')
      });
    } else {
      console.warn('gtag function is not available.');
    }
  };

  return (
    <section className={style.section}>
      <div>
        <h2 className={style.title}>Faça seu orçamento</h2>
        <p className={style.text}>Entre em contato conosco para obter um orçamento personalizado para o seu projeto.</p>
        <Buttonn onClick={handleClick} />
        <div className={style.pulser}></div>
      </div>
    </section>
  );
}

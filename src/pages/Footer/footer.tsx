import Image from 'next/image'
import React from 'react'
import { FaSquareWhatsapp } from "react-icons/fa6";
import Img from '../../../public/Logo/Logo.png'
import { FaPhoneVolume } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import style from './footer.module.css';
import { handleWhatsClick } from '../utils/whatszapUtils';

export default function Footer() {
  return (
    <footer className={style.footer} id='contato'>
      <div className={style.containerHoldAll}>
        <div className={style.box}>
         <Image alt='Logo footer' src={Img} width={30}/>
        </div>
        <div className={style.box}>
         <FaSquareWhatsapp className={style.zap} onClick={() => handleWhatsClick({phoneNumber:'+5511987782295',message:'Olá, gostaria de mais informações.'})} size={22}/>
        </div>
        <div className={style.box}>
         <FaPhoneVolume />
         <p>(11) 98778-2295</p>
        </div>
        <div className={style.box}>
         <MdOutlineEmail/>
         <p>victorcamargo9903@gmail.com</p>
        </div>
      </div>
    </footer>
  )
}

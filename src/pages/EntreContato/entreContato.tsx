import Image from 'next/image'
import React from 'react'
import img from '../../../public/EntreContato/contact-us-1524408_1280.png'
import styles from './entreContato.module.css'
import Buttonn from '../Button/button'
import { handleWhatsClick } from '@/utils/whatszapUtils'

export default function EntreContato() {
    return (
        <div className={styles.containerOrigin}>
            <div className={styles.containerAll}>

                <div className={styles.containerGroup}>
                    <h1>
                        Entre em contato conosco
                    </h1>
                    <p>
                        Se você tiver alguma dúvida ou precisar de mais informações, entre em contato
                    </p>
                    <Buttonn onClick={() => handleWhatsClick({phoneNumber:'+5511987782295',message:'Olá, gostaria de mais informações.'})}/>
                </div>
                <div className={styles.containerImage}>
                    <Image alt='Imagem Contato' src={img} className={styles.img} />
                </div>

            </div>

        </div>
    )
}

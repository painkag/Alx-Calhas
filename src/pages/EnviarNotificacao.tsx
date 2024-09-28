import React from 'react'
import emailjs from 'emailjs-com'

export default function EnviarNotificacao() {
  const sendEmail = () => {
    const templateParams = {
      message: "O botão foi clicado!",
      timestamp: new Date().toLocaleString(), // Formata a data para string
    };

    emailjs.send('service_rttos6k', 'template_vmc9jzm', templateParams, 'h_BMIWtJYJS3kBt-p')
      .then((response) => {
        console.log('Notificação enviada com sucesso:', response.status, response.text);
      })
      .catch((error) => {
        console.error('Erro ao enviar notificação:', error);
      });
  };

  // Chame a função de envio quando o componente for montado, ou em resposta a um evento
  sendEmail();
}

interface WhatsProps {
    phoneNumber: string;
    message: string;
  }
  
  export function handleWhatsClick({ phoneNumber, message }: WhatsProps) {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  }
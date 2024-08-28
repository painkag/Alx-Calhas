import React from "react";
import {Button, ButtonGroup} from "@nextui-org/button";
import style from './button.module.css'
interface ButtonProps{
    onClick ?: () => void;
    size ?: string
    color?:string
}

export default function Buttonn({onClick}: ButtonProps) {
    
  return (
    <Button className={style.button} color="primary" onClick={onClick}>
      Orçamento
    </Button>
  );
}
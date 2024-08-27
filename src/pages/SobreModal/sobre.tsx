import React from "react";
import { Popover, PopoverTrigger, PopoverContent, Button, PopoverProps } from "@nextui-org/react";
import style from './sobre.module.css';

interface PropsText extends PopoverProps {
  textButton: string;
  textH2: string;
  textP: string;
}

export default function SobreModal({ textButton, textH2, textP, ...props }: PropsText) {
  return (
    <Popover {...props}>
      <PopoverTrigger className={style.button}>
        <Button>{textButton}</Button>
      </PopoverTrigger>
      <PopoverContent className={style.popoverContent}> {/* Adicione um className aqui */}
        <div className={style.holdAll}>
          <div className={style.h2}>{textH2}</div>
          <div className={style.p}>{textP}</div>
        </div>
      </PopoverContent>
    </Popover>
  );
}

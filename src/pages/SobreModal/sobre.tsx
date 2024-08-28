import style from './sobre.module.css';

interface SobreModalProps {
  textButton: string;
  textH2: string;
  textP: string;
}

import React from "react";
import {Popover, PopoverTrigger, PopoverContent, Button} from "@nextui-org/react";

export default function App({textButton,textH2,textP}:SobreModalProps) {
  return (
    <Popover placement="right">
      <PopoverTrigger>
        <Button className={style.button}>{textButton}</Button>
      </PopoverTrigger>
      <PopoverContent className={style.popoverContent}>
        <div className={style.holdAll}>
          <div className={style.h2}>{textH2}</div>
          <div className={style.p}>{textP}</div>
        </div>
      </PopoverContent>
    </Popover>
  );
}

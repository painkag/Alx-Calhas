import { Metadata } from "next";
import { Html, Head, Main, NextScript } from "next/document";

export const metadata: Metadata = {
  title:"Alx calhas",
  description: "Oferecemos instalação e manutenção de calhas e rufos, garantindo proteção e durabilidade para sua casa"
}
//Não esta em uso isso 

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

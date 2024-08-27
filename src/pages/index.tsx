import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Headerr from "./Header/header";
import ImagensSection from "./ImagensSection/imagensSection";
import QuemSomos from "./Quem somos/quemSomos";
import Orcamento from "./Orcamento/orcamento";
import Produtos from "./NossosProdutos/produtos";
import Footer from "./Footer/footer";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <Head>
        <title>Alx Calhas</title>
        <meta name="description" content="Oferecemos instalação e manutenção de calhas e rufos, garantindo proteção e durabilidade para sua casa" />
        <link rel="icon" href="/Logo/Logo.png" />
      </Head>
    <div className={styles.all}>
      <Headerr/>
      <ImagensSection/>
      <QuemSomos/>
      <Produtos/>     
      <Orcamento/>
      <Footer/>
    </div>
    </>
  );
}

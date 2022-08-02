import Head from "next/head";
import Image from "next/image";
import About from "../components/About";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Services from "../components/Services";
import TextSection from "../components/TextSection";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
  
    <>
    <Head>
      <title>Scratch Record | Home</title>
      <meta name="keywords" content="scratch records" />
    </Head>
     <div>
      <Banner />
      <TextSection />
      <Services />
    </div>
    </>
  );
}

import Head from "next/head";
import Image from "next/image";
import About from "../components/About";
import Banner from "../components/Banner";
import BannerLogo from "../components/BannerLogo";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Gallery2 from "../components/Gallery2";
import Header from "../components/Header";
import Services from "../components/Services";
import Social from "../components/Social";
import TextSection from "../components/TextSection";
import VideoCarousel from "../components/VideoCarousel";
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
      <About />
      <Services />
      <Gallery2 />
      <Social />
      <BannerLogo />
      <Gallery />
      <Contact />
    </div>
    </>
  );
}


// SCRATCH RECORDS
// Scratch Records is a musical label base in Douala Cameroon, Central Africa.  
// Vision: Taking entertainment to it's summit.
// Mission: Scratch Records searches, recognises, signs, produces and promotes artists of all gender and all genre of music.
// Scratch Records runs a recording studio and does music distribution too to music online stores and platforms.
// Currently Scratch Records has signed one female gospel artist in the name of Passigreat with some songs already out on all major music stores, and currently working on more release.
// Contacts and names of social media platforms of Scratch Records:
// Tel: +237674421540
// Tel: +237695770772
// YouTube: Scratch Records
// Facebook: Scratch Records
// Instagram: Scratch Records
// Twitter: Scratch Records
// Email: rholfterence@gmail.com

// Name of scratch records artist's social media platforms:
// YouTube: Passigreat
// Facebook: Passigreat official
// Instagram: Passigreat
// Email: tambuapasi@gmail.com
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import CardCariMobil from "../components/Contents/CardCariMobil";
import { useEffect } from 'react';
const CariMobil = () => {
  useEffect(() => {
    document.getElementsByClassName("btn-hero")[0].style.display = "none";
    console.log('mount it!');
}, []);
  return (
    <>
      <Header />
      <CardCariMobil />
      <Footer />
    </>
  );
};

export default CariMobil;

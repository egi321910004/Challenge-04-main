// import { Component } from "react";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import CardHasilPencarian from "../components/Contents/CardHasilPencarian";
import ListCar from "../components/Contents/ListCar";
// import "../HasilPencarian.css";
// import axios from "axios";
import { useEffect } from "react";

const HasilPencarian = () => {
    useEffect(() => {
        document.getElementsByClassName("hero")[0].style.display="none";
        document.getElementsByClassName("btn-hero")[0].style.display = "none";
        document.getElementById("header").style.height = "266px";
        document.getElementById("footer").style.marginTop = "872px";
        console.log('mount it!');
    }, []);

    return (
        <>
        <Header />
        <CardHasilPencarian />
        <ListCar />
        <Footer />
        </>
    ) 
}

export default HasilPencarian;

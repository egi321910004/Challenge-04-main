import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import CardCariInactive from '../components/Contents/CardCariInactive';
import DetailCar from '../components/Contents/DetailCar';
import { useEffect } from 'react';
import '../DetailMobil.css';
const DetailMobil = () => {
    useEffect(() => {
        document.getElementsByClassName("hero")[0].style.display="none";
        document.getElementsByClassName("btn-hero")[0].style.display = "none";
        document.getElementById("header").style.height = "266px";
        document.getElementById("footer").style.marginTop = "890px";
        console.log('mount it!');
    }, []);

    return (
        <>
        <Header />
        <CardCariInactive />
        <DetailCar />
        <Footer />
        </>
    )
}

export default DetailMobil;
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import CariMobil from './pages/CariMobil';
import HasilPencarian from './pages/HasilPencarian';
import DetailMobil from './pages/DetailMobil';

const RouteApp = () => {
    return (
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/carimobil" element={<CariMobil />} />
            <Route path="/hasilpencarian" element={<HasilPencarian />} />
            <Route path="/detailmobil/:idCar" element={<DetailMobil />} />
        </Routes>
        </BrowserRouter>
        </>
    )
}

export default RouteApp;
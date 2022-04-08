import { useNavigate } from 'react-router-dom';
const CtaBanner = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="cta-banner">
        <div className="cta-text">
          <h1 className="cta-text">Sewa Mobil di (Lokasimu) Sekarang</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="btn btn-success btn-cta" onClick={() => navigate("/carimobil")}>Mulai Sewa Mobil</button>
        </div>
      </div>
    </>
  );
};

export default CtaBanner;

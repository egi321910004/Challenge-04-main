import { useNavigate } from 'react-router-dom';
const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <header id="header">
        <nav className="navbar sticky-top padding-nav">
          <div className="container">
            <div className="logo"></div>
            <div>
              <ul className="navbar-nav flex-row">
                <li className="nav-item">
                  <a className="nav-link" href="#our-services">
                    Our Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#why-us">
                    Why Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#testimonial">
                    Testimonial
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#faq">
                    FAQ
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#register">
                    Register
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container">
          <section className="row hero">
            <div className="col-md-6 col-sm-12 align-self-center">
              <h1>
                Sewa & Rental Mobil Terbaik di <br /> kawasan (Lokasimu)
              </h1>
              <p>
                Selamat datang di Binar Car Rental. Kami menyediakan mobil
                kualitas terbaik dengan harga terjangkau. Selalu siap melayani
                kebutuhanmu untuk sewa mobil selama 24 jam.
              </p>
              <button className="btn-hero btn btn-succes" onClick={() => navigate("/carimobil")}>
                Mulai Sewa Mobil
              </button>
            </div>
            <div className="col-md-6 col-sm-12">
              <img src="/img/img_car.png" className="img-hero" alt="hero" />
            </div>
          </section>
        </div>
      </header>
    </>
  );
};

export default Header;

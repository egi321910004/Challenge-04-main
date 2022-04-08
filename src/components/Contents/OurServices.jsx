const OurServices = () => {
  return (
    <>
      <div id="our-services">
        <section className="row services">
          <div className="col-md-6 col-sm-12">
            <img src="/img/img_service.png" alt="" />
          </div>
          <div className="col-md-6 align-self-center">
            <h2>Best Car Rental for any kind of trip in (Lokasimu)!</h2>
            <p>
              Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga
              lebih <br /> murah dibandingkan yang lain, kondisi mobil baru,
              serta kualitas <br /> pelayanan terbaik untuk perjalanan wisata,
              bisnis, wedding, meeting, dll.
            </p>
            <div className="services-list">
              <ul className="list-group services-ul">
                <li className="list-group-item d-flex align-items-center li-services">
                  <img src="/img/icon_1.svg" alt="" />
                  <span>Sewa Mobil Dengan Supir di Bali 12 Jam</span>
                </li>
                <li className="list-group-item d-flex align-items-center li-services">
                  <img src="/img/icon_1.svg" alt="" />
                  <span>Sewa Mobil Lepas Kunci di Bali 24 Jam</span>
                </li>
                <li className="list-group-item d-flex align-items-center li-services">
                  <img src="/img/icon_1.svg" alt="" />
                  <span>Sewa Mobil Jangka Panjang Bulanan</span>
                </li>
                <li className="list-group-item d-flex align-items-center li-services">
                  <img src="/img/icon_1.svg" alt="" />
                  <span>Gratis Antar - Jemput Mobil di Bandara</span>
                </li>
                <li className="list-group-item d-flex align-items-center li-services">
                  <img src="/img/icon_1.svg" alt="" />
                  <span>Layanan Airport Transfer / Drop In Out</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default OurServices;

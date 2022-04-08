const WhyUs = () => {
  return (
    <>
      <div id="why-us">
        <h2>Why Us</h2>
        <p>Mengapa harus pilih Binar Car Rental?</p>
        <div className="item-list">
          <div className="card">
            <div className="card-body">
              <img className="icon-image" src="/img/icon_complete.svg" alt="" />
              <h3 className="h3-card">Mobil Lengkap</h3>
              <p className="card-text">
                Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan
                terawat
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <img className="icon-image" src="/img/icon_price.svg" alt="" />
              <h3 className="h3-card">Harga Murah</h3>
              <p className="card-text">
                Harga murah dan bersaing, bisa bandingkan harga kami dengan
                rental mobil lain
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <img className="icon-image" src="/img/icon_24hrs.svg" alt="" />
              <h3 className="h3-card">Layanan 24 Jam</h3>
              <p className="card-text">
                Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga
                tersedia di akhir minggu
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <img
                className="icon-image"
                src="/img/icon_professional.svg"
                alt=""
              />
              <h3 className="h3-card">Sopir Profesional</h3>
              <p className="card-text">
                Sopir yang profesional, berpengalaman, jujur, ramah dan selalu
                tepat waktu
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyUs;

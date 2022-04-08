const Faq = () => {
  return (
    <>
      <div id="faq">
        <div className="faq-row">
          <h2>Frequently Asked Question</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
        <div className="faq-row">
          <ul className="list-group faq-ul">
            <li className="list-group-item d-flex justify-content-between align-items-center li-faq">
              Apa saja syarat yang dibutuhkan?
              <span>
                <img src="/img/dropdown.svg" alt="" />
              </span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center li-faq">
              Berapa hari minimal sewa mobil lepas kunci?
              <span>
                <img src="/img/dropdown.svg" alt="" />
              </span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center li-faq">
              Berapa hari sebelumnya sebaiknya booking sewa mobil?
              <span>
                <img src="/img/dropdown.svg" alt="" />
              </span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center li-faq">
              Apakah Ada biaya antar-jemput?
              <span>
                <img src="/img/dropdown.svg" alt="" />
              </span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center li-faq">
              Bagaimana jika terjadi kecelakaan
              <span>
                <img src="/img/dropdown.svg" alt="" />
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Faq;

import "../css/CardCariInactive.css";
const CardCariInactive = () => {
  return (
    <>
      <div className="cariInactive position-absolute start-50 translate-middle bg-light">
      <h1>Pencarianmu</h1>
        <div className="frameCari">
          <div className="frameInput">
            <label>Tipe Driver</label>
            <input type="text" className="inputStyle" disabled></input>
          </div>
          <div className="frameInput">
            <label>Tanggal</label>
            <input type="date" className="inputStyle" disabled></input>
          </div>
          <div className="frameInput">
            <label>Waktu Jemput/Ambil</label>
            <input type="time" className="inputStyle" disabled></input>
          </div>
          <div className="frameInput">
            <label>Jumlah Penumpang (optional)</label>
            <input className="inputStyle" disabled></input>
          </div>
          <div className="frameInput"></div>
        </div>
      </div>
    </>
  );
};

export default CardCariInactive;

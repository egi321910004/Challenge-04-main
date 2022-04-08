import "../css/CardHasilPencarian.css";
const CardHasilPencarian = () => {
  return (
    <>
      <div className="hasilPencarian position-absolute start-50 translate-middle bg-light">
        <h1>Pencarianmu</h1>
        <div className="frameCari">
          <div className="frameInput">
            <label>Tipe Driver</label>
            <select className="inputStyle">
              <option value="" disabled selected>
                Pilih Tipe Driver
              </option>
              <option value="1">Dengan Sopir</option>
              <option value="2">Tanpa Sopir (Lepas Kunci)</option>
            </select>
          </div>
          <div className="frameInput">
            <label>Tanggal</label>
            <input
              type="date"
              className="inputStyle"
              placeholder="Pilih Tanggal"
            ></input>
          </div>
          <div className="frameInput">
            <label>Waktu Jemput/Ambil</label>
            <input
              type="time"
              className="inputStyle"
              placeholder="Pilih Waktu"
            ></input>
          </div>
          <div className="frameInput">
            <label>Jumlah Penumpang (optional)</label>
            <input
              className="inputStyle"
              placeholder="Jumlah Penumpang"
            ></input>
          </div>
          <div className="frameInput">
            <button className="button-edit">Edit</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardHasilPencarian;

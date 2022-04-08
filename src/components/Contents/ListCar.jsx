import { Component } from "react";
import '../css/ListCar.css';
import axios from "axios";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
class HasilPencarian extends Component {
  constructor() {
    super();
    this.state = {
      listCar: [],
      isShow: false,
    };
  }
  async getDataCar() {
    const { data } = await axios(
      "https://rent-cars-api.herokuapp.com/admin/car"
    );

    this.setState({ listCar: data });
  }

  shouldComponentUpdate(newProps, newState) {
    return true;
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  componentDidMount() {
    console.log(this.state);
    this.getDataCar();
    this.setState({ isShow: true });
  }

  render() {
    return (
      <>
      <div className="listCar position-absolute start-50 translate-middle">
        {this.state.listCar.slice(0, 3).map((car) => {
          return (
            <div key={car.id}>
                <div className="cardMobil">
                  <div className="frameCard">
                    <img className="cardImage" src={car.image} alt="mobil" />
                    <div className="textCard">
                      <p>{car.name}</p>
                      <h1>
                          { `Rp ${car.price.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')} / hari` }
                      </h1>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </div>
                    <div className="iconCard">
                      <img src="/img/users.svg" alt="jumlah orang" />
                      <p>4 orang</p>
                    </div>
                    <div className="iconCard">
                      <img src="/img/settings.svg" alt="tipe mobil" />
                      <p>Manual</p>
                    </div>
                    <div className="iconCard">
                      <img src="/img/calendar.svg" alt="tahun" />
                      <p>Tahun 2020</p>
                    </div>
                    <Link style={{ textDecoration: 'none' }} to={`/detailmobil/${car.id}`}>
                    <button className="buttonCard">Pilih Mobil</button>
                    </Link>
                  </div>
                </div>
              </div>
          );
        })}
        </div>
      </>
    );
  }
}
// onClick={() => this.props.navigate('/detailmobil')}
function WithNavigate(props) {
    let navigate = useNavigate();
    return <HasilPencarian {...props} navigate={navigate} />
}

export default WithNavigate;

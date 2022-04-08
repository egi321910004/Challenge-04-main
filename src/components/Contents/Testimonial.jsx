const Testimonial = () => {
  return (
    <>
      <div id="testimonial">
        <h2 className="text-center">Testimonial</h2>
        <p className="text-center main-text">
          Berbagai review positif dari para pelanggan kami
        </p>

        <div className="testi-list">
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="card testi start-50 translate-middle">
                  <div className="card-body card-content">
                    <div className="row">
                      <div className="col-md-3">
                        <img
                          className="img-car"
                          src="/img/img_photo2.svg"
                          alt=""
                        />
                      </div>
                      <div className="col-md-9 carousel-text">
                        <img src="/img/rate.svg" alt="" />
                        <p style={{ marginTop: "8px" }}>
                          “Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod lorem ipsum dolor sit amet,
                          consectetur adipiscing elit, sed do eiusmod lorem
                          ipsum dolor sit amet, consectetur adipiscing elit, sed
                          do eiusmod”
                        </p>
                        <p style={{ fontWeight: "bold" }}>John Dee 32, Bromo</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="card testi start-50 translate-middle">
                  <div className="card-body card-content">
                    <div className="row">
                      <div className="col-md-3">
                        <img
                          className="img-car"
                          src="/img/img_photo3.svg"
                          alt=""
                        />
                      </div>
                      <div className="col-md-9 carousel-text">
                        <img src="/img/rate.svg" alt="" />
                        <p style={{ marginTop: "8px" }}>
                          “Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod lorem ipsum dolor sit amet,
                          consectetur adipiscing elit, sed do eiusmod lorem
                          ipsum dolor sit amet, consectetur adipiscing elit, sed
                          do eiusmod”
                        </p>
                        <p style={{ fontWeight: "bold" }}>John Dee 32, Bromo</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="testi-button position-absolute start-50 translate-middle">
              <button
                className="carousel-control-prev car-but-left"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <img src="/img/left-button.svg" alt="" />
              </button>
              <button
                className="carousel-control-next car-but-right"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <img src="/img/right-button.svg" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;

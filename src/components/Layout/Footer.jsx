const Footer = () => {
  return (
    <>
      <footer id="footer">
        <div>
          <p>
            Jalan Suroyo No. 161 Mayangan Kota <br /> Probolinggo 672000
          </p>
          <p>binarcarrental@gmail.com</p>
          <p>081-233-334-808</p>
        </div>
        <div className="foot-content">
          <p>Our services</p>
          <p>Why Us</p>
          <p>Testimonial</p>
          <p>FAQ</p>
        </div>
        <div className="foot-content">
          <p>Connect with us</p>
          <div className="sosmed-list">
            <a href="https://web.facebook.com/binaracademy">
              <img src="/img/icon_facebook.svg" alt="facebook" />
            </a>
            <a href="https://instagram.com/academybinar">
              <img src="/img/icon_instagram.svg" alt="instagram" />
            </a>
            <a href="https://twitter.com/academybinar">
              <img src="/img/icon_twitter.svg" alt="twitter" />
            </a>
            <a href="mailto:binarcarrental@gmail.com">
              <img src="/img/icon_mail.svg" alt="email" />
            </a>
            <a href="kosong">
              <img src="/img/icon_twitch.svg" alt="twitch" />
            </a>
          </div>
        </div>
        <div className="foot-content">
          <p>Copyright Binar 2022</p>
          <div className="logo"></div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

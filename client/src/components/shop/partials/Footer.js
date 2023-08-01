import React, { Fragment } from "react";
import './style.css'
//import moment from "moment";

function Footer(props) {
  return (
    <Fragment>

      <footer style={{ background: "#303031", color: "#87898A", display: "flex", justifyContent: "space-between", padding: "20px" }} className="z-10">
        <div className="footer-info" style={{ flex: "1", textAlign: "left" }}>
          <h3>Contact</h3>
          <p>Phone number: (123) 456-7890</p>
          <p>Email: contact@example.com</p>
          <p>Address: 158 Hoà Hưng, Phường 13, Quận 10, Thành phố Hồ Chí Minh</p>
          <p>Links: <a href="/faq">FAQ</a> | <a href="/shipping">Delivery policy</a></p>
          {/* ... Thêm các thông tin khác bạn muốn hiển thị */}
        </div>


        <div className="gg-maps-container" style={{ flex: "1", textAlign: "right" }}>
          <h3>Maps</h3>
          <iframe
            title="Google Map"
            width="100%" height="200"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{ border: 0 }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d644.5987971749479!2d106.67398824537106!3d10.779152926570955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f0f644b9235%3A0x9e73b737f9c0d8f!2sSweet%20Bakery%20-%20B%C3%A1nh%20Kem%20Qu%E1%BA%ADn%2010!5e0!3m2!1svi!2s!4v1690847381627!5m2!1svi!2s"
          ></iframe>

        </div>
      </footer>

    </Fragment>
  );
}

export default Footer;

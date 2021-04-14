import React from 'react';
import qr_img from '../assets/images/qrcode.JPG';

const QrCode = () => (
    <div className="card">
        <div className="header">
            <h2 className="title">Order via Phone</h2>
            <p className="category">Scan the code/click the button below.</p>
            <img src = {qr_img} alt = "QR Code: Order via Phone"
            width = "250px"></img>
            <div>
                <a href = "https://now.order.place/#/store/102829/mode/prekiosk" target = "_blank">
                <button className="mybutton">Make an order</button>
                </a>
            </div>
        </div>
    </div>
  );
  
  export default QrCode;
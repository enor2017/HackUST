import React from 'react';
import qr_img from '../assets/images/qrcode.JPG';

const QrCode = () => (
    <div className="card">
        <div className="card-header">
            <h2>Order via Phone</h2>
            <p>Scan the code/click the button below.</p>
            <div className="qrcode-div">
                <img src = {qr_img} alt = "QR Code: Order via Phone"
                width = "250px"></img>
            </div>
            <div className="qrcode-div">
                <a href = "https://now.order.place/#/store/102829/mode/prekiosk" target = "_blank">
                <button className="mybutton">Make an order</button>
                </a>
            </div>
        </div>
    </div>
  );
  
  export default QrCode;
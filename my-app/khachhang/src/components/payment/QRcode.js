import React, { Component } from 'react';
import qrcode from './qrcode.png' ;

class QRcode extends Component {
    render() {
        return (
            <div name="qrcode" style={{textAlign:"center" }}>
                 <img src={qrcode} alt="Momo's QR code" sizes="70%"/>
            </div>
        );
    }
}

export default QRcode;
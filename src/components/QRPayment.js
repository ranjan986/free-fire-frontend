import React from "react";
import img from "../assets/upi-qr.png";

const QRPayment = () => {
  const copyUPI = () => {
    const upiId = "ranjankushwaha861-1@oksbi";
    navigator.clipboard.writeText(upiId)
      .then(() => alert("UPI ID copied: " + upiId))
      .catch(() => alert("Failed to copy UPI ID"));
  };

  return (
    <section className="qr-payment">
      <h2>Pay Entry Fee</h2>
      <p>Scan the QR code below to pay using UPI.</p>
      <img src={img} alt="UPI QR Code" />
      <p id="upi">
        UPI ID: <span id="upiId">ranjankushwaha861-1@oksbi</span>
        <button onClick={copyUPI}>Copy</button>
      </p>
    </section>
  );
};
export default QRPayment;

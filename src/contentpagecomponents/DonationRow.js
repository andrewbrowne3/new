import React from 'react';
import '../css/donationrow.css';

const DonationRow = () => (
  <section className="donation-row">
    <h2 className="row-title">Support the Cause</h2>
    <p>Your contribution will directly help fund legal aid for [Case Name].</p>
    <button className="donate-button">Donate Now</button>
  </section>
);

export default DonationRow;

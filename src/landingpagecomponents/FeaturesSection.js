import React from 'react';
import '../css/featuressection.css';

const FeaturesSection = () => (
  <section className="features-section">
    <h2 className="features-title">Support and Learn About This Case</h2>
    <ul className="features-list">
      <li className="feature">
        <span className="feature-icon"></span>Access Case Documents
        <p className="feature-description">Review all publicly available case files, evidence, and court documents to stay informed.</p>
      </li>
      <li className="feature">
        <span className="feature-icon"></span>Latest Case Updates
        <p className="feature-description">Stay up-to-date with recent developments, legal motions, and decisions regarding this case.</p>
      </li>
      <li className="feature">
        <span className="feature-icon"></span>Support Through Donations
        <p className="feature-description">Contribute to the legal fund to support ongoing efforts and help bring justice.</p>
      </li>
    </ul>
  </section>
);

export default FeaturesSection;

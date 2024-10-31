import React from 'react';
import '../css/introductionrow.css';

const IntroductionRow = () => (
  <section className="introduction-row">
    <h2 className="row-title">About the [Case Name]</h2>
    <p className="row-description">
      The [Case Name] is a landmark legal battle addressing significant injustices faced by [individual or group], who have endured systemic challenges and rights violations. 
      The case shines a light on longstanding issues, including [briefly describe issues, e.g., "environmental pollution" or "civil rights abuses"], that have impacted countless lives.
    </p>
    <p className="row-description">
      This case began when [briefly describe triggering event, e.g., "the group uncovered illegal waste dumping near residential areas"], 
      sparking outrage and a demand for accountability. With little recourse and limited resources, [individual or group] took a stand, pushing for transparency and justice against formidable odds.
    </p>

  </section>
);

export default IntroductionRow;

import React from 'react';
import '../css/updatesrow.css';

const UpdatesRow = () => (
  <section className="updates-row">
    <h2 className="row-title">Latest Case Updates</h2>
    {/* Example update items */}
    <div className="update-item">
      <h3>Update Title</h3>
      <p>Brief description of the update...</p>
      <span className="update-date">Date of update</span>
    </div>
    <div className="update-item">
      <h3>Update Title</h3>
      <p>Brief description of the update...</p>
      <span className="update-date">Date of update</span>
    </div>
   
  </section>
);

export default UpdatesRow;

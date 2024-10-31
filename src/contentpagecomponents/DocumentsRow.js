import React from 'react';
import '../css/documentsrow.css';

const DocumentsRow = () => (
  <section className="documents-row">
    <h2 className="row-title">Case Documents</h2>
    <p className="row-description">Explore public documents, evidence, and case files.</p>
    
    <div className="document-list">
      <div className="document-item">Document 1</div>
      <div className="document-item">Document 2</div>
      <div className="document-item">Document 3</div>
    </div>
    
    
  </section>
);

export default DocumentsRow;

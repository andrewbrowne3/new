import React from 'react';
import IntroductionRow from '../contentpagecomponents/IntroductionRow';
import CaseDetailsRow from '../contentpagecomponents/CaseDetailsRow';
import DocumentsRow from '../contentpagecomponents/DocumentsRow';
import UpdatesRow from '../contentpagecomponents/UpdatesRow';
import DonationRow from '../contentpagecomponents/DonationRow';
import NavBar from '../landingpagecomponents/Navbar';
import SimpleHeader from '../contentpagecomponents/SimpleHeader';
import '../css/casepage.css'
import '../css/navbar.css'; // Import CSS here

const CasePage = () => (
    <div><NavBar />
  <div className="case-page">
    
    <SimpleHeader />
    <IntroductionRow />
    <CaseDetailsRow />
    <DocumentsRow />
    <UpdatesRow />
    <DonationRow />
  </div></div>
);

export default CasePage;

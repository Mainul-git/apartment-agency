import React from 'react';
import Navbar from '../../HomePage/Navbar/Navbar';
import './ApartmentHeader.css';

const ApartmentHeader = () => {

    return (
        <div>
            <Navbar />
            <div className="apartment-bg d-flex align-items-center justify-content-center" style={{marginBottom: '50px'}}>
                <h1>Apartment</h1>
            </div>

            
        </div>
    );
};

export default ApartmentHeader;
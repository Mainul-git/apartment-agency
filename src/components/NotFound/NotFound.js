import React from 'react';
import HeaderMain from '../HomePage/HeaderMain/HeaderMain';
import Navbar from '../HomePage/Navbar/Navbar';

const NotFound = () => {
    return (
        <div>
            <Navbar />
            <HeaderMain />
            <h1 className="m-5">Sorry, your requested page is not found</h1>
        </div>
    );
};

export default NotFound;
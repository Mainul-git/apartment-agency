import React from 'react';
import Header from '../Header/Header';
import ApartmentCard from '../ApartmentCard/ApartmentCard';
import Services from '../Services/Services';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div >
            <Header />
            <ApartmentCard />
           {/* check */}
            <Services />
            <Footer />
        </div>
    );
};

export default Home;
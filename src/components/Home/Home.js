import React from 'react';
import ApartmentCard from './ApartmentCard/ApartmentCard';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Services from './Services/Services';

const Home = () => {
    return (
        <div >
             
            <Header></Header>
            <ApartmentCard></ApartmentCard>
            <Services></Services>
            <Footer></Footer>
        </div>
    );
};

export default Home;
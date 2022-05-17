import React from 'react';
import Banner from './Banner/Banner';
import Footer from './Shared/Footer';
import Info from './Banner/Info';
import MakeAppointment from './Banner/MakeAppointment';
import Services from './Banner/Services';
import StayConnected from './Banner/StayConnected';
import Testimonial from './Banner/Testimonial';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
            <StayConnected></StayConnected>
            <Footer></Footer>
        </div>
    );
};

export default Home;
import React from 'react';
import Banner from './Banner/Banner';
import Doctors from './Doctors/Doctors';
import Faq from './Faq/Faq';
import Info from './Info/Info';
import Services from './Services/Services';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Services></Services>
            <Doctors></Doctors>
            <Info></Info>
            <Faq></Faq>
        </div>
    );
};

export default Home;
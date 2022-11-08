import React from 'react';
import Banner from '../Banner/Banner';
import Choose from '../Choose/Choose';
import Contact from '../Contact/Contact';
import MyServices from '../MyServices/MyServices';

const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <MyServices></MyServices>
            <Contact></Contact>
            <Choose></Choose>

        </div>
    );
};

export default Home;
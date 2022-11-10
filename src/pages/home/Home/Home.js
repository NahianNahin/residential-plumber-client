import React from 'react';
import useTitle from '../../../hooks/useTitle';
import Banner from '../Banner/Banner';
import Choose from '../Choose/Choose';
import Contact from '../Contact/Contact';
import MyServices from '../MyServices/MyServices';

const Home = () => {
    useTitle('Home')
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
import React from 'react';
import Banner from '../Components/HomeComponents/Banner';
import PhotoGallary from '../Components/HomeComponents/PhotoGallary';
import ServiceArea from '../Components/HomeComponents/ServiceArea';
import Team from '../Components/HomeComponents/Team';



const Home = () => {
    return (
        <div>
            <Banner />
            <ServiceArea />
            <Team />
            <PhotoGallary />
        </div>
    );
};

export default Home;
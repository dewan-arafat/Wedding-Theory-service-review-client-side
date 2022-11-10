import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import PartialServicesCard from '../Components/HomeComponents/PartialServicesCard';



const Services = () => {

    const [allServices, setAllServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/all-services')
            .then(res => res.json())
            .then(data => setAllServices(data))
    },
        []);

    return (
        <div className='mt-28 pb-8'>
            <div className='text-center mb-4'>
                <h2 className="text-5xl font-semibold">Our Service Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center'>
                {
                    allServices.map(service => <PartialServicesCard
                        key={service._id}
                        service={service}
                    ></PartialServicesCard>)
                }
            </div>

        </div>
    );
};

export default Services;
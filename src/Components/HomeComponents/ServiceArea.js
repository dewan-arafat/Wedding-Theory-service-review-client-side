import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import PartialServicesCard from './PartialServicesCard';

const ServiceArea = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    },
        []);

    return (
        <div className='px-14' >
            <div className=' text-center mb-4'>
                <h2 className="text-5xl font-semibold">Our Service Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center'>
                {
                    services.map(service => <PartialServicesCard
                        key={service._id}
                        service={service}
                    ></PartialServicesCard>)
                }
            </div>

            <div className='flex justify-center pt-4'>
                <Link to='/services'>
                    <button class="btn btn-outline btn-success">Load More</button>
                </Link>
            </div>

        </div>
    );
};

export default ServiceArea;
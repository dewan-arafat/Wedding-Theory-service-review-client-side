import React from 'react';
import { useLoaderData } from 'react-router-dom';
import FeatureList from './FeatureList';

const ServicesDetails = () => {
    const service = useLoaderData();
    const { img, service_id, title, _id, description, price, facility } = service;
    console.log(facility);
    return (
        <div>

            <div className='bg-gray-200 p-6 rounded shadow-lg'>
                <img
                    className='object-fit w-full h-96 mb-6 rounded shadow-lg md:h-3/4 lg:h-80 xl:h-80'
                    src={img}
                    alt=''
                />
                <div><p className='mb-2 text-xl font-bold leading-none sm:text-2xl'>{title}</p>
                    <p className='w-52'>Features:</p>

                    <div>
                        {
                            facility?.map(feature => <FeatureList feature={feature}></FeatureList>)
                        }

                    </div>

                </div>

            </div>



        </div>


    );
};

export default ServicesDetails;
import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react'
import { useEffect } from 'react';
import './Card.css';

const PartialServicesCard = ({ service }) => {
    const { _id, img, price, title } = service;

    return (
        <div className="service-card card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='text-2xl text-orange-600 font-semibold'>Price: ${price}</p>
                <div className="card-actions justify-end">
                    <Link to={`/services/${_id}`}>
                        <button className="btn btn-primary">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PartialServicesCard;
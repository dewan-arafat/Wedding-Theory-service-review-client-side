import React from 'react';

const ServiceReviews = ({ s_review }) => {
    return (
        <div>
            <h1>{s_review.customer}</h1>
            <p>{s_review.message}</p>
        </div>
    );
};

export default ServiceReviews;
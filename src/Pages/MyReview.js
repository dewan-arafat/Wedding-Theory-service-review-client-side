import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';
import ServiceReviews from './ServiceReviews';

const MyReview = () => {
    const { user } = useContext(AuthContext)

    const [reviews, setReviews] = useState([])
    const url = `http://localhost:5000/reviews?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    console.log(reviews);

    return (
        <div className='mt-28'>
            <div>
                <h1 className='text-center text-3xl font-bold'>My Reviews</h1>
            </div>
            {
                reviews?.map(s_review => <ServiceReviews s_review={s_review}></ServiceReviews>)
            }

        </div>
    );
};

export default MyReview;
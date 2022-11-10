import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';
import FeatureList from './FeatureList';



const ServicesDetails = () => {
    const service = useLoaderData();
    const { user, loading } = useContext(AuthContext);
    const { img, service_id, title, _id, description, price, facility } = service;
    console.log(service);

    // const [reviews, setReviews] = useState({})
    // const url = `http://localhost:5000/reviews?service=${_id}`;
    // useEffect(() => {
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => setReviews(data))
    // }, [])
    // console.log(reviews);


    const handleSubmitReview = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = user?.email || 'unregistered';
        const message = form.textarea.value;
        const photo = user?.photoURL
        console.log(name)
        const review =
        {
            service: _id,
            serviceName: title,
            customer: name,
            email,
            message,
            photo
        }
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Review submitted successfully')
                    form.reset();

                }
            })
            .catch(er => console.error(er));
    }



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

            <div>

                <div>
                    <h1>Review</h1>
                </div>
                <div>
                    {/* {
                        reviews.map(s_review => <ServiceReviews s_review={s_review}></ServiceReviews>)
                    } */}


                </div>
            </div>

            <div className='w-3/4 mx-auto'>
                <h1>wwwwww</h1>
                <form onSubmit={handleSubmitReview} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' defaultValue={user?.displayName} placeholder="name" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name='email' defaultValue={user?.email} placeholder="email" className="input input-bordered" readOnly />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Review</span>
                        </label>
                        <textarea type="textarea" name='textarea' placeholder="give our review" className=" textarea textarea-secondary" required />
                    </div>

                    <div className="form-control mt-6">

                        {
                            user?.uid ?
                                <> <button className="btn btn-primary">Submit</button>
                                </>
                                :
                                <>
                                    <p>Please <span><Link to='/login'>LogIn</Link> </span> to review  </p>
                                </>

                        }


                    </div>
                    <div>
                        <p className='text-red-500'></p>
                    </div>
                </form>
            </div>




        </div>


    );
};

export default ServicesDetails;
import React from 'react';
import img1 from '../../assets/image/banner/img1.jpg'
import img2 from '../../assets/image/banner/img2.jpg'
import img3 from '../../assets/image/banner/img3.jpg'
import img4 from '../../assets/image/banner/img4.jpg'


const PhotoGallary = () => {
    return (
        <section className="py-6 bg-gray-100">
            <p className='text-center text-2xl font-bold leading-none sm:text-5xl'>Photo Gallery</p>
            <div className="container flex flex-col justify-center p-4 mx-auto">
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
                    <img className="object-cover w-full bg-gray-500 aspect-square" src={img1} />
                    <img className="object-cover w-full bg-gray-500 aspect-square" src={img2} />
                    <img className="object-cover w-full bg-gray-500 aspect-square" src={img3} />
                    <img className="object-cover w-full bg-gray-500 aspect-square" src={img4} />
                </div>
            </div>
        </section>
    );
};

export default PhotoGallary;
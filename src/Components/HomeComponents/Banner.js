import React from 'react';
import img1 from '../../assets/image/banner/img1.jpg'
import img2 from '../../assets/image/banner/img2.jpg'
import img3 from '../../assets/image/banner/img3.jpg'
import img4 from '../../assets/image/banner/img4.jpg'

const Banner = () => {
    return (
        <section>
            <div className="bg-violet-400">
                <div className="container flex flex-col items-center px-4 pt-24 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-900">
                    <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-gray-900">Make Your Wedding A Wonderful Story</h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-900">Colourful photo for colourful people</p>
                    <div className="flex flex-wrap justify-center">
                        <button type="button" className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-gray-800 dark:text-gray-50">Get started</button>
                        <button type="button" className="px-8 py-3 m-2 text-lg border rounded dark:border-gray-700 dark:text-gray-900">Learn more</button>
                    </div>
                </div>
            </div>
            <img src={img2} alt="" className="w-5/6 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 dark:bg-gray-500" />
        </section>
    );
};

export default Banner;
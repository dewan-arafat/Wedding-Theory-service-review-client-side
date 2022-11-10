import React from 'react';

const Blog = () => {
    return (
        <div >
            <div className="bg-gray-100 text-gray-800 pt-32 pb-10">
                <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-gray-50 mb-3">
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Jun 1, 2022</span>
                        <a rel="noopener noreferrer" href="#" className="px-2 py-1 font-bold rounded bg-violet-600 text-gray-50">Javascript</a>
                    </div>
                    <div className="mt-3">
                        <a rel="noopener noreferrer" href="#" className="text-2xl font-bold hover:underline"> Difference between SQL and NoSQL</a>
                        <p className="mt-2">From analysts and engineers to IT decision makers, many are familiar with Relational Database Management Systems (RDBMS) and the Structured Query Language (SQL) used to interact with them. While these terms refer to a decades-old paradigm which remains a wide standard, today the sheer variety and depth of database systems can be dizzying. What’s more, rising volumes of unstructured data, availability of storage and processing power, and evolving analytic requirements have generated interest in fundamentally different technologies.

                            Collectively known as NoSQL, these popular alternatives to traditional RDBMSs show promise for a variety of modern use cases.</p>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                        <a rel="noopener noreferrer" href="#" className="hover:underline text-violet-600">Read more</a>
                        <div>
                            <a rel="noopener noreferrer" href="#" className="flex items-center">
                                <img src="https://source.unsplash.com/50x50/?portrait" alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full bg-gray-500" />
                                <span className="hover:underline text-gray-600">Leroy Jenkins</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-gray-50 mb-3">
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Jun 1, 2020</span>
                        <a rel="noopener noreferrer" href="#" className="px-2 py-1 font-bold rounded bg-violet-600 text-gray-50">Javascript</a>
                    </div>
                    <div className="mt-3">
                        <p rel="noopener noreferrer" href="#" className="text-2xl font-bold hover:underline">What is JWT, and how does it work?</p>
                        <p className="mt-2">JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP) </p>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                        <a rel="noopener noreferrer" href="#" className="hover:underline text-violet-600">Read more</a>
                        <div>
                            <a rel="noopener noreferrer" href="#" className="flex items-center">
                                <img src="https://source.unsplash.com/50x50/?portrait" alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full bg-gray-500" />
                                <span className="hover:underline text-gray-600">Leroy Jenkins</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-gray-50 mb-3">
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Jun 1, 2020</span>
                        <a rel="noopener noreferrer" href="#" className="px-2 py-1 font-bold rounded bg-violet-600 text-gray-50">Javascript</a>
                    </div>
                    <div className="mt-3">
                        <p rel="noopener noreferrer" href="#" className="text-2xl font-bold hover:underline">What is the difference between javascript and NodeJS?</p>
                        <p className="mt-2">JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language</p>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                        <a rel="noopener noreferrer" href="#" className="hover:underline text-violet-600">Read more</a>
                        <div>
                            <a rel="noopener noreferrer" href="#" className="flex items-center">
                                <img src="https://source.unsplash.com/50x50/?portrait" alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full bg-gray-500" />
                                <span className="hover:underline text-gray-600">Leroy Jenkins</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-gray-50 pb-3">
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Jun 1, 2020</span>
                        <a rel="noopener noreferrer" href="#" className="px-2 py-1 font-bold rounded bg-violet-600 text-gray-50">Javascript</a>
                    </div>
                    <div className="mt-3">
                        <p rel="noopener noreferrer" href="#" className="text-2xl font-bold hover:underline">How does NodeJS handle multiple requests at the same time?</p>
                        <p className="mt-2">NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                        <a rel="noopener noreferrer" href="#" className="hover:underline text-violet-600">Read more</a>
                        <div>
                            <a rel="noopener noreferrer" href="#" className="flex items-center">
                                <img src="https://source.unsplash.com/50x50/?portrait" alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full bg-gray-500" />
                                <span className="hover:underline text-gray-600">Leroy Jenkins</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
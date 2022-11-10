import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';

const LogIn = () => {
    const [error, setError] = useState('');
    const { signIn } = useContext(AuthContext);
    const { providerLogin } = useContext(AuthContext);
    const { githubLogin } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    //const from = location.state?.from?.pathname || '/';
    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then((result) => {
                const user = result.user;

            })
            .catch(error => console.error(error))
    }

    const githubProvider = new GithubAuthProvider();
    const handleGithubSignIn = () => {
        githubLogin(githubProvider)
            .then((result) => {
                const user = result.user;

            })
            .catch(error => console.error(error))

    }
    const handleLogIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;

                form.reset();
                setError('');
                //navigate(from, { replace: true });
                navigate(-1)

            })
            .catch(e => {
                console.error(e)
                setError(e.message);
            })

    }

    return (

        <div className=" min-h-screen bg-base-200 py-32 lg:px-24">
            <div className=" flex-col lg:flex-row-reverse">
                <div className="text-center pb-6 ">
                    <h1 className="text-5xl font-bold">Login now!</h1>

                </div>
                <div className=" flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto">
                    <form onSubmit={handleLogIn} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <div>
                            <p className='text-red-500'>{error}</p>
                        </div>
                    </form>
                    <div className='flex justify-center pb-2'>
                        <button onClick={handleGoogleSignIn} className="btn btn-sm  btn-ghost ">Login with Google</button>
                        <button onClick={handleGithubSignIn} className="btn btn-sm  btn-ghost">Login with Github</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;
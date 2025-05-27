import React, { use } from 'react';
import { AuthContext } from '../../Contexts/Firebase/AuthContext';
import signInLottie from '../../Lotties/signIn.json'
import Lottie from 'lottie-react';

const SignIn = () => {

    const { signInUSer } = use(AuthContext);


    const handleSignIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        //console.log(email, password);
        signInUSer(email, password)
            .then((result) => {
                // Signed in 
                const user = result.user;
                console.log(user);
            })
            .catch((error) => {
                console.log(error)
            });
    }


    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left ml-6">
                        <h1 className="text-5xl font-bold">SignIn Now!</h1>
                        <Lottie style={{ width: '350px' }} loop={true} animationData={signInLottie} />
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={handleSignIn}>
                                <fieldset className="fieldset">
                                    <label className="label">Email</label>
                                    <input name='email' type="email" className="input" placeholder="Email" />
                                    <label className="label">Password</label>
                                    <input name='password' type="password" className="input" placeholder="Password" />
                                    <div><a className="link link-hover">Forgot password?</a></div>
                                    <button className="btn btn-neutral mt-4">Login</button>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
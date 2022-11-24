import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import bikroyLogin from '../../../Assests/images/bikroy-login.png';

const SignUp = () => {
    // className="hero-content grid gap-10 md:grid-cols-2 flex-col lg:flex-row"  flex-shrink-0
    return (
        <div>
            <div className=" lg:w-1/4 w-full mx-auto my-20">
                <div className="card  w-full  shadow-2xl bg-base-100 py-6">
                    <form className="card-body">
                        <h1 className="text-4xl font-bold text-center">Sign Up</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name='photoURL' placeholder="Photo URL" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Select your position</span>
                            </label>
                            <select className="select select-bordered w-full ">
                                <option selected>Buyer</option>
                                <option>Seller</option>
                            </select>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />

                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Sign Up" />

                        </div>
                    </form>
                    <p className='text-center mb-4'>Have any account? Please <Link className='text-orange-600 font-semibold' to='/signin'>Sign in</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
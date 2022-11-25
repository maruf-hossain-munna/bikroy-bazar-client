import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";


const SignUp = () => {

    const { createUser , updateUser } = useContext(AuthContext)
    const navigate = useNavigate();

    const handleregister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const selected = form.selected.value;
        // console.log(name, email, password, selected) 

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('Registration Succesful');
                saveUser(name, email)
                handleUpdateUser(name, selected)
                // navigate('/signin')
            })
            .catch(error => console.log(error));
    }

    const handleUpdateUser = (name, selected) => {
        const profile = {
            displayName: name,
            selected,
            
        }
        updateUser(profile)
            .then(() => { 
                
            })
            .catch(err => console.error(err))
    }

    const saveUser = (name, email) =>{
        const user = {name, email};
        fetch('http://localhost:5000/users', {
            method : 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then( res => res.json())
        .then( data => {
            getUserToken(email)
            console.log('save user'  , data);
        })
    }

    const getUserToken = email =>{
        fetch(`http://localhost:5000/jwt?email=${email}`)
        .then( res => res.json())
        .then( data =>{
            if(data){
                localStorage.setItem('accessToken', data.accessToken)
                navigate('/signin')
            }
        })
    }

    return (
        <div>
            <div className=" lg:w-1/4 w-full mx-auto my-20">
                <div className="card  w-full  shadow-2xl bg-base-100 py-6">
                    <form onSubmit={handleregister} className="card-body">
                        <h1 className="text-4xl font-bold text-center">Sign Up</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" />
                        </div>
                        {/* <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name='photoURL' placeholder="Photo URL" className="input input-bordered" />
                        </div> */}

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Select your position</span>
                            </label>
                            <select name='selected' className="select select-bordered w-full ">
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
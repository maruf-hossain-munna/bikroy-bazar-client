import { format } from 'date-fns';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { AuthContext } from '../Contexts/AuthProvider/AuthProvider';

const ShowProduct = ({ product }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {user} = useContext(AuthContext)
    const { name, image, phone, description, location, _id, price, usedMonth, condition, createDate } = product;

    const handleBook = (data) =>{
        console.log(data);
        toast.success(`Your ${name} Booked Successful`)
    }

    return (
        <div>


            <div className="card w-96 bg-base-100 shadow-2xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name} </h2>
                    <p>Price: {price}$ </p>
                    <p>Condition: {condition} </p>
                    <p>Used : {usedMonth} Months </p>
                    <p>Phone : {phone}</p>
                    <p>Location : {location} </p>
                    <p> {description}</p>
                    <p>Post Date: {format(new Date(createDate), 'PP')} </p>
                    <p>Post Time: {format(new Date(createDate), 'pp')} </p>
                    <div className="flex justify-between mt-4">
                        <label htmlFor="bookModal" className="btn btn-primary">Book Now</label>
                        <button className="btn btn-primary">Report</button>
                    </div>
                </div>
            </div>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="bookModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="bookModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    

                    <div className='w-96 p-7 mx-auto rounded-xl shadow-2xl'>
                        <h1 className="text-3xl font-semibold text-center mb-2">Booking Your Product</h1>
                        <form onSubmit={handleSubmit(handleBook)}
                            className=''>
                            <div className="form-control w-full max-w-xs">
                                <label className="label"> <span className="label-text"> Your Name</span></label>
                                <input defaultValue={user?.displayName} readOnly type="text" {...register("name", {
                                    required: "Name is Required"
                                })} className="input input-bordered w-full max-w-xs" />
                                {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <label className="label"> <span className="label-text">Your Email</span></label>
                                <input defaultValue={user?.email} readOnly type="email" {...register("email", {
                                    required: true
                                })} className="input input-bordered w-full max-w-xs" />
                                {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <label className="label"> <span className="label-text"> Product Name</span></label>
                                <input defaultValue={name} readOnly  type="text" {...register("productName", {
                                    required: "Product Name is Required"
                                })} className="input input-bordered w-full max-w-xs" />
                                {errors.productName && <p className='text-red-500'>{errors.productName.message}</p>}
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <label className="label"> <span className="label-text">Price</span></label>
                                <input defaultValue={price} readOnly type="number" {...register("price", {
                                    required: "Price is Required"
                                })} className="input input-bordered w-full max-w-xs" />
                                {errors.price && <p className='text-red-500'>{errors.price.message}</p>}
                            </div>
                            
                            <div className="form-control w-full max-w-xs">
                                <label className="label"> <span className="label-text">Your Phone Number</span></label>
                                <input type="number" {...register("phone", {
                                    required: "Phone Number is Required"
                                })} className="input input-bordered w-full max-w-xs" />
                                {errors.phone && <p className='text-red-500'>{errors.phone.message}</p>}
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <label className="label"> <span className="label-text">Meeting Location</span></label>
                                <input type="text" {...register("location", {
                                    required: "Location is Required"
                                })} className="input input-bordered w-full max-w-xs" />
                                {errors.location && <p className='text-red-500'>{errors.location.message}</p>}
                            </div>

                            <input className='btn btn-accent w-full mt-4' value="Submit" type="submit" />
                        </form>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default ShowProduct;
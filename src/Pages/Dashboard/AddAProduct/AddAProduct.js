import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const AddAProduct = () => {
    const { user } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const imgHostKey = process.env.REACT_APP_imgbb_key;
    // console.log(imgHostKey);
    const [categories, setCategories] = useState();

    useEffect( () =>{
        fetch('http://localhost:5000/categories')
        .then( res => res.json())
        .then(data => {
            setCategories(data)
        })
    } ,[])


    const handleAddProduct = data => {
        // console.log(data.image[0]);
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imgHostKey}`

        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                // console.log(imgData)
                if(imgData.success){
                    // console.log(imgData.data.url);

                    const product = {
                        name : data.name,
                        category : data.category,
                        price : data.price,
                        email : data.email,
                        usedMonth : data.usedMonth,
                        condition : data.condition,
                        phone : data.phone,
                        location : data.location,
                        description : data.description,
                        image : imgData.data.url
                    }

                    fetch('http://localhost:5000/products', {
                        method : 'POST',
                        headers : {
                            'content-type' : 'application/json'
                        },
                        body : JSON.stringify(product)
                    })
                    .then( res => res.json())
                    .then( result =>{
                        console.log(result);
                        toast.success('Your product added successful');

                    })
                }
            })

    };


    return (
        <div className='container mx-auto'>
            <div className='w-96 p-7 mx-auto rounded-xl shadow-2xl'>
                <h1 className="text-3xl font-semibold text-center mb-2">Add a new product</h1>
                <form onSubmit={handleSubmit(handleAddProduct)}
                    className=''>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Product Name</span></label>
                        <input type="text" {...register("name", {
                            required: "Name is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Category</span></label>

                        <select {...register('category')} className="select select-bordered w-full ">
                            
                            {
                                categories?.map( category => <option
                                    key={category._id}
                                    value={category}
                                > {category.categoryName} </option> )
                            }
                        </select>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Price</span></label>
                        <input type="number" {...register("price", {
                            required: "Price is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.price && <p className='text-red-500'>{errors.price.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input defaultValue={user?.email} readOnly type="email" {...register("email", {
                            required: true
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Used of Month</span></label>
                        <input type="number" {...register("usedMonth", {
                            required: "Used of Month is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.usedMonth && <p className='text-red-500'>{errors.usedMonth.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Condition</span></label>

                        <select {...register('condition')} className="select select-bordered w-full ">
                            <option selected>Excellent</option>
                            <option>Good</option>
                            <option>Fair</option>
                        </select>
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Phone Number</span></label>
                        <input type="number" {...register("phone", {
                            required: "Phone Number is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.phone && <p className='text-red-500'>{errors.phone.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Location</span></label>
                        <input type="text" {...register("location", {
                            required: "Location is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.location && <p className='text-red-500'>{errors.location.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Description</span></label>
                        <input type="text" {...register("description", {
                            required: "Description is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.description && <p className='text-red-500'>{errors.description.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Product Image</span></label>
                        <input type="file" {...register("image", {
                            required: "Product Image is Required"
                        })} className="input  w-full max-w-xs" />
                        {errors.image && <p className='text-red-500'>{errors.image.message}</p>}
                    </div>
                    <input className='btn btn-accent w-full mt-4' value="Add Product" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddAProduct;
import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const AddProducts = () => {
    const { user } = useContext(AuthContext);

    const handleAddProduct = event =>{
        event.preventDefault();
        const form = event.target;

        const name = user?.displayName || form.name.value;
        const price = form.price.value;
        const condition = form.condition.value;
        const usedMonth = form.usedMonth.value;
        const phone = form.phone.value;
        const location = form.location.value;
        const description = form.description.value;
        const image = form.image.value;

        console.log(name, price, condition, usedMonth, phone, location, description, image);
    }


    return (
        <div className='container mx-auto my-16'>
            <form onSubmit={handleAddProduct} className="card-body lg:w-1/3 w-full mx-auto rounded-xl shadow-2xl">
                <h1 className="text-3xl font-bold text-center mb-2">Add a new product</h1>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name='name' defaultValue={user?.displayName} readOnly placeholder="Name" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="number" name='price' placeholder="Price" className="input input-bordered" />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Condition</span>
                    </label>
                    <select name='condition' className="select select-bordered w-full ">
                        <option selected>Excellent</option>
                        <option>Good</option>
                        <option>Fair</option>
                    </select>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Used of Month</span>
                    </label>
                    <input type="number" name='usedMonth' placeholder="Used of Month" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Phone Number</span>
                    </label>
                    <input type="number" name='phone' placeholder="Phone Number" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Location</span>
                    </label>
                    <input type="text" name='location' placeholder="Location" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <input type="text" name='description' placeholder="Description" className="input input-bordered" />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Product image</span>
                    </label>
                    <input type="file" name='image' className="input " />
                </div>

                <div className="form-control mt-6">
                    <input className="btn btn-primary" type="submit" value="Submit" />

                </div>


            </form>
        </div>
    );
};

export default AddProducts;
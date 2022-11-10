import React from 'react';
import useTitle from '../../hooks/useTitle';

const AddService = () => {
    useTitle('Add Service')
    const handleAddServices = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const img = form.img.value;
        const service_charge = form.service_charge.value;
        const description = form.description.value;
        const Service = {
            title,
            img,
            service_charge,
            description
        }
        console.log(Service);
        fetch('http://localhost:5000/service', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(Service),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
                if(data.acknowledged){
                    form.reset();
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    

    return (
        <div>
            <form onSubmit={handleAddServices} className='card shadow-lg p-10 mx-10 lg:mx-28 mt-16 mb-52 border-t-2 border-primary'>
                <h1 className='text-center text-3xl my-5 '>Add Your Service</h1>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Service Title</span>
                    </label>
                    <input type="text" name='title'  placeholder="Service Title" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Service Image</span>
                    </label>
                    <input type="text" name='img'  placeholder="Image URL" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Service Charge</span>
                    </label>
                    <input type="text" name='service_charge' placeholder="Service Charge" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea name='description' className="textarea textarea-primary h-24 w-full mb-4" placeholder="Description"></textarea>
                </div>
                <button className='btn btn-primary'>Add Service</button>
            </form>
        </div>
    );
};

export default AddService;
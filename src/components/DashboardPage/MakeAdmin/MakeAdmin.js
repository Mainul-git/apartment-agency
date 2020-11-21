import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

const MakeAdmin = () => {

    const { register, handleSubmit } = useForm()
    const onSubmit = data => {
        console.log('email',data)
        fetch('https://still-eyrie-70695.herokuapp.com/makeAdmin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    alert('one admin added successfully')
                }
            })
    }
    return (
        <div>
            <h3 className="mt-5">Make Admin</h3>
            <div className="order-box p-5 mt-5">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <p className="m-0">Email</p>
                    <input required ref={register} type="email" placeholder='name@gmail.com' name="email" id="" className="form-control" />
                    <button className="btn btn-success ml-2 px-4 mt-2 ">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default MakeAdmin;
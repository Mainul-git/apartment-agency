import React, { useEffect, useState } from 'react';
import MyRentSingle from '../MyRentSingle/MyRentSingle';

const MyRent = () => {

    const name = JSON.parse(localStorage.getItem("name"));
    const [orderList, setOrderList] = useState([]);

    useEffect(() => {
        fetch('https://creative-agency18.herokuapp.com/order')
            .then(res => res.json())
            .then(data => setOrderList(data));
    }, [])

    return (
        <div>
            <div className="mt-5 mr-5 d-flex justify-content-between">
                <h3>My Rent</h3>
                <h3>{name}</h3>
            </div>
            {orderList.length > 0 ? 
            <div className="order-box p-5">
                <div className="row">
                    {
                        orderList.map((order => <MyRentSingle key={order._id} order={order} />))
                    }
                </div>
            </div>
                : <div className="text-center">
                    <h1>Loading...</h1>
                    <img className="img-fuid" src="https://i.ibb.co/kBnQx2n/200.gif" alt="" />
                </div>
            }
        </div>
    );
};

export default MyRent;
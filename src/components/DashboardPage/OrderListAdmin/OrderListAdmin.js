import React, { useEffect, useState } from 'react';
import OrderListAdminSingle from '../OrderListAdminSingle/OrderListAdminSingle';

const OrderListAdmin = () => {

    const [orderList, setOrderList] = useState([]);

    const name = JSON.parse(localStorage.getItem("name"));

    useEffect(() => {
        fetch('https://creative-agency18.herokuapp.com/order')
            .then(res => res.json())
            .then(data => setOrderList(data));
    }, [])

    return (
        <div>
            <div className="mt-5 mr-5 d-flex justify-content-between">
                <h3>All Order List</h3>
                <h3>{name}</h3>
            </div>
            {
                orderList.length > 0 ?
                    <div className="order-box p-5 mt-5">
                        <table className="table" style={{backgroundColor: 'white'}}>
                            <thead style={{backgroundColor: '#F4F7FC'}}>
                                <tr>
                                    <th>Name</th>
                                    <th>Email Id</th>
                                    <th>Service</th>
                                    <th>Product Details</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    orderList.map(order => <OrderListAdminSingle order={order} />)
                                }
                            </tbody>
                        </table>
                    </div>
                    :
                    <div className="text-center">
                        <h1>Loading...</h1>
                        <img className="img-fuid" src="https://i.ibb.co/kBnQx2n/200.gif" alt="" />
                    </div>

            }

        </div>
    );
};

export default OrderListAdmin;
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
// import MyRentSingle from '../MyRentSingle/MyRentSingle';

const MyRent = () => {

    const email = localStorage.getItem("email")
    const [orderList, setOrderList] = useState([]);
    let history=useHistory()
    console.log(orderList)
    const yourRent = () => {
        fetch(`https://still-eyrie-70695.herokuapp.com/findCustomer?email=${email}`, {
            method: 'GET',

        })
            .then(response => response.json())
            .then(data => {
                setOrderList(data)
            })
    }
    useEffect(() => {
        yourRent();
    }, [])
    const viewDetails=(item)=>{
        history.push('/viewDetails', { params: item })
    }
    return (
        <div>
        <div className="mt-5 mr-5 d-flex justify-content-between">
            <h3>Booking List</h3>
            <h3></h3>
        </div>
        {
            orderList.length > 0 ?
                <div className="order-box p-5 mt-5">
                    <table className="table" style={{backgroundColor: 'white'}}>
                        <thead style={{backgroundColor: '#F4F7FC'}}>
                            <tr>
                                <th>House Name</th>
                                <th>Price</th>
                                <th>Status</th>
                                <th>Action</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                        {
                        orderList.length === 0 ? <h2>loading</h2> :
                            orderList.map(list => <tr>
                                <td>
                                    {list.title}
                                </td>
                                <td>
                                    {list.price}
                                </td>
                                <td className={list.status}>
                                    {list.status}
                                </td>
                                <td>
                                    <button onClick={() => viewDetails(list.apartmentId
                                    )}
                                        className="btn text-white mr-5" style={{ backgroundColor: "#275A53" }}>
                                        view details
                               </button>
                                </td>
                            </tr>)
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

export default MyRent;
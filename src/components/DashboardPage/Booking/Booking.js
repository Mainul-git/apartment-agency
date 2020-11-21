import React, { useEffect, useState } from 'react';
import OrderListAdminSingle from '../BookingSingle/BookingSingle';

const Booking = () => {

    const [customers, setCustomers] = useState([]);
    const allCustomer = () => {
        fetch('https://still-eyrie-70695.herokuapp.com/allCustomer')
            .then(response => response.json())
            .then(data => {
                if (data) {
                    setCustomers(data)
                    // data.map(customer =>setStatus(customer.status))
                 }
            })
    }
    const handleChange = (e, id) => {
        let updateStatus=e.target.value
         console.log('handleChange',updateStatus)
         fetch(`https://still-eyrie-70695.herokuapp.com/updateStatus/${id}`,{
             method: 'PATCH',
             headers:{'Content-type': 'application/json'},
             body: JSON.stringify({updateStatus})
         })
         .then(result=>{
             if(result){
                allCustomer()
                alert('status updated successfully')
             }
         } )
        }
    useEffect(() => {
       allCustomer()
    }, [])

    return (
        <div>
            <div className="mt-5 mr-5 d-flex justify-content-between">
                <h3>Booking List</h3>
                <h3></h3>
            </div>
            {
                customers.length > 0 ?
                    <div className="order-box p-5 mt-5">
                        <table className="table" style={{backgroundColor: 'white'}}>
                            <thead style={{backgroundColor: '#F4F7FC'}}>
                                <tr>
                                    <th>Name</th>
                                    <th>Email Id</th>
                                    <th>Phone</th>
                                    <th>Message</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    customers.map(customer => <OrderListAdminSingle customer={customer}  handleChange={handleChange}/>)
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

export default Booking;
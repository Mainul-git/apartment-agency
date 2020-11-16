import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Order.css';

const Order = () => {

    const history = useHistory();

    const name = JSON.parse(localStorage.getItem("name"));
    const email = JSON.parse(localStorage.getItem("email"));
    const serviceId = JSON.parse(localStorage.getItem("serviceId"));

    const [orderService, setOrderService] = useState({});

    useEffect(() => {
        fetch('https://creative-agency18.herokuapp.com/services')
            .then(res => res.json())
            .then(data => {
                const myService = data.find(e => e._id === serviceId);
                setOrderService(myService);
                const myInfo = { ...info };
                if(myService) {
                    myInfo.productName = myService.name;
                }
                setInfo(myInfo);
            });
    }, [])

    const [info, setInfo] = useState({
        name: name,
        email: email,
        status: 'Pending',
    });
    const [file, setFile] = useState(null);

    const handleBlur = (e) => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = (e) => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('name', info.name);
        formData.append('email', info.email);
        formData.append('productName', info.productName);
        formData.append('productDetails', info.productDetails);
        formData.append('price', info.price);
        formData.append('status', info.status);

        fetch('https://creative-agency18.herokuapp.com/addOrder', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                history.replace('/');
                history.go(0);
            });
        e.preventDefault();
    }

    return (
        <div>
            <div className="mt-5 mr-5 d-flex justify-content-between">
                <h3>Order</h3>
                <h3>{name}</h3>
            </div>

            <div className="order-box p-5 mt-5">
                <form onSubmit={handleSubmit}>
                    <input className="form-control" type="text" placeholder="Your name / company's name" value={name && name} required /><br />
                    <input className="form-control" type="email" placeholder="Your email address" value={email && email} required /><br />
                    <input onBlur={handleBlur} name="productName" className="form-control" type="text" placeholder="Product Name" value={orderService && orderService.name} required /><br />
                    <textarea onBlur={handleBlur} rows="5" className="form-control" type="text" name='productDetails' placeholder="Product Details" required /><br />
                    <input onBlur={handleBlur} className="form-control" type="number" name='price' placeholder="Price" required /><br />
                    <input onChange={handleFileChange} type="file" required /><br /><br />
                    <input type="submit" value="Send" className="custom-btn" />
                </form>
            </div>
        </div>
    );
};

export default Order;
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Review = () => {

    const history = useHistory();

    const name = JSON.parse(localStorage.getItem("name"));

    const [info, setInfo] = useState({});

    const photoURL = JSON.parse(localStorage.getItem("photoURL"));

    const handleBlur = (e) => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
        console.log(info);
    }

    const handleSubmit = (e) => {
        const formData = new FormData();
        formData.append('name', info.name);
        formData.append('designation', info.designation);
        formData.append('description', info.description);
        formData.append('img', photoURL);

        fetch('https://creative-agency18.herokuapp.com/addFeedback', {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            history.replace('/');
            history.go(0);
        });
        e.preventDefault();
    }

    return (
        <div>
            <div className="mt-5 mr-5 d-flex justify-content-between">
                <h3>Your Order List</h3>
                <h3>{name}</h3>
            </div>
            <div className="order-box p-5 mt-5">
                <form onSubmit={handleSubmit}>
                    <input onBlur={handleBlur} name="name" className="form-control" type="text" placeholder="Your name / company's name" required/><br />
                    <input onBlur={handleBlur} name="designation" className="form-control" type="text" placeholder="Company's name, Designation" required/><br />
                    <textarea onBlur={handleBlur} name="description" rows="5" className="form-control" type="text" placeholder="Description" required/><br />
                    <input type="submit" value="Send" className="custom-btn" />
                </form>
            </div>
        </div>

    );
};

export default Review;
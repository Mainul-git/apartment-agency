import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const MakeAdmin = () => {

    const history = useHistory();
    const [info, setInfo] = useState({});

    const handleBlur = (e) => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleSubmit = (e) => {
        const formData = new FormData();
        formData.append('email', info.email);

        fetch('https://creative-agency18.herokuapp.com/makeAdmin', {
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
            <h3 className="mt-5">Make Admin</h3>
            <div className="order-box p-5 mt-5">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Email</label>
                        <input onBlur={handleBlur} name="email" className="form-control" type="email" placeholder="Your Email" /><br />
                    </div>
                    <input type="submit" value="Submit" className="custom-btn" />
                </form>
            </div>
        </div>
    );
};

export default MakeAdmin;
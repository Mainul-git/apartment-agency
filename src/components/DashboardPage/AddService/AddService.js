import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const AddService = () => {
    const history = useHistory();

    const [info, setInfo] = useState({});
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
        formData.append('description', info.description);

        fetch('https://creative-agency18.herokuapp.com/addService', {
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
            <h3 className="mt-5">Add Service</h3>
            <div className="order-box p-5 mt-5">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Service Title</label>
                        <input onBlur={handleBlur} name="name" className="form-control" type="text" placeholder="Enter title" />
                    </div>
                    <div className="form-group">
                        <label>Description</label>
                        <textarea onBlur={handleBlur} name="description" rows="5" className="form-control" type="text" placeholder="Enter Description" />
                    </div>
                    <div className="form-group">
                        <label>Upload Image</label><br />
                        <input onChange={handleFileChange} type="file" />
                    </div>
                    <input type="submit" value="Send" className="custom-btn" />
                </form>
            </div>
        </div>
    );
};

export default AddService;
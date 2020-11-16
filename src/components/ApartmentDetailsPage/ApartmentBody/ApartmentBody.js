import React, { useState } from 'react';
import './ApartmentBody.css';
import pic1 from '../../../images/Rectangle 394.png';
import pic2 from '../../../images/Rectangle 396.png';
import pic3 from '../../../images/Rectangle 398.png';
import pic4 from '../../../images/Rectangle 403.png';
import pic5 from '../../../images/Rectangle 404.png';

const ApartmentBody = () => {

    const pic = [pic1, pic2, pic3, pic4, pic5];

    const [presentPic, setPresentPic] = useState(pic1);

    const [bookingInfo, setBookingInfo] = useState();

    const handleOnBlur = (e) => {
        const newBookingInfo = { ...bookingInfo };
        newBookingInfo[e.target.name] = e.target.value;
        setBookingInfo(newBookingInfo);
    }

    const handleSubmit = (e) => {
        console.log(bookingInfo);
        e.preventDefault();
    }

    return (
        <div>
            <div className="custom-container">
                <div className="row">
                    <div className="col-md-8">
                        <img align="left" width="760px" src={presentPic} alt="" />
                        {
                            pic.map(pic => <img onClick={() => setPresentPic(pic)} className={`${presentPic == pic ? 'pic-active' : 'pic-not-active'}`} src={pic} width="150px" alt="" />)
                        }
                    </div>
                    <div className="col-md-4">
                        <form>
                            <div className="form-group">
                                <input onBlur={handleOnBlur} name="fullName" type="text" className="form-control" placeholder="Full Name" />
                            </div>
                            <div className="form-group">
                                <input onBlur={handleOnBlur} name="phoneNumber" type="number" className="form-control" placeholder="Phone Number" />
                            </div>
                            <div className="form-group">
                                <input onBlur={handleOnBlur} name="email" type="email" className="form-control" placeholder="Email Address" />
                            </div>
                            <div className="form-group">
                                <textarea onBlur={handleOnBlur} name="message" rows="10" className="form-control" placeholder="Message" />
                            </div>
                            <button onClick={handleSubmit} className="btn text-white" style={{ backgroundColor: "#275A53" }}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApartmentBody;
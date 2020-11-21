import React, { useState } from 'react';
import './ApartmentBody.css';
import pic2 from '../../../images/Rectangle 396.png';
import pic3 from '../../../images/Rectangle 398.png';
import pic4 from '../../../images/Rectangle 403.png';
import pic5 from '../../../images/Rectangle 404.png';
import { addApartment } from '../../../Redux/actions/apartmentActions';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';

const ApartmentBody = (props) => {
    const { Primaryimage, title, location, bedroom, bathroom, price, _id } = props.apartment
    // const selectApartment=props.apartment;
    const pic = [Primaryimage, pic2, pic3, pic4, pic5];
    const [presentPic, setPresentPic] = useState(Primaryimage);
    // const [bookingInfo, setBookingInfo] = useState();
    const { register, handleSubmit } = useForm()
    const onSubmit = data => {
        let status = 'pending'
        const formData = new FormData()
        formData.append('name', data.name)
        formData.append('number', data.number)
        formData.append('email', data.email)
        formData.append('message', data.message)
        formData.append('status', status)
        formData.append('apartmentId', _id)
        formData.append('title', title)
        formData.append('price', price)
        fetch('https://still-eyrie-70695.herokuapp.com/addCustomer', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                alert('your order added successfully')
            })
    }

    return (
        <div>
            <div className="custom-container">
                <div className="row">
                    <div className="col-md-8">
                        <img align="left" width="760px" src={presentPic == Primaryimage && Primaryimage ? `data:image/png;base64,${Primaryimage.img}` : presentPic} className="img-fluid" alt="" />
                        {
                            pic.map(pic => <img onMouseEnter={() => setPresentPic(pic)} key={pic} className={`${presentPic == pic ? 'pic-active' : 'pic-not-active'}`} src={pic} width="150px" alt="" />)
                        }
                        <h2 className="common-color">{title} <span className="price">${price}</span></h2>
                        <p>3000 sq-ft., 3 Bedroom, Semi-furnished, Luxurious, South facing Apartment for Rent in Rangs Malancha, Melbourne.</p>
                        <div className=" mt-3">
                            <h2 className="common-color">Price details</h2>
                            <p>
                                Rent/Month: $550 (negotiable)
                                Service Charge : 8,000/= Tk per month, subject to change
                                Security Deposit : 3 month’s rent
                                Flat Release Policy : 3 months earlier notice required
                            </p>
                        </div>
                        <div className=" mt-3">
                            <h2 className="common-color">Property details</h2>
                            <p>
                                Address & Area : Rangs Malancha, House-68, Road-6A (Dead End Road), Dhanmondi Residential Area.
                                Flat Size : 3000 Sq Feet.
                                Floor :  A5 (5th Floor) (6 storied Building ) (South Facing Unit)
                                Room Category : 3 Large Bed Rooms with 3 Verandas, Spacious Drawing, Dining & Family Living Room, Highly Decorated Kitchen with Store Room and Servant room with attached Toilet.
                                Facilities : 1 Modern Lift, All Modern Amenities & Semi Furnished.
                                Additional Facilities : a. Electricity with full generator load, b. Central Gas Geyser, c. 2 Car Parking with 1 Driver’s Accommodation, d. Community Conference Hall, e. Roof Top Beautified Garden and Grassy Ground, f. Cloth Hanging facility with CC camera

                            </p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <form onSubmit={handleSubmit(onSubmit)} className="orderForm-area form-group pt-3">
                            <input required ref={register} placeholder="full name" defaultValue={localStorage.getItem('name')} className='form-control mb-3' type="text" name="name" id="" />
                            <input required ref={register} placeholder="Phone No." defaultValue='' className='form-control mb-3' type="number" name="number" id="" />
                            <input required ref={register} placeholder='Email address' defaultValue={localStorage.getItem('email')} className='form-control mb-3' type="email" name="email" id="" />
                            <textarea required ref={register} placeholder='Message' defaultValue='' name="message" id="" cols="30" rows="10" className="form-control mb-3"></textarea>
                            <br />
                            <input required ref={register} placeholder="full name" value="Request Booking" className='form-control mb-3' style={{ backgroundColor: "#275A53",color: "#F1F6F4"}} type="submit" id="" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
const mapStateToProps = state => {
    return {
        apartment: state.apartment
    }
}

const mapDispatchToProps = {
    addApartment: addApartment
}

export default connect(mapStateToProps, mapDispatchToProps)(ApartmentBody);
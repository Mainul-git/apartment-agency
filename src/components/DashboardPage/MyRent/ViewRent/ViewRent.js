import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import pic2 from '../../../../images/Rectangle 396.png';
import pic3 from '../../../../images/Rectangle 398.png';
import pic4 from '../../../../images/Rectangle 403.png';
import pic5 from '../../../../images/Rectangle 404.png';
import ApartmentHeader from '../../../ApartmentDetailsPage/ApartmentHeader/ApartmentHeader';

const ViewRent = () => {
    let paramsLocation = useLocation()
    let id = paramsLocation.state.params;
    useEffect(() => {

        fetch(`https://still-eyrie-70695.herokuapp.com/findApartment/${id}`, {
            method: 'GET',

        })
            .then(response => response.json())
            .then(data => {
                setRent(data)
            })
    }, [])
    const [rent, setRent] = useState([])
    var selectedImage = null;
    const [selected] = rent;
    if (selected) {
        selectedImage = selected.Primaryimage;
    }
    console.log(selected)
    const pic = [selectedImage, pic2, pic3, pic4, pic5];
    const [presentPic, setPresentPic] = useState(pic2);
    console.log('iddd', id)
    return (
        <div>
            <ApartmentHeader></ApartmentHeader>
            <div className="col-md-8">
                <img align="left" width="760px" src={presentPic != selectedImage ? presentPic : `data:image/png;base64,${selectedImage.img}`} className="img-fluid" alt="" />
                {
                    pic.map(pic => <img onMouseEnter={() => setPresentPic(pic)} key={pic} className={`${presentPic == pic ? 'pic-active' : 'pic-not-active'}`} src={pic} width="150px" alt="" />)
                }

                <div className="">
                <h2 className="common-color ">{rent.length>0 && rent[0].title}<span className="d-flex justify-content-end mr-5 pr-5">${rent.length>0 && rent[0].price}</span></h2>
                </div>
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

        </div>
    );
};

export default ViewRent;
import React from 'react';
import locationLogo from"../../../logos/map-marker-alt-solid 1.png"
import bathroomLogo from'../../../logos/bath 1.png'
import bedroomLogo from'../../../logos/bed 1.png'
const ApartmentCardChild = ({ apartment }) => {
  return (<div className="col-md-4 mb-3 container ">
    <div className="card  " >
      <img src={`data:image/png;base64,${apartment.Primaryimage.img}`} className="card-img-top" alt="..." />
      <div className="card-body">
        <h4 className="card-title">{apartment.title}</h4>
        <div className="d-flex"><img className="mr-1" style={{ height: "30px" }} src={locationLogo} />
          <p>{apartment.location}</p></div>
        <div className="row">
          <div className="d-flex col-md-6"><img className="mr-1" style={{ height: '20px' }} src={bedroomLogo} /><p>{apartment.bedroom} bedrooms</p></div>
          <div className="d-flex col-md-6"><img className="mr-1" style={{ height: '20px' }} src={bathroomLogo} /><p>{apartment.bathroom} bathrooms</p></div>
        </div><div className="d-flex ">
          <h4 style={{ fontWeight: 'bolder', fontSize: "30px", color: "#275A53" }} className="mr-5">${apartment.price}</h4>
          <button className="btn text-white ml-4  " type="button" id="button-addon2" style={{ backgroundColor: "#275A53" }}>View Details</button></div>
      </div>
    </div>
  </div>

  );
};

export default ApartmentCardChild;
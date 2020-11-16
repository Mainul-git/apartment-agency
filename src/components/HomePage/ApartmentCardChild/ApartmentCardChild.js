import React from 'react';

const ApartmentCardChild = ({apartment}) => {
    return (<div className="col-md-4 mb-3 container ">
        <div className="card  " >
        <img src={apartment.img} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h4 className="card-title">{apartment.title}</h4>
          <div className="d-flex"><img className="mr-1" style={{height:"30px"}} src={apartment.location}/>
          <p>Nasirabad H/S,Chattogram</p></div>
          <div className="row">
<div className="d-flex col-md-6"><img className="mr-1" style={{height:'20px'}} src={apartment.bedroom}/><p>3 bedrooms</p></div>
<div className="d-flex col-md-6"><img  className="mr-1"style={{height:'20px'}}src={apartment.bathroom}/><p>2 bathroom</p></div>
          </div><div className="d-flex ">
  <h4 style={{fontWeight:'bolder',fontSize:"30px",color:"#275A53"}}  className="mr-5">${apartment.price}</h4>
          <button className="btn text-white ml-4  " type="button" id="button-addon2" style={{backgroundColor:"#275A53"}}>View Details</button></div>
        </div>
      </div>
      </div>

    );
};

export default ApartmentCardChild;
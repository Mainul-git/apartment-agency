import React, { useEffect, useState } from 'react';
import loading from'../../../logos/loading.gif'
import ApartmentCardChild from '../ApartmentCardChild/ApartmentCardChild';
import {addApartment} from'../../../Redux/actions/apartmentActions';
import { connect } from 'react-redux';
const ApartmentCard = (props) => {
    console.log(props)
    const{addApartment}=props
    const[apartments,setApartments]=useState([])
    useEffect(() =>{
        fetch('https://still-eyrie-70695.herokuapp.com/allapartment')
        .then(response =>response.json())
        .then(data =>{
            if(data){
                setApartments(data)
                console.log(data)
            }
        })
    },[])
    return (
        <div style={{backgroundColor:' #E5E5E5'}} className="pt-3">
            <div className="flex-column mb-3 text-center">
                <small>House Rent</small>
                <h2>Discover the latest Rent</h2>
                <h2>available today</h2>
            </div>
            <section className="row w-75 m-auto ">
                {
                    apartments.length===0?<img src="https://i.ibb.co/kBnQx2n/200.gif" alt=""/>:apartments.map(apartment=><ApartmentCardChild apartment={apartment} addApartment={addApartment} key={apartment._id}></ApartmentCardChild>)
                }
            </section>
        </div>
    );
};
const mapStateToProps = state =>{
  return {
      apartment:state.apartment
  }
}

const mapDispatchToProps = {
 addApartment:addApartment
}

export default connect(mapStateToProps, mapDispatchToProps)(ApartmentCard) ;
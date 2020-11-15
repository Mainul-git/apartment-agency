import React from 'react';
import ServiceDetails from '../ServiceDetails/ServiceDetails';

const Service=[
    {id:1,img:"https://i.ibb.co/ngK2VWr/Group-33351.png",title:"Wide Rsnge of Properties",description:"With a robust selection of popular properties on hand, as well as leading properties from experts."},{ id:2,img:"https://i.ibb.co/jWbNJMJ/affordable-1.png",title:"Financing Made Easy" ,description:"Our stress-free finance department that can find financial solutions to save you money."},{id:3,img:"https://i.ibb.co/MDp38M0/lessee-1.png",title:"Trusted by thousands" ,description:"10 new offers every day. 350 offers on site, trusted by a community of thousands of users."}
]

const Services = () => {
    return (
        <div >
            <div className="flex-column">
                <small>Service</small>
                <h2>We're an agency tailored to all</h2>
                <h2>clients' needs that always delivers</h2>
            </div>
            <section className="d-flex justify-content-center">
            <div className="w-75 row">
                {
                    Service.map(service => <ServiceDetails service={service} key={service.title}></ServiceDetails>)
                }
            </div>
        </section>
            
        </div>
    );
};

export default Services;
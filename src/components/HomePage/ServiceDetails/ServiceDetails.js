import React from 'react';

const ServiceDetails = ({service}) => {
    return (
         <div className="col-md-4  info-card">
        <div className={` justify-content-center info-container `}>
            {/* info-${info.background} */}
            <div className="mr-3">
                <img style={{height:'40px'}}src={service.img}/>
            </div>
            <div>
                <h6>{service.title}</h6>
                <small>{service.description}</small>
            </div>
        </div>
    </div>
    );
};

export default ServiceDetails;
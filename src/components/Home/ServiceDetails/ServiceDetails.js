import React from 'react';

const ServiceDetails = ({data}) => {
    return (
        <div className='col-md-4 text-center'>
            <img style={{width:'50px'}} src={data.img} alt="" />
            <h5 className='mt-3 mb-3'>{data.name}</h5>
            <small>{data.details}</small>
        </div>
    );
};

export default ServiceDetails;
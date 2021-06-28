import React from 'react';

const TestimonialDetails = (props) => {
    const {name, comment, img, location} = props.testimonial;
    return (
        <div className="card col-md-4 mx-auto shadow-sm">
            <div className="card-body">
                <p className="card-text text-center">{comment}</p>
            </div>
            <div className="card-footer d-flex  align-items-center">
                <img className="mx-3" src={img} alt="" width="60"/>
                <div>
                    <h6 className="text-primary">{name}</h6>
                    <p className="m-0">{location}</p>
                </div>
            </div>
       </div>
    );
};

export default TestimonialDetails;
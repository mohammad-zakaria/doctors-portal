import React from 'react';
import TestimonialDetails from '../TestimonalDetails/TestimonialDetails';
import ema from '../../../images/ema.png';
import wilson from '../../../images/wilson.png';
import eliza from '../../../images/eliza.png';
import './Testimonial.css'



const testimonialData = [
    {
        name:'Ema',
        comment: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, atque? Pariatur ipsa debitis inventore voluptatum nemo asperiores aut provident tenetur.',
        img: ema,
        location:'Dhaka'
    },
    {
        name:'Wilson',
        comment: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, atque? Pariatur ipsa debitis inventore voluptatum nemo asperiores aut provident tenetur.',
        img: wilson,
        location:'Sylhet'
    },
    {
        name:'Eliza',
        comment: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, atque? Pariatur ipsa debitis inventore voluptatum nemo asperiores aut provident tenetur.',
        img: eliza,
        location:'Chittagong'
    }
]
const Testimonial = () => {
    return (
        <section className="testimonials my-5 py-5">
        <div className="container">
            <div className="section-header">
                <h5 className="text-primary text-uppercase">Testimonial</h5>
                <h1>What Our Patients <br/> Says </h1>
            </div>
            <div className="card-deck row mt-5">
                 {
                     testimonialData.map(testimonial => <TestimonialDetails testimonial={testimonial} key={testimonial.name}/>)
                 }
             </div>
        </div>
    </section>
    );
};

export default Testimonial;
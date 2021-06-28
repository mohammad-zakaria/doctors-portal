import React from 'react';
import featuredImg from './../../../images/featured.png'

const FeaturedService = () => {
    return (
        <section className='featured-services my-5 mb-md-5'>
            <div className="container mb-5">
                <div className='row mb-5'>
                    <div className='col-md-5 mb-4 m-md-0'>
                        <img className='img-fluid' src={featuredImg} alt="" />
                    </div>
                    <div className='col-md-7 align-self-center'>
                        
                        <h1>Exceptional Dental <br /> Care, on Your Terms</h1>
                        
                        <p className='text-secondary my-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia unde tempore non dolorum expedita iure beatae dolor veritatis delectus labore accusamus deleniti, facilis, ratione nam similique vero culpa qui eius. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas provident voluptates impedit dignissimos nobis dolorum, rerum autem ipsa ab tempora amet maiores, vel distinctio temporibus, commodi atque minus officia minima!</p>
                        
                        <button className='btn btn-primary'>Learn more</button>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default FeaturedService;
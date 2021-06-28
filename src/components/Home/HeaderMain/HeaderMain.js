import React from 'react';
import chair from '../../../images/chair.png'

const HeaderMain = () => {
    return (
        <main  style={{height:'600px'}} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1>Your New Journey <br/> Start Here!</h1>
                <p style={{color:'#3A4256'}} className='text-secondary'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta vero earum voluptate temporibus neque autem?</p>
                <button className="btn btn-primary">GET Appointment</button>
            </div>
            <div className="col-md-6">
                <img src={chair} className='img-fluid' alt="" />
            </div>
        </main>
    );
};

export default HeaderMain;
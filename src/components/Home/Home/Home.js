import React from 'react';
import Appointment from '../Appointment/Appointment';
import Blogs from '../Blogs/Blogs';
import Doctors from '../Doctors/Doctors';
import FeaturedService from '../FeaturedService/FeaturedService';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';
import Contact from './Contact/Contact';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <FeaturedService></FeaturedService>
            <Appointment></Appointment>
            <Testimonial></Testimonial>
            <Blogs></Blogs>
            <Doctors></Doctors>
            <Contact></Contact>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;
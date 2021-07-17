import React, { useState } from 'react';
import Footer from '../../shared/Footer/Footer';
import NavBar from '../../shared/NavBar/NavBar';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import BookAppointment from '../BookAppoinment/BookAppointment';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleDateChange = date => {
        setSelectedDate(date);

        console.log(date);
    }
    return (
        <>
            <NavBar></NavBar>
            <AppointmentHeader handleDateChange = {handleDateChange}></AppointmentHeader>
            <BookAppointment date = {selectedDate}></BookAppointment>
            <Footer></Footer>
        </>
    );
};

export default Appointment;
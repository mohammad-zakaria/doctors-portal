import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faPhone, faMapMarker, faClock } from '@fortawesome/free-solid-svg-icons'

const infoData = [
    {
        title:'Opening Hours',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut?',
        icon: faClock,
        background:'primary'
    },
    {
        title:'Visit our location!',
        description: '161 Old Post Road, CT',
        icon: faMapMarker,
        background:'dark'
    },
    {
        title:'Contact Us Now',
        description: '+1678738',
        icon: faPhone,
        background:'primary'
    }
]
const BusinessInfo = () => {
    return (
        <section className="d-flex justify-content-center">
            <div className="w-75 row">
            {
                infoData.map(info =>  <InfoCard info={info}></InfoCard>)
            }
            </div>
        </section>
    );
};

export default BusinessInfo;
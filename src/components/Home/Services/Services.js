import React from "react";
import ServiceDetails from "../ServiceDetails/ServiceDetails";
import fluoride from "./../../../images/flouride.png";
import cavity from "./../../../images/cavity.png";
import teeth from "./../../../images/teeth-whitennin.png";

const serviceData = [
  {
    name: "Fluoride Treatment",
    img: fluoride,
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, obcaecati!",
  },
  {
    name: "Cavity Filling",
    img: cavity,
    details: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum.",
  },
  {
    name: "Teeth Whitening",
    img: teeth,
    details:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur, odit officia.",
  },
];
const Services = () => {
  return (
    <section className="services-container mt-5 pt-5">
      <div className="text-center">
        <h5 style={{color: '#1CC7C1'}}>OUR SERVICES</h5>
        <h2>Services We Provide</h2>
      </div>

      <div className="d-flex justify-content-center">
        <div className="row w-75 mt-5 pt-5">
          {serviceData.map((data) => ( <ServiceDetails data={data}></ServiceDetails>))}
        </div>
      </div>
    </section>
  );
};

export default Services;

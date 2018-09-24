import React from "react";

const Travels = props => (
  <div>
    <p>{props.destination} {props.distance} {props.country}</p>
    <img src={props.photo}/>
      
  </div>
);

export default Travels;


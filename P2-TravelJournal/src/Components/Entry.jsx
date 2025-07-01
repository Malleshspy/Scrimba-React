import React from 'react';

const Entry = (props) => {
  console.log(props)
  return (
    <div className="travel">
      <img className="travel-img" src={props.object.img.src} alt={props.object.img.alt}/>
      
      <div className="travel-text">
        <h1>{props.object.title}</h1>
        <p>{props.object.country}</p>
        <p><a href={props.object.googleMapsLink} target="_blank" rel="noopener noreferrer">View on Google Maps</a></p>
        <p>{props.object.dates}</p>
        <p>{props.object.text}</p>
      </div>
    </div>
  );
};

export default Entry;

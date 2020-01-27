import React from 'react';


const Starships = (props) => {
    console.log(props);
    
   return (
      <div className="Starships">
        <h3 className="starships-info">Starships </h3>
        <section>
     
      <h2>Model: {props.model}</h2>
      <h2>
        Made by: {props.manufacturer}
      </h2>
  
    </section>
          
        
      </div>
    );
  }
  
  export default Starships;
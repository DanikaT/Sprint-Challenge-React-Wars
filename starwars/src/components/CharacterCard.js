import React from 'react';
import CardHeader from './CardHeader';
import styled from "styled-components";

const CharacterCardHeader = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: white;
`;




const CharacterCard = (props) => {
    // Try to think through what state you'll need for this app before starting. Then build out
    // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
    // side effect in a component, you want to think about which state and/or props it should
    // sync up with, if any.
   return (
      <div className="Character-card">
         
   <CharacterCardHeader>
          <CardHeader name={props.name} gender={props.gender}  />
          </CharacterCardHeader>
      </div>
    );
  }
  
  export default CharacterCard;
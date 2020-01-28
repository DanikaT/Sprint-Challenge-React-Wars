import React from 'react';
import styled from "styled-components";
import CharacterCard from './CharacterCard';

const CharacterListDiv = styled.div`
display: flex;
justify-content: space-between;
`;



const CharacterList = (props) => {
console.log(props)

 

   return (
      <CharacterListDiv>
        <section className="character-list">
        <h1 className="character-list-div">STARWARS CREW MEMBER</h1>
           <CharacterCard name={props.name} gender={props.gender}  /> 
         </section>
      </CharacterListDiv>
    );
  }
  
  export default CharacterList;
  
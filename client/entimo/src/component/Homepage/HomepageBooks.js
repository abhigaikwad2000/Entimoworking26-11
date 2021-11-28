import React from 'react';
import styled from 'styled-components';
import Section from './Section';
import QABooks from './QaBooks';
import Navbar from '../Dashboard/index';

import Nav from './Nav';
//import Profile from './Profile';
//import Questionlist from './QuestionList';


function Homepage() {


  return (
    <Container >
  
      <Nav />
      <Navbar />
      <Section />
      <QABooks/>
      
     
      
    </Container>
    

  );
}

export default Homepage;

const Container = styled.div`
position: absolute;
width: 100%;
height: 100%;
min-height: 900px;
background-repeat: no-repeat;
background-size: cover;

`;

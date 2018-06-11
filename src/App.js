import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Profile from './components/Profile';
import Experience from './components/Experience';
import Project from './components/Project';
import Skill from './components/Skill';
import Study from './components/Study';
import Education from './components/Education';

class App extends Component {
  render() {
    return (
      <Container>
        <Profile />
        <Skill />
        <Experience />
        <Project />
        <Study />
        {/* <Education /> */}
      </Container>
    );
  }
}

export default App;

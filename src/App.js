import React, { Component } from 'react';
import { animateScroll as scroll } from 'react-scroll'
import { Container } from 'reactstrap';
import queryString from 'query-string';
import Profile from './components/Profile';
import Experience from './components/Experience';
import Project from './components/Project';
import Skill from './components/Skill';
import Study from './components/Study';
// import Education from './components/Education';
import resume from './data/resume';

class App extends Component {
  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
    this.lang = queryString.parse(window.location.search).lang || 'en';
    this.resume = resume[this.lang];
  }

  scrollToTop() {
    scroll.scrollToTop();
  }

  render() {
    return (
      <Container>
        <Profile profile={this.resume.profile} />
        <Skill />
        <Experience experience={this.resume.experience} />
        <Project project={this.resume.project} />
        <Study study={this.resume.study} />
        {/* <Education /> */}
        <a onClick={this.scrollToTop}>To the top!</a>
      </Container>
    );
  }
}

export default App;

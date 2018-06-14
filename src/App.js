import React, { Component } from 'react';
import { animateScroll as scroll } from 'react-scroll'
import { Container, Col } from 'reactstrap';
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
    this.lang = window.location.search.includes('ko') ? 'ko' : 'en';
    this.resume = resume[this.lang];
  }

  scrollToTop() {
    scroll.scrollToTop();
  }

  render() {
    return (
      <Container>
        <Col className="text-md-right">
          <a href="?lang=en" style={this.lang === "en" ? { "color" : "blue" } : {}}>English</a>&nbsp;&nbsp;/&nbsp;&nbsp;
          <a href="?lang=ko" style={this.lang === "ko" ? { "color": "blue" } : {}}>Korean</a>
        </Col>
        <Profile profile={this.resume.profile} />
        <Skill />
        <Experience experience={this.resume.experience} lang={this.lang} />
        <Project project={this.resume.project} />
        <Study study={this.resume.study} />
        {/* <Education /> */}
        {/* <a onClick={this.scrollToTop}>To the top!</a> */}
      </Container>
    );
  }
}

export default App;

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
    // this.resume = resume[this.lang];
    this.state = {
      lang: this.lang,
      resume: resume[this.lang]
    };
  }

  scrollToTop() {
    scroll.scrollToTop();
  }

  render() {
    return (
      <Container>
        <Col className="text-md-right">
          {/* <a href="?lang=en" style={this.lang === "en" ? { "color" : "blue" } : {}}>English</a>&nbsp;&nbsp;/&nbsp;&nbsp;
          <a href="?lang=ko" style={this.lang === "ko" ? { "color": "blue" } : {}}>Korean</a> */}
          <a href="#" onClick={() => this.setState({ lang: 'en', resume: resume['en'] })} style={this.state.lang === "en" ? { "color": "blue" } : {}}>English</a>&nbsp;&nbsp;/&nbsp;&nbsp;
          <a href="#" onClick={() => this.setState({ lang: 'ko', resume: resume['ko'] })} style={this.state.lang === "ko" ? { "color": "blue" } : {}}>Korean</a>
        </Col>
        <Profile profile={this.state.resume.profile} />
        <Skill />
        <Experience experience={this.state.resume.experience} lang={this.state.lang} />
        <Project project={this.state.resume.project} />
        <Study study={this.state.resume.study} />
        {/* <Education /> */}
        {/* <a onClick={this.scrollToTop}>To the top!</a> */}
      </Container>
    );
  }
}

export default App;

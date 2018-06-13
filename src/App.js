import React, { Component } from 'react';
import { Link, Events, animateScroll as scroll, scroller } from 'react-scroll'
import { Container } from 'reactstrap';
import Profile from './components/Profile';
import Experience from './components/Experience';
import Project from './components/Project';
import Skill from './components/Skill';
import Study from './components/Study';
import Education from './components/Education';

class App extends Component {
  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  componentDidMount() {

    Events.scrollEvent.register('begin', function () {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function () {
      console.log("end", arguments);
    });

  }
  scrollToTop() {
    scroll.scrollToTop();
  }
  scrollTo() {
    scroller.scrollTo('scroll-to-element', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }
  scrollToWithContainer() {

    let goToContainer = new Promise((resolve, reject) => {

      Events.scrollEvent.register('end', () => {
        resolve();
        Events.scrollEvent.remove('end');
      });

      scroller.scrollTo('scroll-container', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart'
      });

    });

    goToContainer.then(() =>
      scroller.scrollTo('scroll-container-second-element', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
        containerId: 'scroll-container'
      }));
  }
  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }
  render() {
    return (
      <Container>
        <Profile />
        <Skill />
        <Experience />      
        <Project />
        <Study />
        {/* <Education /> */}        
        <a onClick={this.scrollToTop}>To the top!</a>        
      </Container>
    );
  }
}

export default App;

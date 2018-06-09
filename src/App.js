import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import logo from './logo.svg';
import { Button } from 'reactstrap';


class App extends Component {
  render() {
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      //   <Button color="danger">Danger!</Button>
      //   <Button color="primary">primary</Button>        
      //   <hr className="my-4"/>
      // </div>
      <Container>
        <div className="hr-sect">Profile</div>
        <Row>
          <Col className="col-12 col-md-3 text-md-right">
            <h4 className="gray">Name</h4>
          </Col>
          <Col className="col-12 col-md-9">
            <Row><Col className="mt-1">김준영</Col></Row>
          </Col>
          <Col className="col-12 col-md-3 text-md-right">
            <h4 className="gray">E-mail</h4>
          </Col>
          <Col className="col-12 col-md-9">
            <Row><Col className="mt-1">kimjy4536@hotmail.com</Col></Row>
          </Col>
          <Col className="col-12 col-md-3 text-md-right">
            <h4 className="gray">Github</h4>
          </Col>
          <Col className="col-12 col-md-9">
            <Row><Col className="mt-1">https://github.com/june2</Col></Row>
          </Col>
          <Col className="col-12 col-md-3 text-md-right">
            <h4 className="gray">Linkedin</h4>
          </Col>
          <Col className="col-12 col-md-9">
            <Row><Col className="mt-1">https://www.linkedin.com/in/june4536</Col></Row>
          </Col>
        </Row>

        <div className="hr-sect">Skills</div>
        <Row>
          <Col className="col-12 col-md-3 text-md-right">
            <h4 className="gray">Back-end</h4>
          </Col>
          <Col className="col-12 col-md-9">
            <Row>
              <Col><ul><li>Java</li></ul></Col>
              <Col><ul><li>Node.js</li></ul></Col>
              <Col></Col>
            </Row>
          </Col>
          <Col className="col-12 col-md-3 text-md-right">
            <h4 className="gray">Front-end</h4>
          </Col>
          <Col className="col-12 col-md-9">
            <Row>
              <Col><ul><li>Angular.js</li></ul></Col>
              <Col><ul><li>React.js</li></ul></Col>
              <Col><ul><li>Vue.js</li></ul></Col>
            </Row>
          </Col>
          <Col className="col-12 col-md-3 text-md-right">
            <h4 className="gray">Infrastructure</h4>
          </Col>
          <Col className="col-12 col-md-9">
            <Row>
              <Col><ul><li>AWS</li></ul></Col>
              <Col><ul><li>Azure</li></ul></Col>
              <Col></Col>
            </Row>
          </Col>
          <Col className="col-12 col-md-3 text-md-right">
            <h4 className="gray">Etc</h4>
          </Col>
          <Col className="col-12 col-md-9">
            <Row>
              <Col><ul><li>Git</li></ul></Col>
              <Col><ul><li>Agile</li></ul></Col>
              <Col></Col>
            </Row>
          </Col>
        </Row>

        <div className="hr-sect">Work Experience</div>
        <Row>
          <Col className="col-md-3 col-12 text-md-right">
            <Row>
              <Col className="col-md-12">
                <h4 class="gray">2018. 02 ~<br /></h4>
              </Col>
              <Col className="col-md-12 col-3 text-center text-md-right">
                <span class="badge badge-primary">재직 중</span>
              </Col>
            </Row>
          </Col>
          <Col className="col-md-9 col-12">
            <h4>야놀자 (Yanolja)</h4>
            <i class="gray">  그룹 CX 서비스실 백엔드 개발자</i>
            <ul class="pt-3">
              <li>숙박정보 및 예약서비스 제공</li>
              <li><strong>Skills</strong></li>
              <div>
                <span class="badge badge-secondary">Node.js</span>
                <span class="badge badge-secondary">TypeScript</span>
                <span class="badge badge-secondary">express.js</span>
                <span class="badge badge-secondary">PHP</span>
                <span class="badge badge-secondary">CodeIgniter</span>
                <span class="badge badge-secondary">Amazon Web Service</span>
                <span class="badge badge-secondary">Redis</span>
                <span class="badge badge-secondary">API</span>
              </div>
            </ul>
          </Col>
        </Row>


        <div className="hr-sect">Notable Projects</div>
        <Row>
          <Col className="col-md-3 col-12 text-md-right">
            <Row>
              <Col className="col-md-12">
                <h4 class="gray">2018. 02 ~<br /></h4>
              </Col>
              <Col className="col-md-12 col-3 text-center text-md-right">
                <span class="badge badge-primary">재직 중</span>
              </Col>
            </Row>
          </Col>
          <Col className="col-md-9 col-12">
            <h4>야놀자 (Yanolja)</h4>
            <i class="gray">  그룹 CX 서비스실 백엔드 개발자</i>
            <ul class="pt-3">
              <li>숙박정보 및 예약서비스 제공</li>
              <li><strong>Skills</strong></li>
              <div>
                <span class="badge badge-secondary">Node.js</span>
                <span class="badge badge-secondary">TypeScript</span>
                <span class="badge badge-secondary">express.js</span>
                <span class="badge badge-secondary">PHP</span>
                <span class="badge badge-secondary">CodeIgniter</span>
                <span class="badge badge-secondary">Amazon Web Service</span>
                <span class="badge badge-secondary">Redis</span>
                <span class="badge badge-secondary">API</span>
              </div>
            </ul>
          </Col>
        </Row>

        <div className="hr-sect">Education</div>
        <Row>
          <Col className="col-md-3 col-12 text-md-right">
            <Row>
              <Col className="col-md-12">
                <h4 class="gray">2018. 02 ~<br /></h4>
              </Col>
              <Col className="col-md-12 col-3 text-center text-md-right">
                <span class="badge badge-primary">재직 중</span>
              </Col>
            </Row>
          </Col>
          <Col className="col-md-9 col-12">
            <h4>야놀자 (Yanolja)</h4>
            <i class="gray">  그룹 CX 서비스실 백엔드 개발자</i>
            <ul class="pt-3">
              <li>숙박정보 및 예약서비스 제공</li>
              <li><strong>Skills</strong></li>
              <div>
                <span class="badge badge-secondary">Node.js</span>
                <span class="badge badge-secondary">TypeScript</span>
                <span class="badge badge-secondary">express.js</span>
                <span class="badge badge-secondary">PHP</span>
                <span class="badge badge-secondary">CodeIgniter</span>
                <span class="badge badge-secondary">Amazon Web Service</span>
                <span class="badge badge-secondary">Redis</span>
                <span class="badge badge-secondary">API</span>
              </div>
            </ul>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;

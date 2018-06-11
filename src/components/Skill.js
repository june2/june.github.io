import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';


class Skill extends Component {
  render() {
    return (
      <div>
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
      </div>
    );
  }
}

export default Skill;

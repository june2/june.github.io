import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';


class Profile extends Component {
  render() {
    return (
      <div>
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
            <Row><Col className="mt-1">
              <a href="https://github.com/june2" target="_blank">https://github.com/june2&nbsp;&nbsp;<i className="fa fa-link" aria-hidden="true"></i></a>
            </Col></Row>
          </Col>
          <Col className="col-12 col-md-3 text-md-right">
            <h4 className="gray">Linkedin</h4>
          </Col>
          <Col className="col-12 col-md-9">
            <Row><Col className="mt-1">
              <a href="https://www.linkedin.com/in/june4536" target="_blank">https://www.linkedin.com/in/june4536&nbsp;&nbsp;<i className="fa fa-link" aria-hidden="true"></i></a>
            </Col></Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Profile;

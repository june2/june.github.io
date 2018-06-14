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
            <Row><Col><ul className="profile"><li className="pt-1">{this.props.profile.name}</li></ul></Col></Row>
          </Col>
          <Col className="col-12 col-md-3 text-md-right">
            <h4 className="gray">E-mail</h4>
          </Col>
          <Col className="col-12 col-md-9">
            <Row><Col><ul className="profile"><li className="pt-1">{this.props.profile.email}</li></ul></Col></Row>
          </Col>
          <Col className="col-12 col-md-3 text-md-right">
            <h4 className="gray">Github</h4>
          </Col>
          <Col className="col-12 col-md-9">
            <Row><Col><ul className="profile"><li className="pt-1">
              <a href={this.props.profile.git} target="_blank">{this.props.profile.git}&nbsp;&nbsp;<i className="fa fa-external-link-alt" aria-hidden="true"></i></a>
            </li></ul></Col></Row>
          </Col>
          <Col className="col-12 col-md-3 text-md-right">
            <h4 className="gray">Linkedin</h4>
          </Col>
          <Col className="col-12 col-md-9">            
            <Row><Col><ul className="profile"><li className="pt-1">
            <a href={this.props.profile.linkedin} target="_blank">{this.props.profile.linkedin}&nbsp;&nbsp;<i className="fa fa-external-link-alt" aria-hidden="true"></i></a>
            </li></ul></Col></Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Profile;

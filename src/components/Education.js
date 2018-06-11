import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

class Education extends Component {
  render() {
    return (
      <div>
        <div className="hr-sect">Education</div>
        <Row>
          <Col className="col-md-3 col-12 text-md-right">
            <Row>
              <Col className="col-md-12">
                <h4 className="gray">2018. 02 ~<br /></h4>
              </Col>
              <Col className="col-md-12 col-3 text-center text-md-right">
                <span className="badge badge-primary">재직 중</span>
              </Col>
            </Row>
          </Col>
          <Col className="col-md-9 col-12">
            <h4>야놀자 (Yanolja)</h4>
            <i className="gray">  그룹 CX 서비스실 백엔드 개발자</i>
            <ul className="pt-3">
              <li>숙박정보 및 예약서비스 제공</li>
              <li><strong>Skills</strong></li>
              <div>
                <span className="badge badge-secondary">Node.js</span>
                <span className="badge badge-secondary">TypeScript</span>
                <span className="badge badge-secondary">express.js</span>
                <span className="badge badge-secondary">PHP</span>
                <span className="badge badge-secondary">CodeIgniter</span>
                <span className="badge badge-secondary">Amazon Web Service</span>
                <span className="badge badge-secondary">Redis</span>
                <span className="badge badge-secondary">API</span>
              </div>
            </ul>
          </Col>
        </Row>
      </div >
    );
  }
}

export default Education;

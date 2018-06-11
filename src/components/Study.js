import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { project } from '../data/ko';

class Study extends Component {
  render() {
    return (
      <div>
        <div className="hr-sect">Side Projects / Study</div>
        {project.map((data, i) => {
          return (
            <Row key={i}>
              <Col className="col-md-3 col-12 text-md-right">
                <Row>
                  <Col className="col-md-12">
                    <h4 className="gray">{data.date}<br /></h4>
                  </Col>
                </Row>
              </Col>
              <Col className="col-md-9 col-12">
                <h4>{data.name}</h4>
                {/* <i className="gray">{data.position}</i> */}
                <ul>
                  {data.desc.map((desc, i) => {
                    return (<li key={i}>{desc}</li>)
                  })}
                  <li><strong>Skills</strong></li>
                  <div>
                    {data.skills.map((skill, i) => {
                      return (<span key={i} className="badge badge-secondary">{skill}</span>)
                    })}
                  </div>
                </ul>
              </Col>
            </Row>
          );
        })}
      </div>
    );
  }
}

export default Study;
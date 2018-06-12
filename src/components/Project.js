import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { project } from '../data/ko';

class Project extends Component {
  render() {
    return (
      <div>
        <div className="hr-sect">Notable Projects</div>
        {project.map((data, i) => {
          return (
            <Row key={i} className="mb-5">
              <Col className="col-md-3 col-12 text-md-right">
                <Row>
                  <Col className="col-md-12">
                    <h4 className="gray">{data.date}<br /></h4>
                  </Col>
                  {/* <Col className="col-md-12 col-3 text-center text-md-right"
                    style={data.link ? {} : { display: 'none' }}>
                    <span className="badge badge-primary">{data.link}</span>
                  </Col> */}
                </Row>
              </Col>
              <Col className="col-md-9 col-12">
                <h4>
                  <a href={data.link} target="_blank">
                    {data.name}&nbsp;<i style={data.link ? {} : { display: 'none' }} className="fa fa-link" aria-hidden="true"></i>
                  </a>&nbsp;&nbsp;<i className="note">{data.desc}</i>
                </h4>
                <ul>
                  {data.note.map((note, i) => {
                    return (<li key={i}>{note}</li>)
                  })}
                  <li><strong>Skills</strong></li>
                  <div>
                    <ul>
                      <li style={data.skill.backend.length !== 0 ? {} : { display: 'none' }}>
                        <span><strong>Back-end : </strong></span>
                        {data.skill.backend.map((skill, i) => {
                          return (<span key={i} className="badge badge-secondary mr-1">{skill}</span>)
                        })}
                      </li>
                      <li style={data.skill.frontend.length !== 0 ? {} : { display: 'none' }}>
                        <span><strong>Front-end : </strong></span>
                        {data.skill.frontend.map((skill, i) => {
                          return (<span key={i} className="badge badge-secondary mr-1">{skill}</span>)
                        })}
                      </li>
                      <li style={data.skill.etc.length !== 0 ? {} : { display: 'none' }}>
                        <span><strong>Etc : </strong></span>
                        {data.skill.etc.map((skill, i) => {
                          return (<span key={i} className="badge badge-secondary mr-1">{skill}</span>)
                        })}
                      </li>
                    </ul>
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

export default Project;
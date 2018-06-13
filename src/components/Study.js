import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { study } from '../data/ko';

class Study extends Component {
  render() {
    return (
      <div>
        <div className="hr-sect">Side Projects / Study</div>
        {study.map((data, i) => {
          return (
            <Row key={i} className="mb-4">
              <Col className="col-md-3 col-12 text-md-right">
                <Row>
                  <Col className="col-md-12">
                    <h4>
                      <a href={data.link} target="_blank">
                        {data.name}&nbsp;<i style={data.link ? {} : { display: 'none' }} className="fa fa-external-link-alt" aria-hidden="true"></i>
                      </a>
                    </h4>
                    {/* <i className="note">{data.desc}</i> */}
                  </Col>
                  {/* <Col className="col-md-12 col-3 text-center text-md-right">
                    <a style={data.link ? {} : { display: 'none' }} className="badge badge-primary" href={data.link} target="_blank">링크</a>
                    <a style={data.link ? { display: 'none' } : {}} className="badge badge-primary" href={data.link} target="_blank">서비스 종료</a>
                  </Col> */}
                </Row>
              </Col>
              <Col className="col-md-9 col-12">
                {/* <h4>
                  <a href={data.link} target="_blank">
                    {data.name}&nbsp;<i style={data.link ? {} : { display: 'none' }} className="fa fa-link" aria-hidden="true"></i>
                  </a>&nbsp;&nbsp;<i className="note">{data.desc}</i>
                </h4> */}
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

export default Study;
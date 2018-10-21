import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-scroll'

class Experience extends Component {
  render() {
    return (
      <div>
        <div className="hr-sect">Work Experience</div>
        {this.props.experience.map((data, i) => {
          return (
            <Row key={i} className="mb-4">
              <Col className="col-md-3 col-12 text-md-right">
                <Row>
                  <Col className="col-md-12">
                    <h4 className="gray">{data.date}<br /></h4>
                  </Col>
                  <Col className="col-md-12 col-3 text-center text-md-right"
                    style={data.duration ? {} : { display: 'none' }}>
                    <span className="badge badge-primary">{data.duration}</span>
                  </Col>
                </Row>
              </Col>
              <Col className="col-md-9 col-12">
                <h4>{data.company}&nbsp;&nbsp;&nbsp;<i className="note">{data.position}</i></h4>
                <ul>
                  {data.duty.map((duty, i) => {
                    return (<li key={i}>{duty}</li>)
                  })}
                  <li><strong>{this.props.lang === "ko" ? "참여 프로젝트" : "Projects"}</strong></li>
                  <div>
                    <ul>
                      {data.projects.map((project, i) => {
                        return (<li key={i}>
                          {project.desc}&nbsp;&nbsp;
                          <Link activeClass="active"
                            style={project.key !== "0" ? { cursor: 'pointer' } : { display: 'none', cursor: 'pointer' }}
                            className="fa fa-link"
                            to={project.key}
                            spy={true} smooth={true} duration={500} ></Link>
                        </li>)
                      })}
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

export default Experience;
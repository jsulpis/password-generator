import React from "react";
import {Button, Col, Container, Nav, NavItem, NavLink, Row, UncontrolledTooltip} from "reactstrap";
import "./SimpleFooter.scss";

function SimpleFooter() {
  return (
    <>
      <footer className="">
        <Container>
          <Row className=" align-items-center justify-content-md-between">
            <Col md="3">
              <div className=" copyright">
                © {new Date().getFullYear()}{" "}
                <a href="https://www.juliensulpis.fr?ref=footer-link">
                  Julien Sulpis
                </a>
                .
              </div>
            </Col>
            <Col md="7" className="social-media">
              <Button
                className="rounded-circle btn-icon-only"
                href="https://www.juliensulpis.fr?ref=footer-link"
                color="default"
                outline
                id="tooltipWebsite">
                <i className="ni ni-world-2"/>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltipWebsite">
                Website
              </UncontrolledTooltip>
              <Button
                className="rounded-circle btn-icon-only btn-3 ml-1"
                href="https://www.linkedin.com/in/julien-sulpis/"
                color="default"
                outline
                id="tooltipLinkedin">
                <i className="fa fa-linkedin"/>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltipLinkedin">
                Get in touch
              </UncontrolledTooltip>
              <Button
                className="rounded-circle btn-icon-only btn-3 ml-1"
                href="https://github.com/jsulpis/password-generator"
                color="default"
                outline
                id="tooltipGitHub">
                <i className="fa fa-github"/>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltipGitHub">
                Star on GitHub
              </UncontrolledTooltip>
            </Col>
            <Col md="2">
              <Nav className=" nav-footer justify-content-end">
                <NavItem>
                  <NavLink
                    href="https://github.com/jsulpis/password-generator/blob/master/LICENSE">
                    MIT License
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  )
}


export default SimpleFooter;

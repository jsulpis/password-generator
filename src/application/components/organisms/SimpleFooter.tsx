import React from "react";
import {Button, Col, Container, Nav, NavItem, NavLink, Row, UncontrolledTooltip} from "reactstrap";
import "./SimpleFooter.scss";

function SimpleFooter() {
  return (
    <>
      <footer>
        <Container>
          <Row className="align-items-center justify-content-md-between">
            <Col md="4" className="footer-col copyright">
              <div className=" copyright">
                © {new Date().getFullYear()}{" "}
                <a href="https://www.juliensulpis.fr?ref=footer-link">
                  Julien Sulpis
                </a>
                .
              </div>
            </Col>
            <Col md="5" className="social-media footer-col">
              <Button
                className="rounded-circle btn-icon-only"
                href="https://www.juliensulpis.fr?ref=footer-link"
                color="default"
                outline
                id="tooltipWebsite">
                <i className="fas fa-globe"/>
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
                <i className="fab fa-linkedin-in"/>
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
                <i className="fab fa-github"/>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltipGitHub">
                Star on GitHub
              </UncontrolledTooltip>
            </Col>
            <Col md="3" lg="2" className="footer-col">
              <Nav className="nav-footer">
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

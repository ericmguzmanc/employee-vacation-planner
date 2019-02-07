import React, { Fragment, PureComponent } from 'react'
import { Container, Card, CardFooter, CardBody, InputGroupText,
   Form, FormGroup, Row, Col, Input, Button, InputGroup, InputGroupAddon } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt, faKey, faUmbrellaBeach } from '@fortawesome/free-solid-svg-icons';

import '../styles/common.css';

class SignIn extends PureComponent {

  state = {
    height: window.innerHeight
  }

  render() {
    return(
      <Fragment>
        <Container className="mainCointainer" style={{minHeight: `${this.state.height}px`}}>
          <Card className="auth-card align-middle">
            <CardBody>
              
              <Row style={{marginBottom: "20px"}}> 
                <Col sm={12} className="text-center">
                  <Col sm={12} className="text-center" style={{color: "#4795D6", fontSize: "2rem"}}>
                    <FontAwesomeIcon icon={faUmbrellaBeach}/>
                  </Col>
                  <span style={{fontWeight: "bold", fontSize: "1.2rem"}}>Employee Vacation Planer</span>
                </Col>
              </Row>

              <Form>
                <FormGroup row>
                  <Col sm={12}>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <FontAwesomeIcon icon={faAt}/>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="email" placeholder="email"/>
                    </InputGroup>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col sm={12}>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <FontAwesomeIcon icon={faKey}/>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="password" placeholder="password" />
                    </InputGroup>
                  </Col>
                </FormGroup>
                <FormGroup row className="text-center">
                  <Col sm={12}>
                    <Button style={{width: "100%"}} className="auth-btn" color="primary">Sign In</Button>
                  </Col>
                </FormGroup>
              </Form>

            </CardBody>
            <CardFooter className="text-center" style={{fontSize: "0.9rem"}}>
              <Row>
                <Col>
                  <a href="/"> Forgot Password? </a>
                </Col>
              </Row>
            </CardFooter>
          </Card>
        </Container>
      </Fragment>
    );
  }
}

export default SignIn;
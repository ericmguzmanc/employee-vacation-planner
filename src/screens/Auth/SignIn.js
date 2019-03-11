import React, { Fragment, PureComponent } from 'react'
import { connect } from 'react-redux';
import { Container, Card, CardFooter, CardBody, InputGroupText,
   Form, FormGroup, Row, Col, Input, Button, InputGroup, InputGroupAddon } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt, faKey, faUmbrellaBeach } from '@fortawesome/free-solid-svg-icons';
import { signIn } from '../../store/actions/auth';
import PageLoading from '../../components/PageLoading';
import FormErrors from '../../components/shared/FormErrors';

import { HOME } from '../../utils/constants/routes';

import '../styles/common.css';

class SignIn extends PureComponent {

  state = {
    height: window.innerHeight,
    signInForm: {
      email: '',
      password: '',
      formErrors: { 
        email: 'email is required', 
        password: 'password is required' 
      },
      emailValid: false,
      passwordValid: false,
      formValid: false,
      formErrorsVisible: false
    },
    // userLoggedIn: this.props.userLoggedIn,
    // isLoading: this.props.isLoading
  }

  validateField = (fieldName, value) => {
    let fieldValidationErrors = this.state.signInForm.formErrors;
    let emailValid = this.state.signInForm.emailValid;
    let passwordValid = this.state.signInForm.passwordValid;

    switch (fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      
      case 'password':
        passwordValid = value.length >= 3;
        fieldValidationErrors.password = passwordValid ? '' : ' is invalid';
        break;

      default:
        break;
    }

    this.setState({
      signInForm: {
        email: this.state.signInForm.email,
        password: this.state.signInForm.password,
        formErrors: fieldValidationErrors,
        emailValid: emailValid,
        passwordValid: passwordValid
      }
    }, this.validateForm);

  }

  validateForm = () => {
    let signInForm = Object.assign({}, this.state.signInForm, { formValid: this.state.signInForm.emailValid && this.state.signInForm.passwordValid });
    this.setState({ signInForm: signInForm });
  }

  signIn = async (data) => {
    await this.props.signIn(data);
    // console.log('finished logIn')
    if (this.props.userLoggedIn) {
      const { router } = this.props;
      // console.log('logIn fn ', this.props)
      router.history.push(HOME);
    }
  }

  handleChange = (evt) => {
    const name = evt.target.name;
    const value = evt.target.value;

    let signInForm = Object.assign({}, this.state.signInForm, { [name]: value });

    this.setState({
      signInForm: signInForm
    }, () => {
      // console.log(this.state.signInForm)
      this.validateField(name, value);
    });
   
  }

  handleSubmit = () => {
    if (this.state.signInForm.formValid) {
      this.signIn({
        email: this.state.signInForm.email,
        password: this.state.signInForm.password
      });

    } else {
      this.validateForm();
      let signInForm = Object.assign({}, this.state.signInForm, { formErrorsVisible: !this.state.signInForm.formErrorsVisible })
      this.setState({
        signInForm: signInForm
      });
    }
  }

  render() {

    return(
      <Fragment>
        <PageLoading isLoading={this.props.isLoading}/>
        {
          !this.props.isLoading && 
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
                      <Input type="email" onChange={(evt) => this.handleChange(evt)} placeholder="email" name="email" required/>
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
                      <Input type="password" onChange={(evt) => this.handleChange(evt)} placeholder="password" name="password" required/>
                    </InputGroup>
                  </Col>
                </FormGroup>
                <FormGroup row className="text-center">
                  <Col sm={12}>
                    <Button 
                      style={{width: "100%"}} 
                      className="auth-btn" 
                      color="primary" 
                      onClick={() => this.handleSubmit()}
                      // disabled={!this.state.signInForm.formValid}
                      >Sign In</Button>
                  </Col>
                </FormGroup>
                <div>
                  <span>{ !this.props.error.success }</span>
                  {
                    ( this.state.signInForm.formErrorsVisible || this.props.error.success !== undefined) &&
                    <FormErrors formErrors={this.state.signInForm.formErrors} apiErrors={this.props.error.message}/>
                  }
                </div>
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

        }
        
      </Fragment>
    );
  }
}

const mapStateToProps = ({auth, isFetching}) => {
  return {
    userLoggedIn: auth.userLoggedIn,
    isLoading: isFetching.loading,
    error: isFetching.error
  }
}

export default connect(mapStateToProps, { signIn })(SignIn);
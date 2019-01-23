import React, { Fragment, PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Card, CardImg, CardText, CardBody,
  CardTitle, Row, Col, Button } from 'reactstrap';
import { fetchEmployeesOnVacation } from '../store/actions/VacationList';
import Loading from './Loading';
import { Animated } from 'react-animated-css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faHourglassEnd } from '@fortawesome/free-solid-svg-icons';
import './styles/VacationList.css';

class VacationList extends PureComponent {

  componentDidMount() {
    this.props.fetchEmployeesOnVacation();
  }

  render() {

    const goToEmployee = (employeeCode) => {
      this.props.history.push('/employee/' + employeeCode);
    }

    const { isLoading, employees } = this.props.vacationList;

    if (typeof isLoading !== undefined) {
      if (isLoading) {
        return <Loading />
      }
    }

    return(
      <Fragment>
        <Animated animationIn="fadeIn" animationOut="fadeOut">
          <Col xs="12">
            {

              employees.map((employee, index) => {
                if (typeof employee.vacationActive !== undefined) {
                  if (employee.vacationActive) {
                    // const employeePhoto = import(`../../${employee.employeePhoto}`);
                    return (
                      <Card key={index} style={{display: "inline-block"}} className="employeeCard">
                        <CardImg top className="employeePhoto" src={`./${employee.employeePhoto}`} alt="Card image cap" />
                        <CardBody>
                          <CardTitle style={{fontWeight: "bold", fontSize: "1rem"}}>
                            {employee.name + ' ' + employee.lastName}
                          </CardTitle>
                          <CardText className="text-muted" style={{fontSize: "0.9rem"}}>
                            {employee.title}
                          </CardText>
                            <Row>
                              <Col sm="12">
                                <span className="" style={{fontSize:"1.1rem"}}>
                                  Days left: <span style={{fontWeight:"bold"}}>5</span> 
                                </span>
                              </Col>
                            </Row>
                            <Row style={{paddingTop: "15px"}}>
                              <Col sm="12">
                                <Button outline color="secondary" style={cardButtonStyle} onClick={() => goToEmployee(employee.employeeCode)}>
                                  <FontAwesomeIcon icon={faEye}/>
                                </Button>
                                <Button outline color="secondary" style={cardButtonStyle}>
                                  <FontAwesomeIcon icon={faHourglassEnd}/>
                                </Button>
                              </Col>
                            </Row>
                        </CardBody>
                      </Card>
                    );
                  } 
                }  
                return null; 
              })
                
            }
            
          </Col>
        </Animated>
      </Fragment>
    );
  }
}

const cardButtonStyle = {
  margin: "2px",
  width:"3rem"
}

const mapStateToProps = (state) => {
  return {
    vacationList: state.vacationList
  }
}

export default withRouter(connect(mapStateToProps, { fetchEmployeesOnVacation })(VacationList));
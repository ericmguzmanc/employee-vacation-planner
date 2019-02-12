import React, { Fragment, PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Card, CardImg, CardText, CardBody,
  CardTitle, Row, Col, Button } from 'reactstrap';
import { fetchEmployeesOnVacation } from '../store/actions/vacationList';
import Loading from './Loading';
import { Animated } from 'react-animated-css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faUmbrellaBeach } from '@fortawesome/free-solid-svg-icons';
import TooltipItem from './TooltipItem';
import './styles/VacationList.css';
import { daysUntilDate } from '../utils/functions/util';

class VacationList extends PureComponent {

  state = {
    tooltipOpen: false
  };

  componentDidMount() {
    this.props.fetchEmployeesOnVacation();
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(nextProps, '\n', nextState)
  // }

  goToEmployee = (employeeCode) => {
    this.props.history.push('/employee/' + employeeCode);
  };

  getVacationDaysLeft = (vacationEnds) => {
    return daysUntilDate(vacationEnds);
  };

  getVacationDaysStatusColor = (vacationEnds) => {
    const daysLeft = this.getVacationDaysLeft(vacationEnds);
    let color = '';
    if (daysLeft <= 5 ) {
      color = '#ED2939';
    } else if (daysLeft <= 10 && daysLeft > 5) {
      color = '#FDDD5C';
    } else {
      color = '#03C03C';
    }

    return color;
  }

  render() {

    const { employees } = this.props.vacationList;
    const { isLoading } = this.props;

    return(
      <Fragment>
        <Animated animationIn="fadeIn" animationOut="fadeOut">
          <Col xs="12">
            { isLoading && <Loading type="grow"/>}
            { !isLoading &&
              employees.map((employee, index) => {
                if (typeof employee.vacationActive !== undefined) {
                  if (employee.vacationActive) {
                    return (
                      <Card key={index} style={{display: "inline-block", borderRadius: "15px"}} className="employeeCard">
                        <CardImg top className="employeePhoto" src={`./${employee.employeePhoto}`} alt="Card image cap" />
                        <CardBody>
                          <CardTitle style={{fontWeight: "bold", fontSize: "1rem", marginBottom: "0rem"}}>
                            {employee.name + ' ' + employee.lastName}
                          </CardTitle>
                          <CardText className="text-muted" style={{fontSize: "0.9rem"}}>
                            {employee.title}
                          </CardText>
                            <Row>
                              <Col sm="12">
                                <div className="text-center" style={{fontSize:"1.1rem"}}>
                                  <span className="employeeCardDays">Days left: </span> 
                                  <div className="employeeCardDays numberCircle" style={{margin: "0 auto", marginTop: "10px", border: `3px solid ${this.getVacationDaysStatusColor(employee.vacationEnds)}`}}>
                                    {this.getVacationDaysLeft(employee.vacationEnds)}
                                  </div>
                                </div>
                              </Col>
                            </Row>
                            <Row style={{paddingTop: "15px"}}>
                              <Col sm="12">
                                <TooltipItem placement="bottom" id={index} toggleText="See vacation Info">
                                  <Button outline color="secondary" id={`VacationInfo-${index}`} style={cardButtonStyle}>
                                    <FontAwesomeIcon icon={faUmbrellaBeach}/>
                                  </Button>
                                </TooltipItem>
                                <TooltipItem placement="bottom" id={index + 1} toggleText="See Employee Info">
                                  <Button outline color="secondary" id={`SeeEmployee-${index}`} style={cardButtonStyle} onClick={() => this.goToEmployee(employee.employeeCode)}>
                                    <FontAwesomeIcon icon={faEye}/>
                                  </Button>
                                </TooltipItem>
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
  width:"3rem",
  border: "0px solid #ccc"
}

const mapStateToProps = (state) => {
  return {
    vacationList: state.vacationList,
    isLoading: state.isFetching.loading
  }
}

export default withRouter(connect(mapStateToProps, { fetchEmployeesOnVacation })(VacationList));
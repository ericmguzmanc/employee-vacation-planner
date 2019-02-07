import React, { Fragment, PureComponent } from 'react';
import  { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Col, Card, Row, CardImg, CardBody, CardTitle,
CardText, Container, CardHeader, Badge } from 'reactstrap';
import './styles/EmployeeDetailCards.css';
import { fetchEmployeeById } from '../store/actions/employee';
import Loading from './Loading';
import EmployeeForm from './EmployeeForm';

class EmployeeDetailCard extends PureComponent {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchEmployeeById(id);
  }

  render() {

    const { isLoading, employee } = this.props.selectedEmployee 

    return(
      <Fragment>
        <Container>
          {/* <Col xs="12" md="10"> */}
          <Row>
            <Col xs="4">
              <Row>
                <Col xs="12">
                  <Card className="employeeDetailCard" style={{minHeight:"18rem"}}>
                    {!isLoading && <CardImg top className="employeeDetailCardPhoto" src={`../${employee.employeePhoto}`} alt="Card image cap" />}
                    <CardBody className="text-center">
                    {isLoading && <Loading marginTop="25%"/>}
                    {
                      !isLoading &&
                        <Fragment>
                          <CardTitle style={{fontWeight: "bold", fontSize: "1.1rem", marginBottom: "0rem"}}>
                            {employee.name + ' ' + employee.lastName}
                          </CardTitle>
                          <CardText className="text-muted" style={{fontSize: "0.9rem"}}>
                            {employee.title}
                          </CardText>
                        </Fragment>
                      }
                      </CardBody>
                  </Card>
                </Col>
              </Row>

              <Row>
                <Col xs="12" style={{marginTop:"15px"}}>
                  <Card className="employeeDetailCard" style={{minHeight:"7rem"}}> 
                  <CardBody>
                    {isLoading && <Loading marginTop="4%"/>}
                    {
                      !isLoading &&
                        <Fragment>
                          <CardTitle> Title</CardTitle>
                          <CardText> Text </CardText>
                        </Fragment>
                    }
                    </CardBody> 
                  </Card>
                </Col>
              </Row>
            </Col>

            <Col xs="8">
              <Card style={{minHeight:"40rem", borderRadius:"15px", display:"inline-block", width: "40rem"}}>
                {!isLoading && 
                  <CardHeader className="text-center">
                    Employee code: 
                      <Badge color="light" pill>
                        <span style={{fontWeight:"bold", fontSize:"1rem"}}>{employee.employeeCode}</span>
                      </Badge>
                  </CardHeader>
                }
                <CardBody>
                  {isLoading && <Loading marginTop="40%"/>}
                  {
                    !isLoading &&
                      <Fragment>
                        <EmployeeForm />
                        {/* <CardTitle> Title</CardTitle>
                        <CardText> Text </CardText> */}
                      </Fragment>
                  }
                </CardBody> 
              </Card>
            </Col>
          </Row>
          {/* </Col> */}
        </Container>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ selectedEmployee, configuration: { sidebarExpanded } }) => {
  return {
    sidebarExpanded,
    selectedEmployee
  }
};
export default withRouter(connect(mapStateToProps, { fetchEmployeeById })(EmployeeDetailCard));
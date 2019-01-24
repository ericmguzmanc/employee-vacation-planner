import React, { Fragment, PureComponent } from 'react';
import  { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Col, Card, Row, CardImg, CardBody, CardTitle,
CardText, Container } from 'reactstrap';
import './styles/App.css';
import { fetchEmployeeById } from '../store/actions/Employee';

class EmployeeDetailCard extends PureComponent {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchEmployeeById(id);
  }

  render() {

    console.log(this.props)

    const { isLoading, employee } = this.props.selectedEmployee 

    return(
      <Fragment>
        <Container>
          {/* <Col xs="12" md="10"> */}
          <Row>
            <Col xs="4">
              <Row>
                <Col xs="12">
                  <Card>
                    <CardImg top className="" src={`./${employee.employeePhoto}`} alt="Card image cap" />
                    <CardBody>
                      <CardTitle> Title</CardTitle>
                      <CardText> Text </CardText>
                    </CardBody>
                  </Card>
                </Col>
              </Row>

              <Row>
                <Col xs="12" style={{marginTop:"15px"}}>
                  <Card>
                    <CardBody>
                      <CardTitle></CardTitle>
                      <CardText></CardText>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Col>

            <Col xs="8">
              <Card>
                <CardBody>
                  <CardTitle></CardTitle>
                  <CardText></CardText>
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
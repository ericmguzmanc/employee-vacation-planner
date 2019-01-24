import React, { Fragment, PureComponent } from 'react';
import { connect } from 'react-redux';
import { Table, Col } from 'reactstrap';
import { fetchEmployees } from '../store/actions/EmployeeList';
import { Animated } from 'react-animated-css';
import Loading from './Loading';

class EmployeeList extends PureComponent {

  componentDidMount() {
    this.props.fetchEmployees();
  }

  formatIsOnVacation = (onVacation) => {
    if(onVacation) {
      return 'Yes';
    } else {
      return 'No';
    }
  }

  render() {

    const { isLoading, employees } = this.props.employeeList;

    return(
      <Fragment>
        <Animated animationIn="fadeIn" animationOut="fadeOut">
          <Col xs="12">
            { isLoading && <Loading />}
            { !isLoading &&
              <Table striped>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Title</th>
                    <th>Hire Date</th>
                    <th>On Vacation</th>
                  </tr>
                </thead>
                <tbody>
                { 
                  employees.map((employee, index) => (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{employee.name + ' ' + employee.lastName}</td>
                      <td>{employee.title}</td>
                      <td>{employee.hireDate}</td>
                      <td>{this.formatIsOnVacation(employee.vacationActive)}</td>
                    </tr>
                  ))
                }
                </tbody>
              </Table>
            }
          </Col>
        </Animated>
      </Fragment>
    );
  }
}

const mapStateToProps = ( { employeeList } ) => {
  return {
    employeeList
  }
};

export default connect(mapStateToProps, { fetchEmployees })(EmployeeList);
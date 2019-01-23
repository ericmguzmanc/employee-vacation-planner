import React, { Fragment, PureComponent } from 'react';
import { connect } from 'react-redux';
import { Table } from 'reactstrap';
import { fetchEmployees } from '../store/actions/EmployeeList';
import { Animated } from 'react-animated-css';
import Loading from './Loading';

class EmployeeList extends PureComponent {

  componentDidMount() {
    this.props.fetchEmployees();
  }

  render() {

    const { isLoading, employees } = this.props.employeeList;

    if (typeof isLoading != undefined) {
      if(isLoading) {
        return <Loading />;
      }
    }

    const formatIsOnVacation = (onVacation) => {
      if(onVacation) {
        return 'Yes';
      } else {
        return 'No';
      }
    }

    return(
      <Fragment>
        <Animated animationIn="fadeIn" animationOut="fadeOut">
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
                  <td>{formatIsOnVacation(employee.vacationActive)}</td>
                </tr>
              ))
            }
            </tbody>
          </Table>
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
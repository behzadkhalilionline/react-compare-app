import { useEffect, useCallback } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Employee from "../components/Employee";
import { EmployeeTable } from "../components/EmployeeTable";
import { EMPLOYEES_FETCH_REQUESTED } from "../constants/employees";
import { COMPARES_SET_REQUESTED } from "../constants/compares";
import { Container, Card } from "semantic-ui-react";

export const Employees = ({ employees, compares, dispatch }) => {
  const handleSetCompare = useCallback(
    (employee) => {
      dispatch({ type: COMPARES_SET_REQUESTED, data: employee });
    },
    [dispatch]
  );

  useEffect(() => {
    dispatch({ type: EMPLOYEES_FETCH_REQUESTED });
  }, [dispatch]);

  return (
    <Container>
      {employees.length > 0 && (
        <>
          <EmployeeTable employees={compares} />
          <Card.Group itemsPerRow={4}>
            {employees.map((employee) => (
              <Employee
                key={employee.id}
                employee={employee}
                onCompare={handleSetCompare}
              />
            ))}
          </Card.Group>
        </>
      )}
    </Container>
  );
};

Employees.propTypes = {
  employees: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = ({ employees, compares }) => {
  return { employees, compares };
};

export default connect(mapStateToProps, null)(Employees);

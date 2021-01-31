import PropTypes from "prop-types";
import "./EmployeeTable.scss";

const EmployeeTable = ({ employees }) => {
  const [employee1, employee2] = employees;

  return (
    <div className="employee-table">
      <div className="features">
        <ul>
          <li>Name</li>
          <li>Salary</li>
          <li>Age</li>
        </ul>
      </div>
      {[employee1, employee2].map((employee, index) => (
        <div key={employee ? employee.id : index * 999} className="employee">
          <ul>
            <li>{employee ? employee.employee_name : "-"}</li>
            <li>{employee ? employee.employee_salary : "-"}</li>
            <li>{employee ? employee.employee_age : "-"}</li>
          </ul>
        </div>
      ))}
    </div>
  );
};

EmployeeTable.propTypes = {
  employees: PropTypes.array,
};

export { EmployeeTable };

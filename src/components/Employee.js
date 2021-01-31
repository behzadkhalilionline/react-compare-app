import { memo } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { Card, Image, Grid } from "semantic-ui-react";

const img = "assets/img/sample.png";

const Employee = ({ employee, onCompare }) => {
  //It's not good for memoization
  const compares = useSelector((state) => state.compares);

  return (
    <Card
      onClick={() => onCompare(employee)}
      style={
        compares && compares.findIndex((item) => item.id === employee.id) >= 0
          ? { backgroundColor: "grey", opacity: "40%" }
          : {}
      }
    >
      <Image src={img} />
      <Card.Content>
        <Card.Header>{employee.employee_name}</Card.Header>
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column>{employee.employee_salary}</Grid.Column>
            <Grid.Column>{employee.employee_age} YO</Grid.Column>
          </Grid.Row>
        </Grid>
      </Card.Content>
    </Card>
  );
};

Employee.propTypes = {
  employee: PropTypes.object.isRequired,
  onCompare: PropTypes.func.isRequired,
};

export default memo(Employee);

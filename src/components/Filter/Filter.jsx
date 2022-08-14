import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';
import styled from 'styled-components';

const Input = styled(Field)`
  color: #2a2a2a;
  font-size: 16px;
`;

const Filter = function ({ filter, handleFilter }) {
  return (
    <Formik initialValues={{ filter: filter }}>
      <Form>
        <label>
          Find contacts by name
          <Input
            type="text"
            name="filter"
            value={filter}
            onChange={e => {
              handleFilter(e.target.value);
            }}
          ></Input>
        </label>
      </Form>
    </Formik>
  );
};

Filter.Filter = {
  filter: PropTypes.string.isRequired,
  handleFilter: PropTypes.func.isRequired,
};

export default Filter;

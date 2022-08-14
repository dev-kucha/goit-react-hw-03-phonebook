import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import styled from 'styled-components';
import * as yup from 'yup';
import 'yup-phone';

const FormPlateStyled = styled.section`
  border: 1px solid lightgrey;
  padding: 8px;
  margin-bottom: 36px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
`;

const Input = styled(Field)`
  color: #2a2a2a;
  font-size: 16px;
`;

const ErrorMessageStiled = styled(ErrorMessage)`
  color: red;
`;

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.string().phone().required(),
  // number: yup.string().phone('UA').required(),
});

const ContactForm = function ({ handleSubmit }) {
  return (
    <FormPlateStyled>
      <Formik
        initialValues={{ name: '', number: '' }}
        validationSchema={schema}
        onSubmit={(values, { resetForm }) => {
          handleSubmit(values);
          resetForm();
        }}
      >
        <Form>
          <Label>
            Name
            <br />
            <Input type="text" name="name" />
            <ErrorMessageStiled name="name" component="div" />
          </Label>
          <br />
          <Label>
            Number
            <br />
            <Input type="tel" name="number" placeholder="+380..." />
            <ErrorMessageStiled name="number" component="div" />
          </Label>
          <br />
          <button type="submit" name="addContact">
            Add contact
          </button>
        </Form>
      </Formik>
    </FormPlateStyled>
  );
};

ContactForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default ContactForm;

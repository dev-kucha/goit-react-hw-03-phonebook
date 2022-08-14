import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import styled from 'styled-components';
import * as yup from 'yup';
import 'yup-phone';

const Input = styled(Field)`
  color: #2a2a2a;
  font-size: 16px;
`;

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.string().phone().required(),
  // number: yup.string().phone('UA').required(),
});

const ContactForm = function ({ handleSubmit }) {
  //   const { title, stats } = p;
  //   console.log(p);
  return (
    <>
      <h3>Name</h3>
      <Formik
        initialValues={{ name: '', number: '' }}
        validationSchema={schema}
        onSubmit={(values, { resetForm }) => {
          // console.log(values);
          handleSubmit(values);
          // console.log(actions);
          resetForm();
        }}
      >
        <Form>
          <label>
            Name
            <Input type="text" name="name" />
            <ErrorMessage name="name" component="div" />
          </label>
          <br />
          <label>
            Number
            <Input type="tel" name="number" />
            <ErrorMessage name="number" component="div" />
          </label>
          <br />
          <button type="submit" name="addContact">
            Add contact
          </button>
        </Form>
      </Formik>
    </>
  );
};

ContactForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default ContactForm;

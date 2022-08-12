import { Component } from 'react';
import { nanoid } from 'nanoid';
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
  number: yup.string().phone('UA').required(),
});

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  createContact(name, number) {
    return { name: name, number: number, id: nanoid() };
  }

  addContact = contact => {
    this.setState(prevState => {
      return { contacts: [contact, ...prevState.contacts] };
    });
  };
  handleSubmit = ({ name, number }) => {
    this.addContact(this.createContact(name, number));
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          // display: 'flex',
          // justifyContent: 'center',
          // alignItems: 'center',
          fontSize: 20,
          color: '#010101',
        }}
      >
        <h2>Phonebook</h2>
        <h3>Name</h3>
        <Formik
          initialValues={{ name: '', number: '' }}
          validationSchema={schema}
          onSubmit={(values, { resetForm }) => {
            console.log(values);
            this.handleSubmit(values);
            // console.log(actions);
            resetForm();
            // e.preventDefault();
            // console.log(e.target.elements.name.value);
            // const { name } = target.elements;
            // this.addContact({ name: name, id: nanoid() });
            // this.handleSubmit(e.target.elements);
            // e.target.reset();
          }}
        >
          <Form
          // onSubmit={e => {
          //   e.preventDefault();
          //   // console.log(e.target.elements.name.value);
          //   // const { name } = e.target.elements;
          //   // console.log(name.value);
          //   // this.addContact({ name: name, id: nanoid() });
          //   this.handleSubmit(e.target.elements);
          //   e.target.reset();
          // }}
          >
            <label>
              Name
              <Input
                type="text"
                name="name"
                // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                // required
              />
              <ErrorMessage name="name" component="div" />
            </label>
            <br />
            <label>
              Number
              <Input
                type="tel"
                name="number"
                // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                // required
              />
              <ErrorMessage name="number" component="div" />
            </label>
            <br />
            <button type="submit" name="addContact">
              Add contact
            </button>
          </Form>
        </Formik>
        <h2>Contacts</h2>
        <ul>
          {this.state.contacts.map((contact, idx) => {
            return (
              <li key={idx}>
                {contact.name}: {contact.number}
              </li>
            );
          })}
        </ul>
        {/* {console.log(this.createContact('vasya'))} */}
        {/* {this.addContact({ name: 'vasya', id: nanoid() })} */}
      </div>
    );
  }
}

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
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '38044-459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '38055-443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '38066-645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '38077-227-91-26' },
    ],
    filter: '',
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

  handleFilter = filterText => {
    this.setState(() => {
      return { filter: filterText };
    });
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
            // console.log(values);
            this.handleSubmit(values);
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
        <h2>Contacts</h2>
        <Formik initialValues={{ filter: this.state.filter }}>
          <Form>
            <label>
              Find contacts by name
              <Input
                type="text"
                name="filter"
                value={this.state.filter}
                onChange={e => {
                  // console.log(e.target);
                  // console.log(e.target.value);
                  this.handleFilter(e.target.value);
                  // this.handleSubmit(values);
                  // console.log(actions);
                  // e.preventDefault();
                  // console.log(e.target.elements.name.value);
                  // const { name } = target.elements;
                  // this.addContact({ name: name, id: nanoid() });
                  // this.handleSubmit(e.target.elements);
                  // e.target.reset();
                }}
              ></Input>
            </label>
          </Form>
        </Formik>
        {}
        <ul>
          {this.state.contacts
            .filter(contact =>
              contact.name
                .toLowerCase()
                .includes(this.state.filter.toLowerCase())
            )
            .map((contact, idx) => {
              // this.state.contacts.map((contact, idx) => {
              return (
                <li key={idx}>
                  {contact.name}: {contact.number}
                </li>
              );
            })}
        </ul>
      </div>
    );
  }
}

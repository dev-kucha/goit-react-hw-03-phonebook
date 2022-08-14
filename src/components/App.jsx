import { Component } from 'react';
import { nanoid } from 'nanoid';
// import styled from 'styled-components';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '38044-459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '38055-443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '38066-645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '38077-227-91-26' },
    ],
    filter: '',
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
          fontSize: 20,
          color: '#010101',
        }}
      >
        <h1>Phonebook</h1>
        <ContactForm handleSubmit={this.handleSubmit} />
        <h2>Contacts</h2>
        <Filter filter={this.filter} handleFilter={this.handleFilter} />
        <ContactList
          contacts={this.state.contacts}
          filter={this.state.filter}
        />
      </div>
    );
  }
}

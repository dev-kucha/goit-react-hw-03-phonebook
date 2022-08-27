import { Component } from 'react';
import { nanoid } from 'nanoid';
import styled from 'styled-components';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

const Main = styled.div`
  width: 520px;
  margin: 0 auto;
  font-size: 16px;
`;

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '+38044-459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '+38055-443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '+38066-645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '+38077-227-91-26' },
    ],
    filter: '',
  };

  createContact(name, number) {
    return { name: name, number: number, id: nanoid() };
  }
  isIncludes = newName => {
    return this.state.contacts.find(
      contact =>
        contact.name.toLocaleLowerCase() === newName.toLocaleLowerCase()
    )
      ? true
      : false;
  };

  addContact = contact => {
    this.setState(prevState => {
      return { contacts: [contact, ...prevState.contacts] };
    });
  };

  handleDelete = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  handleSubmit = ({ name, number }) => {
    !this.isIncludes(name)
      ? this.addContact(this.createContact(name, number))
      : alert(`${name} is already in contacts`);
  };

  handleFilter = filterText => {
    this.setState(() => {
      return { filter: filterText };
    });
  };

  componentDidMount() {
    const cts = JSON.parse(localStorage.getItem('contacts'));

    if (cts) {
      this.setState(() => {
        return {
          contacts: cts,
        };
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    return (
      <Main>
        <h1>Phonebook</h1>
        <ContactForm handleSubmit={this.handleSubmit} />
        <h2>Contacts</h2>
        <Filter filter={this.filter} handleFilter={this.handleFilter} />
        <ContactList
          contacts={this.state.contacts}
          filter={this.state.filter}
          handleDelete={this.handleDelete}
        />
      </Main>
    );
  }
}

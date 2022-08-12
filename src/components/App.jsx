import { Component } from 'react';
import { nanoid } from 'nanoid';

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
  handleSubmit = ({
    name: { value: incomName },
    number: { value: incomNumber },
  }) => {
    this.addContact(this.createContact(incomName, incomNumber));
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
        <form
          onSubmit={e => {
            e.preventDefault();
            // console.log(e.target.elements.name.value);
            // const { name } = e.target.elements;
            // console.log(name.value);
            // this.addContact({ name: name, id: nanoid() });
            this.handleSubmit(e.target.elements);
            e.target.reset();
          }}
        >
          <label>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label>
            Number
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button type="submit" name="addContact">
            Add contact
          </button>
        </form>
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

import PropTypes from 'prop-types';
// import styled from 'styled-components';
import ContactItem from './ContactItem';

const ContactList = function ({ contacts, filter, handleDelete }) {
  return (
    <ul>
      {contacts
        .filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        )
        .map((contact, idx) => {
          return (
            <li key={idx}>
              <ContactItem contact={contact} handleDelete={handleDelete} />
            </li>
          );
        })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default ContactList;

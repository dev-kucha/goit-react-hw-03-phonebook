import PropTypes from 'prop-types';
// import styled from 'styled-components';

const ContactList = function ({ contacts, filter }) {
  return (
    <ul>
      {contacts
        .filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        )
        .map((contact, idx) => {
          return (
            <li key={idx}>
              {contact.name}: {contact.number}
            </li>
          );
        })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
};

export default ContactList;

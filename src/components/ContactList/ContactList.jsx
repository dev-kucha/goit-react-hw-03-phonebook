import PropTypes from 'prop-types';
import styled from 'styled-components';
import ContactItem from './ContactItem';

const ListSlyled = styled.ul`
  list-style: none;

  padding: 0;
`;

const ContactList = function ({ contacts, filter, handleDelete }) {
  return (
    <ListSlyled>
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
    </ListSlyled>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default ContactList;

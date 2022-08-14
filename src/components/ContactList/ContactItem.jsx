import PropTypes from 'prop-types';
import styled from 'styled-components';

const ItemStyled = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  background-color: lightgrey;
`;

const ContactItem = function ({ contact, handleDelete }) {
  return (
    <ItemStyled>
      <span>{contact.name}:</span> <span>{contact.number}</span>
      <button
        type="button"
        name="deleteBtn"
        onClick={() => handleDelete(contact.id)}
      >
        Delete
      </button>
    </ItemStyled>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default ContactItem;

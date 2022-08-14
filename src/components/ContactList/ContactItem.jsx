import PropTypes from 'prop-types';

const ContactItem = function ({ contact, handleDelete }) {
  return (
    <p>
      {contact.name}: {contact.number}{' '}
      <button
        type="button"
        name="deleteBtn"
        onClick={() => handleDelete(contact.id)}
      >
        Delete
      </button>
    </p>
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

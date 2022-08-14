import PropTypes from 'prop-types';

const ContactItem = function ({ contact }) {
  return (
    <>
      {contact.name}: {contact.number}
    </>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};

export default ContactItem;

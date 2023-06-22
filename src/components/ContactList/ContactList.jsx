import { ContactUser } from 'components/ContactUser/ContactUser';
import PropTypes from 'prop-types';

export const ContactList = ({ contactSearch, deleteContact }) => {
  return (
    <ul>
      {contactSearch.map(({ name, number, id }) => {
        return (
          <ContactUser
            id={id}
            key={id}
            name={name}
            number={number}
            deleteContact={deleteContact}
          />
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contactSearch: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
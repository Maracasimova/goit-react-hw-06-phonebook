import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactSlice';
import style from './ContactUser.module.css';
import PropTypes from 'prop-types';

export const ContactUser = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li>
      {name} : {number}
      <button className={style.btn} type="button" onClick={handleDeleteContact}>
        Delete
      </button>
    </li>
  );
};

ContactUser.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

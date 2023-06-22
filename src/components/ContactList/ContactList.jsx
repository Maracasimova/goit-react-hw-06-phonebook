import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactSlice';
import { ContactUser } from 'components/ContactUser/ContactUser';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const contactSearch = contacts.filter(({ name }) => {
    return name.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <ul>
      {contactSearch.map(({ id, name, number }) => (
        <ContactUser
          id={id}
          key={id}
          name={name}
          number={number}
          deleteContact={handleDeleteContact}
        />
      ))}
    </ul>
  );
};

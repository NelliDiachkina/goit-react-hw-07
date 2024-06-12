import { useSelector } from 'react-redux';

import { selectContacts } from '../../redux/contactsSlice';
import { selectNameFilter } from '../../redux/filtersSlice';

import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

const ContactList = () => {
  const contactsItems = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  const filteredContacts = contactsItems.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={css.contactList}>
      {filteredContacts.map(({ id, name, number }) => (
        <Contact key={id} name={name} number={number} id={id} />
      ))}
    </ul>
  );
};

export default ContactList;

import { useDispatch } from 'react-redux';
import { FaUserLarge, FaPhone } from 'react-icons/fa6';

import { deleteContact } from '../../redux/contactsSlice';

import css from './Contact.module.css';

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <li className={css.contactListItem}>
      <div className={css.wrapper}>
        <p className={css.text}>
          <FaUserLarge size={20} />
          {name}
        </p>
        <p className={css.text}>
          <FaPhone size={20} />
          {number}
        </p>
      </div>
      <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
    </li>
  );
};

export default Contact;

import css from './ContactList.module.css';
import PropTypes from 'prop-types';

import ContactListItem from 'components/ContactListItem/ContactListItem';
import Notification from 'components/Notification/Notification';

const ContactList = ({ contacts, onRemoveContact, filter }) => {
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      {contacts.length === 0 ? (
        <Notification message="No contacts yet" />
      ) : (
        <ul className={css.list}>
          {filteredContacts.map(({ id, name, number }) => (
            <ContactListItem
              key={id}
              contact={{ id, name, number }}
              onRemoveContact={onRemoveContact}
            />
          ))}
        </ul>
      )}
    </>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  onRemoveContact: PropTypes.func,
  filter: PropTypes.string,
};

export default ContactList;
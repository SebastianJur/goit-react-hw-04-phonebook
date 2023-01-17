import { Component } from 'react';
import css from './ContactListItem.module.css';
import PropTypes from 'prop-types';

class ContactListItem extends Component {
  render() {
    const { contact, onRemoveContact } = this.props;
    return (
      <li className={css.item}>
        <p className={css.text}>
          {contact.name}: {contact.number}
        </p>

        <button
          className={css.button}
          type="button"
          onClick={() => onRemoveContact(contact.id)}
        >
          Delete
        </button>
      </li>
    );
  }
}

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string,
  }),
  onRemoveContact: PropTypes.func,
};

export default ContactListItem;
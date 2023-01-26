import css from './ContactForm.module.css';
import PropTypes from 'prop-types';

const ContactForm = ({ handleSubmit }) => (
  <form className={css.form} onSubmit={handleSubmit}>
    <label className={css.label}>
      Name
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </label>

    <label className={css.label}>
      Number
      <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
    </label>

    <button className={css.button} type="submit">
      Add contact
    </button>
  </form>
);

ContactForm.propTypes = {
  handleSubmit: PropTypes.func,
};

export default ContactForm;
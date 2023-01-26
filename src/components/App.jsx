import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const contacts = localStorage.getItem('contacts');
    if (contacts) {
      setContacts(JSON.parse(contacts));
    }
  }, []);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const { name, number } = form.elements;
    const contact = {
      name: name.value,
      number: number.value,
      id: nanoid(),
    };

    if (contacts.find(contact => contact.name === name.value)) {
      alert(`${name.value} is already in contacts`);
      return;
    }

    setContacts(prevState => [...prevState, contact]);
    localStorage.setItem('contacts', JSON.stringify([...contacts, contact]));
    form.reset();
  };

  const onRemoveContact = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
    localStorage.setItem(
      'contacts',
      JSON.stringify(contacts.filter(contact => contact.id !== id))
    );
  };

  const onChangeFilter = event => {
    setFilter(event.target.value);
  };

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm handleSubmit={handleSubmit} />
      <h2>Contacts</h2>
      <Filter value={filter} onChangeFilter={onChangeFilter} />
      <ContactList
        contacts={contacts}
        onRemoveContact={onRemoveContact}
        filter={filter}
      />
    </>
  );
};
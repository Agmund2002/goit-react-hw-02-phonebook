import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { MainTitle, SecondaryTitle } from './individualElements/Title.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = contact => {
    if (this.state.contacts.find(({ name }) => name === contact.name)) {
      return Notify.failure(`${contact.name} is already in contacts`);
    }

    this.setState(({ contacts }) => {
      return {
        contacts: [...contacts, { id: nanoid(), ...contact }],
      };
    });
  };

  deleteContact = key => {
    this.setState(({ contacts }) => {
      return {
        contacts: contacts.filter(({id}) => id !== key)
      };
    });
  }

  changeFilter = newFilter => {
    this.setState({ filter: newFilter });
  };

  render() {
    const { contacts, filter } = this.state;

    const filterArray = contacts.filter(({ name }) => {
      if (filter === '') {
        return true;
      }

      return name.toLowerCase().includes(filter.toLowerCase());
    });

    return (
      <div>
        <MainTitle>Phonebook</MainTitle>
        <ContactForm onAdd={this.addContact} />
        <SecondaryTitle>Contacts</SecondaryTitle>
        <Filter filter={filter} onChange={this.changeFilter} />
        <ContactList arr={filterArray} onDelete={this.deleteContact} />
      </div>
    );
  }
}

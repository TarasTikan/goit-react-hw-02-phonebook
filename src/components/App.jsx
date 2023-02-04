import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  FormSubmitContacts = data => {
    const contactItems = {
      name: data.name,
      id: nanoid(),
      number: data.number,
    };
    this.setState(prevState => ({
      contacts: [contactItems, ...prevState.contacts],
    }));
  };

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  }

  render() {
    console.log(this.state.contacts)
    const normalizedFiltr = this.state.filter.toLocaleLowerCase()
    const filterName = this.state.contacts.filter(contact => contact.name.includes(normalizedFiltr))
    const { contacts, filter } = this.state;
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.FormSubmitContacts} />

        <h2>Contacts</h2>
        <Filter value={filter} changeFilter={this.changeFilter}/>
        <ContactList contacts={filterName} />
      </div>
    );
  }
}

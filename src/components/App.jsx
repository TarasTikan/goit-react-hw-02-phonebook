import { Component } from 'react';
// import { nanoid } from 'nanoid'
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [],
    name: 'Heelloo',
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm changeContact={this.handleChangeContact}/>

        <h2>Contacts</h2>
        <ContactList name={this.state.name} />
      </div>
    );
  }
}

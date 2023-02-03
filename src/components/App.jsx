import { Component } from 'react';
// import { nanoid } from 'nanoid'
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [],
  };

  FormSubmitContacts = (data) => {
console.log(data)
  }
  render() {

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.FormSubmitContacts}/>

        <h2>Contacts</h2>
        <ContactList/>
      </div>
    );
  }
}

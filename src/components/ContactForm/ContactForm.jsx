import React, { Component } from 'react';
// import { nanoid } from 'nanoid'

export class ContactForm extends Component{
  state = {
    name: '',
  };


  handleInputChange = event => {
    const {name, value} = event.currentTarget
    this.setState({[name]: value})
  }

  handleSubmit = event =>{
event.preventDefault()
this.props.onSubmit(this.state)
console.log(this.state)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name='name'
            value={this.state.name}
            onChange={this.handleInputChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <button type="submit">
          Add Contact
        </button>
      </form>
    );
  }
}
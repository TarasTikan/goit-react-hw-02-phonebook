import { Component } from "react"

export class Filter extends Component {
    render () {
        const {changeFilter, filter} = this.props
        return(
                 <label>
              Find contacts by name
              <input
                type="text"
                name="name"
                value={filter}
                onChange={changeFilter}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
            </label>
        )
    }
}
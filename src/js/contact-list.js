import React from 'react'
import fetch from 'isomorphic-fetch'
import Card from './card.js'

class ContactList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { contacts: [] };
  }


  componentWillMount() {
    this.loadContacts();
  }

  loadContacts() {
    fetch('https://student-example-api.herokuapp.com/v1/contacts.json')
      .then(response => response.json())
      .then(json => {
        this.setState({
          contacts: json.contacts
        });
    });
    
  }

  render() {
    return (
      <div className="my-3 d-flex flex-wrap justify-content-around">
        {this.state.contacts.map(contact => <Card key={contact.id} {...contact} />)}
      </div>
    );
  }
}

export default ContactList
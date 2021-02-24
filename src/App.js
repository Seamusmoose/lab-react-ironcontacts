import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';
import React from 'react'


class App extends React.Component {
  state = {
    contacts: contacts.slice(0,5)
  }

  addRandomContact = () => {
    const stateContactsIds = this.state.contacts.map(contact => contact.id);
    // console.log('FIRST LOG', stateContactsIds)
    const restOfTheContacts = contacts.filter(contact => !stateContactsIds.includes(contact.id)) //if the contact id is not inside stateContactsIds then it's inside the new variable
    // console.log('SECOND LOG', restOfTheContacts)
    const randomContact = restOfTheContacts[Math.floor(Math.random() *restOfTheContacts.length)]
    console.log('THIRD LOG', randomContact)
    const newContactList = this.state.contacts.concat(randomContact); 
    // console.log('FOURTH LOG', newContactList)
    this.setState((state, props) => ({ 
      contacts: newContactList    
       }))
    }

  sortByName = () => {
      const sortedContacts = this.state.contacts.sort((a,b) => {
        if(a.name > b.name) return -1
        if(a.name < b.name) return 1
      })
      this.setState((state, props) => ({
        contacts: sortedContacts
      }))
    
  }

  sortByPop = () => {
    const sortedPop = this.state.contacts.sort((a,b) => {
      if(a.popularity > b.popularity) return -1
      if(a.popularity < b.popularity) return 1
    })
    this.setState((state, props) => ({
      contacts: sortedPop
    }))
  
}

removeContact = id => {
  const contactCopy = this.state.contacts;
 const contactId = contactCopy.findIndex(contact => contact.id === id);
 contactCopy.splice(contactId, 1)

 this.setState((state, props) => ({
  contacts: contactCopy
}))
}

  render() {
    // console.log(this.state.contacts)
    return (
      <div>
     
      <button onClick={this.addRandomContact}>Add Random Contact</button>
      <button onClick={this.sortByName}>Sort by Name</button>
      <button onClick={this.sortByPop}>Sort by Popularity</button>
      

      <table>
        <th>Picture</th>
        <th>Name</th>
        <th>Popularity</th>
        <th>Action</th>

        {this.state.contacts.map(item => (
          <tr key={item.id}>
            <img style={{width:'100px'}} src={item.pictureUrl}/>
           <td>{item.name}</td>
           <td>{item.popularity.toFixed(2)}</td>
           <th><button onClick={() => this.removeContact(item.id)}>Delete</button></th>
           </tr>
      ))}

        </table>
      </div>
    )
  }
}


export default App;



// const result = words.filter(word => word.length > 6);

// contacts.forEach(element => {
//   console.log(element)
// })
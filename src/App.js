import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';
import React from 'react'


class App extends React.Component {
  state = {
    contacts: contacts.slice(0,5)
  }

  // clickHandler = () => {
  //   this.setState((state,props) => ({
  //     this.contacts.id: this.contacts.id = Math.floor(Math.random() * Math.floor(5))+1
  //   }));
  // }


  render() {

    return (
      <div>
      <h1>Contacts List</h1>
      <button onClick={this.clickHandler}>Add Random Contact</button>

      <table>
        {this.state.contacts.slice(0,5).map(item => (
          <tr key={item.id}>
           <th>Name: {item.name}</th>
           <th>Popularity: {item.popularity.toFixed(2)}</th>
           <img style={{width:'100px'}} className='pics' src={item.pictureUrl}/>
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
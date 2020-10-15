import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UsersCard from './UsersCard.js';


class App extends React.Component {
  state = {
    firstname: "Kofi",
    lastname: "Ampah",
    gender: "Male",
    USERDATA: [ 
      {
        firstname: "Dummy firstname",
        lastname: "Dummy lastname",
        gender: "male"
      },
      {
        firstname: "Dummy firstname 1",
        lastname: "Dummy lastname 1 ",
        gender: "male"
      },
      {
        firstname: "Dummy firstname 2",
        lastname: "Dummy lastname 2",
        gender: "male"
      },
      {
        firstname: "Dummy firstname 3",
        lastname: "Dummy lastname 3",
        gender: "male"
      },
    ]
  };

  removeUserData = (firstnameOfUserToDelete = "") => {
    let numberItems = this.state.USERDATA.length; //4
    let newUserData = [];
    for(let position = 0; position < numberItems; position += 1){
      // DO something
      const user = this.state.USERDATA[position];
      if( user.firstname ===  firstnameOfUserToDelete ) {
        //Don't add to new list | Do nothing
      }else{
        //Add this data to new list
        newUserData.push(user);
      }

    }

    this.setState({USERDATA: newUserData});
  }

  handleSubmit = (event) => {
    event.preventDefault()
    //alert(`${this.state.firstname}, ${this.state.lastname}, ${this.state.gender}`)
    this.setState({
      USERDATA: [
        ...this.state.USERDATA,
        {
          firstname: this.state.firstname,
          lastname: this.state.lastname,
          gender: this.state.gender
        }
      ]
    })
  }

  render() {
    return (
      <div>
        <div className="row" style={{ position: "absolute", justifyContent: "center", top: "50px" }}>
          {/*<UsersCard firstname="Sedina" lastname="Fiagbedzi" gender="Female"/>
          <UsersCard firstname="Loveck" lastname="Fanou" gender="Male"/>
          <UsersCard firstname="Sarso" lastname="Nartey" gender="Male"/>*/}
          {this.state.USERDATA.map((user) => {
            return <UsersCard onDelete={(userFirstname) => this.removeUserData(userFirstname)} firstname={user.firstname} lastname={user.lastname} gender={user.gender} />
          })}
        </div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>First Name:</label>
            <input name="firstname" placeholder="Enter First Name" value={this.state.firstname} onChange={(event) => {
              this.setState({ firstname: event.target.value })
            }} />
            <label>Last Name:</label>
            <input name="lastname" placeholder="Enter Last Name" value={this.state.lastname} onChange={(event) => {
              this.setState({ lastname: event.target.value })
            }} />
            <label>Gender:</label>
            <input name="gender" placeholder="Enter Your Gender" value={this.state.gender} onChange={(event) => {
              this.setState({ gender: event.target.value })
            }} />
            <button htmlType="submit">Add</button>
          </form>
        </div>
      </div>
    );
  }
}

export default App;

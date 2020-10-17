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
    ],
    updateFirstname: '',
    updateLastname: '',
    updateGender: '',
    
  };

  removeUserData = (firstnameOfUserToDelete = "") => {

    const newUserData = this.state.USERDATA.filter((user) =>  user.firstname !==  firstnameOfUserToDelete );

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

  handleUpdateSubmit = (event) => {
    //TODO handle update submission
    event.preventDefault();
    
    const firstname = this.state.updateFirstname;
    const lastname = this.state.updateLastname;
    const gender = this.state.updateGender;

    const newUserData = this.state.USERDATA.map((user) => {
      if(user.firstname === firstname){
        return {firstname, lastname, gender}
      }
      return user
    });

    this.setState({USERDATA: newUserData});
  }

  render() {
    return (
      <div className="container">
        <div className="row" style={{ justifyContent: "center" }}>
          {this.state.USERDATA.map((user) => {
            return <UsersCard 
            onDelete={(userFirstname) => this.removeUserData(userFirstname)} firstname={user.firstname} lastname={user.lastname} gender={user.gender}
            onUpdate={(firstname, lastname, gender) => { this.setState({updateFirstname: firstname, updateLastname: lastname, updateGender: gender})  }} />
          })}
        </div>
        <div className="row" style={{alignItems: "center"}}>
          <div>
            <h3>Add Form</h3>
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
          <div>
            <h3>Update Form</h3>
            <form onSubmit={this.handleUpdateSubmit}>
              <label>First Name:</label>
              <input name="firstname" placeholder="Enter First Name" value={this.state.updateFirstname} onChange={(event) => {
                this.setState({ updateFirstname: event.target.value })
              }} />
              <label>Last Name:</label>
              <input name="lastname" placeholder="Enter Last Name" value={this.state.updateLastname} onChange={(event) => {
                this.setState({ updateLastname: event.target.value })
              }} />
              <label>Gender:</label>
              <input name="gender" placeholder="Enter Your Gender" value={this.state.updateGender} onChange={(event) => {
                this.setState({ updateGender: event.target.value })
              }} />
              <button htmlType="submit">Update</button>
            </form>
          </div>
          
        </div>
      </div>
    );
  }

}

export default App;

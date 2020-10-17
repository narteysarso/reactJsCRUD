import React from 'react';

function UsersCard(props){
    return(
        <div className="card col-3">
          <img src="https://codetraingh.com/static/logo-ec0b25dfea7daafa6e6245f9de4555a7.png" alt="" className="card-img-top"/>
          <div class="card-body">
            <h4>First name: {props.firstname} </h4>
            <h4>Last name: {props.lastname} </h4>
            <h4>Gender: {props.gender} </h4>
            <p>Fellow at Codetrain</p>
            <button className="btn btn-danger" onClick={() => props.onDelete(props.firstname)}>Delete</button>
            <button className="btn btn-primary" onClick={() => props.onUpdate(props.firstname, props.lastname, props.gender)}>Update</button>
          </div>
        </div>
    );
}

export default UsersCard;
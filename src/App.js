import React, { Component } from 'react';
import MessageList from './components/MessageList';
import MessageBox from './components/MessageBox';
import Header from './components/Header';
import firebase from 'firebase';

class App extends Component {

constructor(props){
  super(props);
  // this.onChange = this.onChange.bind(this);
  var config = {
    apiKey: "AIzaSyDpNG2sDe3w-Lw39XGXNoNORW3v5kUbcTM",
    authDomain: "reactsample-85097.firebaseapp.com",
    databaseURL: "https://reactsample-85097.firebaseio.com",
    projectId: "reactsample-85097",
    storageBucket: "reactsample-85097.appspot.com",
    messagingSenderId: "239796390852",
    appId: "1:239796390852:web:017cc37910ca268b"
  };
  firebase.initializeApp(config);
}

onClick(e){
  alert('All Data Deleted');
  firebase.database().ref('messages').remove()
}

  render() {
    return (
      <div className="container">
            <Header title="Satheesh Message Application" />
            <br/>
            <div className="columns">
              <div className="column is-3"></div>
              <div className="column is-6">
                <MessageList db={firebase} />
              </div>
            </div>
            <div className="columns">
            <div className="column is-3"></div>
            <div className="column is-6">
              <MessageBox db={firebase} />
            </div>

            <button type="button" class="btn btn-default" onClick={this.onClick}>Remove Data All</button>
          </div>
        </div>
    );
  }
}

export default App;

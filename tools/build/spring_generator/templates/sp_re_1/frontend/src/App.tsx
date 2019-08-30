import React from 'react';
import logo from './logo.svg';
import axios from 'axios';
import {Message} from './Message';

import './App.css';


export default class App extends React.Component{
  fetchMessage(): string{
    axios.get<Message>('/api').then(resp => {
      console.log(resp.data.text);
      const el = document.getElementById('serverMessage');
      if(el){
        el.innerHTML = resp.data.text;
      }
    });
    return 'Testing Function';

  }


  render(){
    this.fetchMessage();
    console.log('Rendering APP now.....');
    return (
      <div className="App">
        <header className="App-header">
          <p>Welcome ${app.name}</p>
          <img src={logo} className="App-logo" alt="logo" />
          <p id="serverMessage"></p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          
        </header>
      </div>
    );
  }
} 


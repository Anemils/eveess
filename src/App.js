import React from 'react';
import * as Forms from './Form';
import logo from './logo.svg';
import './App.sass';

function App() {

  return(
    <div>
      <header>
        <div className='branding'>
          <img className='logo' src={logo} alt='Logo' height='40'/>
          <div className='name'>EVVESS</div>
        </div>
        <button className="login">Login</button>
      </header>
      <Forms.LoginForm/>
      <Forms.RegisterForm/>
    </div>
  );
}

export default App;

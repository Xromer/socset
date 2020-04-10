import React from 'react';
import './App.css';
import Header from './components/header';
import Nav from './components/nav';
import Profile from './components/Profile';



const App = () => {
  return (
    <div className='app-wrapper'>
     
      {/*header*/}
      <Header />
     
      {/*nav*/}
      <Nav />
     
      {/*content*/}
      <Profile />
      
    </div>
    );
}

export default App;

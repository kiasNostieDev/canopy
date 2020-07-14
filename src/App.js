import React from 'react';
import './App.css';
import SideBar, { MainPage } from './Components/Common/SideBar'

function App() {
  return (
    <div className='App'>
      <div className='SideBar'>
        <SideBar />
      </div>
      <div className='MainBoard'>
        <MainPage />
      </div>
    </div>
  );
}

export default App;

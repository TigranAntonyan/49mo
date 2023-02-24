import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Music from './Components/Music/Music';
import News from './Components/News/News';
import Settings from './Components/Settings/Settings';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DialogsContainer from './Components/Dialogs/DialogsContainer';


const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <Routes>
          <Route path='/profile' element={<Profile /> }></Route>
          <Route path='/dialogs' element={<DialogsContainer /> }></Route>
          <Route path='/news' element={<News /> }></Route>
          <Route path='/music' element={<Music /> }></Route>
          <Route path='/settings' element={<Settings /> }></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}


export default App;
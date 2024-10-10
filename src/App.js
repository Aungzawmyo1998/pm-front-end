import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Home from './page/Home';
import Login from './page/Login';
import UserList from './page/UserList';
import UserEntry from './page/UserEntry';
import NoteList from './page/NoteList';
import NoteEnty from './page/NoteEnty';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={ <Home />}/>
        <Route path='/user/login' element={ <Login />} />
        <Route path='/user/list' element={ <UserList /> } />
        <Route path='/user/entry' element={ <UserEntry />} />
        <Route path='/note/list' element={ <NoteList />} />
        <Route path='/note/entry' element={ <NoteEnty />} />

      </Routes>
    </Router>
  );
}

export default App;

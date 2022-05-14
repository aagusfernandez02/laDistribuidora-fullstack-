import './App.css';
import Header from './components/header/Header';
import List from './components/list/List';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useState } from 'react';

function App() {
  const [isSigned, setIsSigned] = useState(false);

  return (
    <Router>
      <Header isSigned={isSigned}/>
      <List/>
    </Router>
  );
}

export default App;

import './App.css';
import Header from './components/header/Header';
import List from './components/list/List';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useEffect, useState } from 'react';
import Modal from './components/modal/Modal';

function App() {
  const [isSigned, setIsSigned] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [idProductModal, setIdProductModal] = useState("");
  const [mustRefresh, setMustRefresh] = useState(false);


  return (
    <Router>
      <Header 
        isAdmin={isAdmin}
        isSigned={isSigned}
        setIsAdmin={setIsAdmin}
        setIsSigned={setIsSigned}
      />
      <List 
        isAdmin={isAdmin}
        setIsOpen={setIsOpen}
        setIdProductModal={setIdProductModal}
        mustRefresh={mustRefresh}
      />
      {
        isOpen && 
        <Modal 
          idProductModal={idProductModal} 
          closeModal={()=>setIsOpen(false)}
          mustRefresh={mustRefresh}
          setMustRefresh={setMustRefresh}
        />
      }
    </Router>
  );
}

export default App;

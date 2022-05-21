import React, { useState } from 'react';
import styles from './header.module.css';
import { BiUserPlus, BiUserMinus } from 'react-icons/bi';
import { RiAdminFill } from "react-icons/ri";
import LoginModal from './loginModal/LoginModal';

const Header = ({isSigned, setIsSigned, isAdmin, setIsAdmin}) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const renderIconProfile = ()=>{
    if( isAdmin && isSigned ){
      return <RiAdminFill onClick={()=>{setIsSigned(false); setIsAdmin(false)}}/>
    } else if( isSigned ){
      return <BiUserMinus  onClick={()=>setIsSigned(false)}/>
    } else {
      return <BiUserPlus onClick={()=>setIsOpen(true)}/>
    }
  };

  return (
    <header>
        <div className={styles.header_logo}>
            <p>La<span>Distribuidora</span></p>
        </div>
        
        <div className={styles.header_user}>
          {renderIconProfile()}
        </div>
        
        {
          isOpen &&
          <LoginModal closeModal={()=>setIsOpen(false)} setIsAdmin={setIsAdmin} setIsSigned={setIsSigned}/>
        }
    </header>
  )
}

export default Header
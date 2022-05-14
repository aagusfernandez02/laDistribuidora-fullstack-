import React from 'react';
import styles from './header.module.css';
import { BiUserPlus, BiUserMinus } from 'react-icons/bi';

const Header = ({isSigned}) => {
  return (
    <header>
        <div className={styles.header_logo}>
            <p>La<span>Distribuidora</span></p>
        </div>
        
        <div className={styles.header_user}>
          {isSigned ? (<><BiUserMinus/></>):(<><BiUserPlus/></>)}
        </div>
        
    </header>
  )
}

export default Header
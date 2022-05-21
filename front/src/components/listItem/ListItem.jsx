import React, { useState } from "react";
import styles from "./listItem.module.css";
import { FiEdit2 } from "react-icons/fi";

const ListItem = ({ producto, isAdmin, setIsOpen, setIdProductModal }) => {

  const handleClick = ()=>{
    setIsOpen(true);
    setIdProductModal(producto._id);
  }

  return (
    <div className={styles.container}>
      {
        isAdmin && 
        <div 
          className={styles.editIcon}
          onClick={handleClick}
        >
          <FiEdit2/>
        </div> 
      }
      <div className={styles.listItem}>
          <img className={styles.listItem_item} src={producto.img} alt={`Imagen del producto ${producto.producto} - ${producto.marca} - ${producto.tamanio} `}/>
          <p className={styles.listItem_item}>{producto.producto}</p>
          <p className={styles.listItem_item}>{producto.marca}</p>
          <p className={styles.listItem_item}>{producto.tamanio}</p>
          <p className={styles.listItem_item}>{producto.precio}</p>
      </div>
    </div>
  );
};

export default ListItem;

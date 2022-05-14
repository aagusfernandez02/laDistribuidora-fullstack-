import React from 'react';
import styles from './listItem.module.css';

const ListItem = ({producto}) => {
  return (
    <div className={styles.listItem}>
        <img className={styles.listItem_item} src={producto.img} alt={`Imagen del producto ${producto.producto} - ${producto.marca} - ${producto.tamanio} `}/>
        <p className={styles.listItem_item}>{producto.producto}</p>
        <p className={styles.listItem_item}>{producto.marca}</p>
        <p className={styles.listItem_item}>{producto.tamanio}</p>
        <p className={styles.listItem_item}>{producto.precio}</p>
    </div>
  )
}

export default ListItem
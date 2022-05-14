import React, { useState, useEffect } from 'react';
import styles from './list.module.css';
import axios from 'axios';
import ListItem from '../listItem/ListItem';

const List = () => {
  const [products, setProducts] = useState([]);

  useEffect( ()=>{
    const makeRequest = async()=>{
      try {
        const res = await axios.get("http://localhost:5000/api/products");
        console.log(res);
        setProducts(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    makeRequest();
  },[]);

  return (
    <>
    <div className={styles.headers}>
        <p>Imagen</p>
        <p>Producto</p>
        <p>Marca</p>
        <p>Tamaño</p>
        <p>Precio</p>
    </div>
    <div className={styles.table}>
      {
        products.map(product => (<ListItem key={product._id} producto={product}/>))
      }
    </div>
    </>
  )
}

export default List
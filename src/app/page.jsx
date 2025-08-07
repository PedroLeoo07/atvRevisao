"use client";
import React from "react";
import styles from "./page.module.css";
import ProductCard from "../components/ProductCard";
import { useState, useEffect } from 'react';
import { productsData } from '../data/products.js';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [productCount, setProductCount] = useState(0);
   useEffect(() => {
    setProducts(productsData);
  }, []);
  useEffect(() => {
    setProductCount(products.length);
  }, [products]);

  return (
    <div className={styles.container}>
      <h1>Total de produtos: {productCount}</h1>
      <div className={styles.products}>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
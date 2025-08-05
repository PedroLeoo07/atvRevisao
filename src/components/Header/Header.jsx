"use client";

import React, { useEffect, useState } from "react";
import style from "../Header/Header.module.css";

export default function Header() {
    const [totalProducts, setTotalProducts] = useState(0);

    useEffect(() => {
        function countProducts() {
            const products = document.querySelectorAll('[data-category]');
            setTotalProducts(products.length);
        }

        countProducts();

        const observer = new MutationObserver(countProducts);
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className={style.header}>
            <h1>🛒 Loja de Eletrônicos</h1>
            <p>Os melhores produtos com os melhores preços!</p>
            <p>📊 Total de produtos: <span>{totalProducts}</span></p>
        </div>
    );
}
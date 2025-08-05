import React from "react";
import style from "../styles/page.module.css";
import Next from "next/image";
import ProductCard from "../components/ProductCard/Product";

export default function page() {
  
  const products = [
    {
      id: 1,
      Title: "Iphone 15 Pro Max 256GB",
      Price: "R$ 8.999,00",
      Description:"O mais avançado iPhone já criado, com chip A17 Pro e sistema de câmeras profissional.",
      Image: "https://images.unsplash.com/photo-1632661674596-df8be070a5c5?w=300&h=200&fit=crop",

      Rating: {
        stars: 5,
        count: 4.8,
        reviews: 1234
      },

      Category: "Smartphones",
    }, 

    {
      id: 2,
      Title: "Samsung Galaxy S24 Ultra 512GB",
      Price: "R$ 7.499,00",
      Description:"Galaxy AI revolucionário, S Pen integrada e câmera de 200MP para fotos incríveis.",
      Image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=300&h=200&fit=crop",

      Rating: {
        stars: 5,
        count: 4.7,
        reviews: 987
      },

      Category: "Smartphones",
    },

    {
      id: 3,
      Title: "MacBook Pro 14\" M3 Pro 18GB",
      Price: "R$ 15.999,00",
      Description:"Performance profissional com chip M3 Pro, tela Liquid Retina XDR e bateria de longa duração",
      Image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=300&h=200&fit=crop",

      Rating: {
        stars: 5,
        count: 4.9,
        reviews: 2156
      },

      Category: "Laptops",
    },

    {
      id: 4,
      Title: "Dell XPS 13 Intel i7 16GB SSD 512GB",
      Price: "R$ 6.799,00",
      Description:"Ultrabook premium com design ultrafino, tela InfinityEdge e performance excepcional",
      Image: "https://images.unsplash.com/photo-1606787360232-3c8b1f5d6c1f?w=300&h=200&fit=crop",

      Rating: {
        stars: 5,
        count: 4.6,
        reviews: 543
      },

      Category: "Laptops",
    },

    {
      id: 5,
      Title: "iPad Pro 12.9\" M2 WiFi 128GB",
      Price: "R$ 7.299,00",
      Description:"O tablet mais poderoso do mundo com chip M2, tela Liquid Retina XDR e suporte ao Apple Pencil.",
      Image: "https://images.unsplash.com/photo-1606787360232-3c8b1f5d6c1f?w=300&h=200&fit=crop",

      Rating: {
        stars: 5,
        count: 4.8,
        reviews: 1.876
      },

      Category: "Tablets",
    },

    {
      id: 6,
      Title: "Samsung Galaxy Tab S9+ 256GB",
      Price: "R$ 4.999,00",
      Description:"Tablet premium Android com S Pen incluída, tela Dynamic AMOLED 2X e resistência à água.",
      Image: "https://images.unsplash.com/photo-1606787360232-3c8b1f5d6c1f?w=300&h=200&fit=crop",

      Rating: {
        stars: 5,
        count: 4.5,
        reviews: 432
      },

      Category: "Tablets",
    },

    {
      id: 7,
      Title: "Apple AirPods Pro 2ª Geração",
      Price: "R$ 2.399,00",
      Description:"Fones sem fio com cancelamento ativo de ruído, áudio espacial e até 30h de bateria.",
      Image: "https://images.unsplash.com/photo-1606787360232-3c8b1f5d6c1f?w=300&h=200&fit=crop",

      Rating: {
        stars: 5,
        count: 4.7,
        reviews: 3421
      },

      Category: "Smartwatches",
    },

    {
      id: 8,
      Title: "Apple Watch Series 9 GPS 45mm",
      Price: "R$ 4.299,00",
      Description:"Smartwatch mais avançado com chip S9, Double Tap e monitoramento de saúde completo.",
      Image: "https://images.unsplash.com/photo-1606787360232-3c8b1f5d6c1f?w=300&h=200&fit=crop",

      Rating: {
        stars: 5,
        count: 4.6,
        reviews: 2.187
      },

      Category: "Smartwatches",
    },
    {
      id: 9,
      Title: "Carregador Sem Fio MagSafe 15W",
      Price: "R$ 399,00",
      Description:"Carregamento sem fio rápido e seguro para iPhone, alinhamento magnético perfeito.",
      Image: "https://images.unsplash.com/photo-1606787360232-3c8b1f5d6c1f?w=300&h=200&fit=crop",

      Rating: {
        stars: 5,
        count: 4.4,
        reviews: 876
      },

      Category: "Accessories",
    },
    {
      id: 10,
      Title: "Xiaomi 13 Pro 256GB Leica",
      Price: "R$ 3.999,00",
      Description:"Smartphone premium com câmeras Leica, carregamento ultra-rápido 120W tela AMOLED.",
      Image: "https://images.unsplash.com/photo-1606787360232-3c8b1f5d6c1f?w=300&h=200&fit=crop",

      Rating: {
        stars: 5,
        count: 4.5,
        reviews: 654
      },

      Category: "Smartphones",
    }
  ];

  return (
    <div className={style.products}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          Title={product.Title}
          Price={product.Price}
          Description={product.Description}
          Image={product.Image}
          Rating={product.Rating}
          Category={product.Category}
        />
      ))}
    </div>
  )
}
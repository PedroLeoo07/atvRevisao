import React from 'react'
import style from './ProductCard.module.css'

export default function ProductCard({ Image, Title, Price, Description, Rating, Category }) {
    return (
        <div className={style.productCard} data-category={Category}>
            <div className={style.productImage}>
                {Image ? (
                    <img
                        src={Image}
                        alt={Title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '4px' }}
                    />
                ) : (
                    <div 
                        style={{ 
                            width: '100%', 
                            height: '100%', 
                            display: 'flex', 
                            alignItems: 'center', 
                            justifyContent: 'center', 
                            backgroundColor: '#f0f0f0', 
                            borderRadius: '4px',
                            fontSize: '2rem'
                        }}
                    >
                        📱
                    </div>
                )}
            </div>
            <div className={style.productTitle}>{Title}</div>
            <div className={style.productPrice}>{Price}</div>
            <div className={style.productDescription}>{Description}</div>
            <div className={style.productRating}>
                <span className={style.stars}>
                    {'⭐'.repeat(Rating?.stars || 0)}
                </span>
                <span>
                    ({Rating?.count || 0}) - {Rating?.reviews || 0} avaliações
                </span>
            </div>
        </div>
    )
}
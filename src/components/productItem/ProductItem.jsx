import React from 'react';
import './styles.css';

const ProductItem = ({ product, onSelect }) => {

    return (
        <div className="product-item" onClick={() => onSelect(product)}>
            {product ? (
                <div>
                    <p>{product.name}</p>
                    <p>${product.price}</p>
                </div>
            ) : (
                <p style={{display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: 35 }}>Available</p>
            )}
        </div>
    );
};

export default ProductItem;

import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import ProductItem from '../productItem/ProductItem';
import "./styles.css";

const productsData = [
    {id: 1, name: 'Producto 1', price: 2.5, image: 'product1.jpg'},
    {id: 2, name: 'Producto 2', price: 3.0, image: 'product2.jpg'},
];

const VendingMachine = () => {

    const navigate = useNavigate();
    const [selectedProduct, setSelectedProduct] = useState(null);

    return (
        <div className="vending-machine">
            <div className="product-grid">
                {Array.from({length: 5}, (_, row) => (
                    <div key={`row-${row}`} className="product-row">
                        {Array.from({length: 5}, (_, col) => {
                            const index = row * 5 + col;
                            const product = productsData[index];
                            return (
                                <div key={`col-${col}`}>
                                    <ProductItem
                                        product={product}
                                        onSelect={(product) => setSelectedProduct(product)}
                                    />
                                </div>
                            );
                        })}
                    </div>
                ))}
            </div>
            <div className="selected-product">
                {selectedProduct ? (
                    <div>
                        <h2>Producto seleccionado: {selectedProduct.name}</h2>
                        <p>Precio: ${selectedProduct.price}</p>
                    </div>
                ) : (
                    <p>Selecciona un producto</p>
                )}
            </div>

            <div className="adminLogIn">
                <button onClick={() => navigate("/admin")}
                        style={{background: "blue", borderRadius: 10, color: "white", height: 40, width: 200}}>
                    Admin Log In
                </button>
            </div>
        </div>
    );
};

export default VendingMachine;

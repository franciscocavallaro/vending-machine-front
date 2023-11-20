import React, {useState} from "react";
import "./styles.css";
import {useNavigate} from "react-router-dom";
import ProductItem from "../productItem/ProductItem";

const productsData = [
    {id: 1, name: 'Product 1', price: 2.5, image: 'product1.jpg'},
    {id: 2, name: 'Product 2', price: 3.0, image: 'product2.jpg'},
];

const Restocker = () => {

    const navigate = useNavigate();
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [productAmount, setProductAmount] = useState(0);

    const handleRestock = () => {

    }

    return (
        <div>
            <h1 className="restock-header">Restocker</h1>

            <div className="vending-machine">
                <div className="product-grid">
                    {Array.from({length: 6}, (_, row) => (
                        <div key={`row-${row}`} className="product-row">
                            {Array.from({length: 6}, (_, col) => {
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
                            <h2>Selected Product: {selectedProduct.name}</h2>
                        </div>
                    ) : (
                        <p>Select a Product</p>
                    )}
                </div>

                <input
                    className="restock-input"
                    type="number"
                    placeholder="Product Amount"
                    value={productAmount}
                    onChange={(e) => {
                        const inputValue = e.target.value;
                        if (!isNaN(inputValue) && Number(inputValue) >= 0) {
                            setProductAmount(Number(inputValue));
                        }
                    }}
                />

                <div>
                    <button type="submit"
                            className="restock-button"
                            onClick={handleRestock}
                    >Add Product
                    </button>
                </div>

            </div>

            <div className="backToHome" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                <button onClick={() => navigate("/")}
                        style={{
                            background: "blue",
                            borderRadius: 10,
                            color: "white",
                            height: 40,
                            width: 215,
                            marginTop: 20
                        }}>
                    Back to Home
                </button>
            </div>
        </div>
    );
};


export default Restocker;
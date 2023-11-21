import React, {useEffect, useState} from 'react';
import ProductItem from "../productItem/ProductItem";
import LoginForm from "../loginForm/LoginForm";
import "./styles.css";
import {fetchProducts} from "../../service/apis";

const VendingMachine = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [showAdminLoginForm, setShowAdminLoginForm] = useState(false);
    const [productsData, setProductsData] = useState(undefined);
    const [showRestockerLoginForm, setShowRestockerLoginForm] = useState(false);

    useEffect(() => {
        fetchProducts().then((products) => {
            const updatedProducts = products.reduce((acc, product) => {
                if (product.stock > 1) {
                    const productCopies = Array.from({length: product.stock}, () => ({...product}));
                    acc.push(productCopies);
                } else {
                    acc.push([product]);
                }
                return acc;
            }, []);

            setProductsData(updatedProducts);
            console.log(updatedProducts);
        });
    }, []);


    const handleAdminLogin = () => {
        setShowAdminLoginForm(!showAdminLoginForm);
        setShowRestockerLoginForm(false);
    };

    const handleRestockerLogin = () => {
        setShowRestockerLoginForm(!showRestockerLoginForm);
        setShowAdminLoginForm(false);
    };

    const handleCloseAdminLogin = () => {
        setShowAdminLoginForm(false);
    };

    const handleCloseRestockerLogin = () => {
        setShowRestockerLoginForm(false);
    };

    const handleAdminFormSubmit = (username, password) => {
        if (username === 'admin' && password === 'password') {
            setShowAdminLoginForm(false);
            console.log('Admin logged in');
        } else {
            alert('Username or password are incorrect');
        }
    };

    const handleRestockerFormSubmit = (username, password) => {
        if (username === 'username' && password === 'password') {
            setShowRestockerLoginForm(false);
            console.log('Restocker logged in');
        } else {
            alert('Username or password are incorrect');
        }
    };

    return (
        <div className="vending-machine">
            {productsData && (

                <div className="product-grid">
                    {Array.from({length: 6}, (_, col) => (
                        <div key={`col-${col}`}>
                            {Array.from({length: 6}, (_, row) => {
                                const product = productsData[col]?.[row];
                                if (product && product.stock !== 0) {
                                    return (
                                        <div key={`row-${row}`} className="product-row">

                                            {/*<div key={`col-${col}`}>*/}
                                            <ProductItem
                                                product={product}
                                                onSelect={(product) => setSelectedProduct(product)}
                                            />
                                        </div>
                                    );
                                } else {
                                    // Si no hay stock, puedes renderizar un div vacío o null
                                    return <div key={`col-${col}`}/>;
                                }
                            })}
                        </div>
                    ))}
                </div>
            )}

            <div className="selected-product">
                {selectedProduct ? (
                    <div>
                        <h2>Selected Product: {selectedProduct.name}</h2>
                        <p>Price: ${selectedProduct.price}</p>
                    </div>
                ) : (
                    <p>Select a Product</p>
                )}
            </div>
            <div className="selected-product">
                {selectedProduct ? (
                    <div>
                        <h2>Selected Product: {selectedProduct.name}</h2>
                        <p>Price: ${selectedProduct.price}</p>
                    </div>
                ) : (
                    <p>Select a Product</p>
                )}
            </div>

            {!showAdminLoginForm ? (
                <div className="adminLogIn">
                    <button
                        onClick={handleAdminLogin}
                        style={{
                            background: 'blue',
                            borderRadius: 10,
                            color: 'white',
                            borderColor: 'white',
                            height: 40,
                            width: 200,
                        }}
                    >
                        Admin Log In
                    </button>
                </div>
            ) : (
                <div>
                    <button
                        onClick={handleCloseAdminLogin}
                        style={{
                            background: 'red',
                            borderRadius: 10,
                            color: 'white',
                            borderColor: 'white',
                            height: 40,
                            width: 200,
                        }}
                    >
                        Close Admin Log In
                    </button>
                    {showAdminLoginForm && <LoginForm onSubmit={handleAdminFormSubmit}/>}
                </div>
            )}

            <br/>

            {!showRestockerLoginForm ? (
                <div className="restockerLogIn">
                    <button
                        onClick={handleRestockerLogin}
                        style={{
                            background: 'blue',
                            borderRadius: 10,
                            color: 'white',
                            borderColor: 'white',
                            height: 40,
                            width: 200,
                        }}
                    >
                        Restocker Log In
                    </button>
                </div>
            ) : (
                <div>
                    <button
                        onClick={handleCloseRestockerLogin}
                        style={{
                            background: 'red',
                            borderRadius: 10,
                            color: 'white',
                            borderColor: 'white',
                            height: 40,
                            width: 200,
                        }}
                    >
                        Close Restocker Log In
                    </button>
                    {showRestockerLoginForm && <LoginForm onSubmit={handleRestockerFormSubmit}/>}
                </div>
            )}
        </div>
    );
};

export default VendingMachine;

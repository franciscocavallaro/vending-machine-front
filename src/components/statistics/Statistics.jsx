import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import "./styles.css";
import {fetchLatestTransactions, fetchMostSoldProducts, fetchDayRevenue} from "../../service/apis.js";

const Statistics = () => {

    const navigate = useNavigate();

    const [totalDayRevenue, setTotalDayRevenue] = useState(0)
    const [latestTransactions, setLatestTransactions] = useState(["product 1", "product 2"])
    const [mostSoldProducts, setMostSoldProducts] = useState(["Ibupirac", "Paracetamol", "Aspirina"]);

    useEffect(() => {
        fetchTransactions().then();
        fetchSoldProducts().then();
        fetchRevenue().then();
    }, []);

    const fetchTransactions = async () => {
        try {
            const transactions = await fetchLatestTransactions();
            setLatestTransactions(transactions);
        } catch (error) {
            console.error('Error fetching latest transactions:', error);
        }
    };

    const fetchSoldProducts = async () => {
        try {
            const products = await fetchMostSoldProducts();
            setMostSoldProducts(products);
        } catch (e) {
            console.log("Error fetching most sold products", e);
        }
    }

    const fetchRevenue = async () => {
        try {
            const revenue = await fetchDayRevenue();
            setTotalDayRevenue(revenue.totalRevenue);
        } catch (e) {
            console.log("Error fetching revenue", e);
        }
    }

    return (
        <div className="statistics">
            <h1>Statistics</h1>

            <h2 className="bold">Last 10 Transactions</h2>
            {latestTransactions.map((transaction) => (
                <text>
                    {transaction.productName}
                </text>
                )
            )}

            <h2 className="bold">Most sold Products (Name and amount)</h2>
            {mostSoldProducts.map((product) => (
                    <text>
                        {product.name + " | " + product.count}
                    </text>
                )
            )}

            <h2 className="bold">Day Revenue</h2>
            {totalDayRevenue}

            <div className="backToHome" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>

                <button onClick={() => navigate("/")}
                        style={{
                            background: "blue",
                            borderRadius: 10,
                            color: "white",
                            height: 40,
                            width: 200,
                            marginTop: 50
                        }}>
                    Back to Home
                </button>
            </div>
        </div>


    );
}
export default Statistics;


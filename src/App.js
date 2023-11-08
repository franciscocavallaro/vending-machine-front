import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import VendingMachine from "./components/vendingMachine/VendingMachine";
import Statistics from "./components/statistics/Statistics";

function App() {


    return (
        <Router>
            <div>
                <div style={{ display: "flex", flexDirection: "row", gap: 1120 }}>
                    <h1 style={{ marginLeft: 20 }}>Vending Machine Screen</h1>
                </div>
                <Routes>
                    <Route path="/" element={<VendingMachine />} />
                    <Route path="/statistics" element={<Statistics />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

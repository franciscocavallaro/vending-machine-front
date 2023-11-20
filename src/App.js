import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import VendingMachine from "./components/vendingMachine/VendingMachine";
import Statistics from "./components/statistics/Statistics";
import Restocker from "./components/restocker/Restocker";

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
                    <Route path="/restocker" element={<Restocker/>} />
                    <Route path="*" element={<h1>Not Found</h1>} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

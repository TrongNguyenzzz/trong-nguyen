import logo from './logo.svg';
import './App.css';
import {
    BrowserRouter,
    Route,
    Routes,
    Navigate,
    Link
} from "react-router-dom";
import Paricle from './components/Particle';
import Navbar from './components/Navbar';

function App() {
    return ( <
        BrowserRouter >
        <
        Navbar / >
        <
        /BrowserRouter>
    );
}

export default App;
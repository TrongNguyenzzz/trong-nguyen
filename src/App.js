import logo from './logo.svg';
import './App.css';
import {
    BrowserRouter,
    Route,
    Routes,
    Navigate,
    Link
} from "react-router-dom";
import Paricle from './components/Particle/Particle';
import Navbar from './components/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';

function App() {
    return ( <
        BrowserRouter >
        <
        Navbar / >
        <
        Routes >
        <
        Route path = "/Home"
        element = { < Home / > }
        />  <
        Route path = "/About"
        element = { < About / > }
        /> <
        Route path = "*"
        element = { < Home / > }
        /> < /
        Routes > <
        /BrowserRouter>
    );
}

export default App;
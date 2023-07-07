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
import Project from './components/Project/Project';

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
        Route path = "/Project"
        element = { < Project / > }
        /> <
        Route path = "*"
        element = { < Home / > }
        /> < /
        Routes > <
        /BrowserRouter>
    );
}

export default App;
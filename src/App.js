import React from "react";
import './App.css';
import './assets/styles/styles.scss';
import Header from './components/Header/Header.jsx'; 
import Table from './components/Table/Table.jsx'; 
import Footer from './components/Footer/Footer.jsx';
import CardSlider from './components/CardSlider/CardSlider';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';


// import words from './assets/data.json';
import {
    BrowserRouter,
    Routes,
    Route,
    Link
  } from "react-router-dom";

function App() {
return (
    <BrowserRouter>

    <div className="App">
        <Header /> 
        <main className="main">
            <Routes>
                <Route exact path="/game" element={<CardSlider/>} />
                <Route exact path="/" element={<Table/>} />
                <Route path="*" element={<NotFoundPage/>} />
            </Routes>

        </main> 
        <Footer /> 
    </div>
    </BrowserRouter>
);
}

export default App;

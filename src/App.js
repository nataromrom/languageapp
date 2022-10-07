import React from "react";
import './App.css';
import './assets/styles/styles.scss';
import Header from './components/Header/Header.jsx'; 
import Table from './components/Table/Table.jsx'; 
import Footer from './components/Footer/Footer.jsx';
import CardSlider from './components/CardSlider/CardSlider';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';

import words from './assets/data.json';
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
                <Route exact path="/game" element={
                    <CardSlider    
                        words={words}
                        position={0}>
                    </CardSlider>
                } />
                <Route exact path="/" element={<Table/>} />
                <Route path="*" element={<NotFoundPage/>} />
            </Routes>

            {/* <CardSlider    
                words={words}
                position={0}>
            </CardSlider> */}
            {/* <Table />  */}
            {/* <div className="cards">
                    <WordCard
                        isEdited={false}
                        key = {data[0].id}
                        engVersion={data[0].english}
                        rusVersion={data[0].russian}
                        transcription={data[0].transcription}>
                    </WordCard>
            </div>   */}

            {/* {
                data.map((item) =>
                    <WordCard
                        isEdited={false}
                        key = {item.id}
                        engVersion={item.english}
                        rusVersion={item.russian}
                        transcription={item.transcription}>
                    </WordCard>)}
            </div>  */}


        </main> 
        <Footer /> 
    </div>
    </BrowserRouter>
);
}

export default App;


import './App.css';
import './assets/styles/styles.scss';
import Header from './components/Header.jsx'; 
import Table from './components/Table.jsx'; 
import Footer from './components/Footer.jsx';
import WordCard from './components/WordCard';
import CardSlider from './components/CardSlider';
import words from './assets/data.json';


function App() {
return (
    <div className="App">
        <Header /> 
        <main className="main">
            <CardSlider    
                words={words}
                position="0">
            </CardSlider>
            <Table /> 
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
);
}

export default App;

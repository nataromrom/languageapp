
import './App.css';
import './assets/styles/styles.scss';
import Header from './components/Header.jsx'; 
import Table from './components/Table.jsx'; 
import Footer from './components/Footer.jsx';
import WordCard from './components/WordCard';
import data from './assets/data.json';

function App() {
return (
    <div className="App">
        <Header /> 
       
        <main className="main">
            <Table /> 
            <div className="cards">
            {
                data.map((item) =>
                    <WordCard
                        isEdited={false}
                        key = {item.id}
                        engVersion={item.english}
                        rusVersion={item.russian}
                        transcription={item.transcription}>
                    </WordCard>)}
            </div>   
        </main> 
        <Footer /> 
    </div>
);
}

export default App;

import { useState } from 'react';
import WordCard from '../WordCard/WordCard';
import { observer, inject } from 'mobx-react';


const CardSlider = ({ words }) => {

    const [currentIndex, setIndex] = useState(0);
    const [count, setCount] = useState(0);

    const showNext = () => {
        if (currentIndex === words.length - 1) {
            setIndex(0);
        } else {
            setIndex(currentIndex + 1)
        };
    }

    const showPrev = () => {
        if (currentIndex > 0) {
            setIndex(currentIndex - 1)
        } else {
            setIndex(words.length - 1)
        };
    }

    const addCount = () => {
        setCount(count + 1);
    }

    return (

        <div className='cardSlider'>
            <div className="counter">Изучено слов:{count}</div>
            <button className="button btnPrev" onClick={showPrev}></button>
            <WordCard
                isEdited={false}
                key={words[currentIndex].id}
                engVersion={words[currentIndex].english}
                rusVersion={words[currentIndex].russian}
                transcription={words[currentIndex].transcription}
                addCount={addCount}>
            </WordCard>
            <button className="button btnNext" onClick={showNext}></button>
        </div>

    );
};


export default inject(({ WordsData }) => {
    const { words } = WordsData;

    return {
        words
    }
})(observer(CardSlider));
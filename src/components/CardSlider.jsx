import React, { useState } from 'react';
import WordCard from './WordCard';

const CardSlider = (props) => {
    const words = props.words;
    const [currentIndex, setIndex] = useState(+props.position || 0);

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

    return (
        <div className='cardSlider'>


            <a href="#" className="button btnPrev" onClick={showPrev}></a>
            <WordCard
                isEdited={false}
                key={words[currentIndex].id}
                engVersion={words[currentIndex].english}
                rusVersion={words[currentIndex].russian}
                transcription={words[currentIndex].transcription}>
            </WordCard>
            <a href="#" className="button btnNext" onClick={showNext}></a>
        </div>

    );
};

export default CardSlider;
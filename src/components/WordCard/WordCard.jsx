import React, { useState, useEffect } from "react";

export default function WordCard(props) {

    const [isVisible, setVisible] = useState(false);
    const [index, setIndex] = useState(0);
    const handleShow = () => {
        setVisible(!isVisible);
    }

    const handleIndex = () => {
        setIndex(currenIndex => currenIndex + 1);
    }

    return (
        <div className="card">
            <div className="word">{props.engVersion}</div>
            <div className="transcription">{props.transcription}</div>
            <div className={isVisible ? "btnVisible word" : "btnTranslate"} onClick={handleShow}>
                {isVisible ? props.rusVersion : "Проверить"}
            </div>
        </div>
    );
};

import React, { useState } from "react";

export default function WordCard(props) {

    const [isVisible, setVisible] = useState(false);
    const handleShow = () => {
        setVisible(!isVisible);
    }

    return (
        <div className="card">
            <div className="word">{props.engVersion}</div>
            <div className="transcription">{props.transcription}</div>
            <a href="#" className={isVisible ? "btnVisible word" : "btnTranslate"} onClick={handleShow}>
                {isVisible ? props.rusVersion : "Проверить"}
            </a>
        </div>
    );
};

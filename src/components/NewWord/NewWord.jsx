import React, { useState, useEffect } from "react";
import { observer, inject } from 'mobx-react';

const NewWord = ({ setVisible, addWord }) => {
    const [newWord, setNewWord] = useState({
        english: "",
        transcription: "[ ]",
        russian: "",
        tag: "",
    });
    const [isValid, setValid] = useState(false);
    const [isError, setError] = useState({
        english: "",
        transcription: "",
        russian: ""
    });


    const handleClick = () => {
        addWord(newWord);
        setNewWord({
            english: "",
            transcription: "[ ]",
            russian: "",
            tag: "",
        })
        setVisible();
    }

    useEffect(() => {
        if (!newWord.transcription || !newWord.russian || !newWord.english) {
            setValid(false);
        } else {
            setValid(true);
        }
    }, [newWord.transcription, newWord.russian, newWord.english])

    useEffect(() => {
        if (isError.transcription || isError.russian || isError.english) {
            setValid(false);
        } else {
            setValid(true);
        }
    }, [isError.transcription, isError.russian, isError.english])


    const handleChange = (e) => {
        setNewWord({ ...newWord, [e.target.name]: e.target.value });

        if (e.target.name === "transcription") {

            if (e.target.value.length >= 3 && /\[(.*?)\]/.test(e.target.value)) {
                setError({ ...isError, [e.target.name]: "" });
            } else {

                if (e.target.value.length < 3) {
                    setError({ ...isError, [e.target.name]: "Значение менее 3-х знаков" });
                }

                if (!/\[(.*?)\]/.test(e.target.value)) {
                    setError({ ...isError, [e.target.name]: "Значение должно быть в скобках" });
                    console.log(isError);
                }
            }
        } else {

            if (e.target.value.length < 2) {
                setError({ ...isError, [e.target.name]: "Значение менее 2-х знаков" });
            } else {
                setError({ ...isError, [e.target.name]: "" });
            }
        }

    }


    return (
        <tr>
            <td>{isError.english ? <div className="errMsg">{isError.english}</div> : ""}
                <input type="text" name="english" className={newWord.english && !isError.english ? "" : "noValid"} value={newWord.english} onChange={handleChange} /></td>
            <td>{isError.transcription ? <div className="errMsg">{isError.transcription}</div> : ''}
                <input type="text" name="transcription" className={newWord.transcription && !isError.transcription ? "" : "noValid"} value={newWord.transcription} onChange={handleChange} /></td>
            <td>{isError.russian ? <div className="errMsg">{isError.russian}</div> : ''}
                <input type="text" name="russian" className={newWord.russian && !isError.russian ? "" : "noValid"} value={newWord.russian} onChange={handleChange} /></td>
            <td> <button className="button btnSave" onClick={handleClick} disabled={!isValid}></button>
                <button className="button btnDelete" onClick={setVisible}></button></td>
        </tr>
    );
};


export default inject(({ WordsData }) => {
    const { setVisible, addWord } = WordsData;

    return {
        setVisible, addWord
    }
})(observer(NewWord));
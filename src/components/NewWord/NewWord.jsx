import React, { useContext, useState } from "react";
import { WordContext } from "../Context/WordContext";

const NewWord = () => {
    const { isLoading, words, addButtonClick, addWord, getWords } = useContext(WordContext);
    const [newWord, setNewWOrd] = useState({
        english: "",
        transcription: "[]",
        russian: "",
        tag: "",
    });



    const handleClick = () => {
        addWord(newWord)
            .then(() => getWords());
        setNewWOrd({
            english: "",
            transcription: "[]",
            russian: "",
            tag: "",
        })
        addButtonClick();
    }

    const handleChange = (e) => {
        setNewWOrd({ ...newWord, [e.target.name]: e.target.value });
    }


    return (
        <tr>
            <td><input type="text" name="english" value={newWord.english} onChange={handleChange} /></td>
            <td><input type="text" name="transcription" value={newWord.transcription} onChange={handleChange} /></td>
            <td><input type="text" name="russian" value={newWord.russian} onChange={handleChange} /></td>
            <td> <button className="button btnSave" onClick={handleClick}></button>
                <button className="button btnDelete" onClick={addButtonClick}></button></td>
        </tr>
    );
};

export default NewWord;
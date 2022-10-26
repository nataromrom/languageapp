import React, { useState, useEffect, useContext } from "react";
import { WordContext } from './../Context/WordContext';


export default function TableRow(props) {
    const [isEdited, setEdited] = useState(props.isEdited);
    const { editWord, deleteWord, getWords, addWord } = useContext(WordContext);
    const [state, setState] = useState({
        english: props.english,
        transcription: props.transcription,
        russian: props.russian,
    });
    const [isValid, setValid] = useState(true);
    const [isError, setError] = useState({
        english: '',
        transcription: '',
        russian: ''
    });

    useEffect(() => {
        if (!state.transcription || !state.russian || !state.english) {
            setValid(false);
        } else {
            setValid(true);
        }
    }, [state.transcription, state.russian, state.english])

    useEffect(() => {
        if (isError.transcription || isError.russian || isError.english) {
            setValid(false);
        } else {
            setValid(true);
        }
    }, [isError.transcription, isError.russian, isError.english])

    const editChange = () => {
        setEdited(!isEdited);
    }

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value });


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

    const eraseChange = () => {
        if (isEdited) {
            setState({
                english: props.english,
                transcription: props.transcription,
                russian: props.russian
            });
            setError({
                english: '',
                transcription: '',
                russian: ''
            });
            setEdited(!isEdited);
        } else {
            console.log(props.id);
            console.log(state);
            deleteWord(props.id)
                .then(() => getWords());
        }

    }


    const saveChange = () => {
        if (isValid) {
            console.log(props.id);
            console.log(state);
            setEdited(!isEdited);
            console.log(props.id);
            editWord(props.id, state)
                .then(() => getWords());
        }
    }

    return (
        <tr>
            <td>{isError.english ? <div className="errMsg">{isError.english}</div> : ""}
                {isEdited ? <input type="text" className={state.english && !isError.english ? "" : "noValid"} value={state.english} onChange={handleChange} name="english" /> : state.english}</td>
            <td>{isError.transcription ? <div className="errMsg">{isError.transcription}</div> : ''}
                {isEdited ? <input type="text" className={state.transcription && !isError.transcription ? "" : "noValid"} value={state.transcription} onChange={handleChange} name="transcription" /> : state.transcription}</td>
            <td>{isError.russian ? <div className="errMsg">{isError.russian}</div> : ''}
                {isEdited ? <input type="text" className={state.russian && !isError.russian ? "" : "noValid"} value={state.russian} onChange={handleChange} name="russian" /> : state.russian}</td>
            <td>
                {isEdited ? <button className="button btnSave" onClick={saveChange} disabled={!isValid}></button>
                    : <button className="button btnEdit" onClick={editChange}></button>}
                <button className="button btnDelete" onClick={eraseChange}></button>
            </td>
        </tr>
    );
};

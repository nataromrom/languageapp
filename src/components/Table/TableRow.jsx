import React, { useState, useEffect } from "react";


export default function TableRow(props) {

    const [isEdited, setEdited] = useState(props.isEdited);
    const [state, setState] = useState({
        engVersion: props.engVersion,
        transcription: props.transcription,
        rusVersion: props.rusVersion,
    });
    const [isValid, setValid] = useState(true);
    const [isError, setError] = useState({
        engVersion: '',
        transcription: '',
        rusVersion: ''
    });

    useEffect(() => {
        if (!state.transcription || !state.rusVersion || !state.engVersion) {
            setValid(false);
        } else {
            setValid(true);
        }
    }, [state.transcription, state.rusVersion, state.engVersion])

    useEffect(() => {
        if (isError.transcription || isError.rusVersion || isError.engVersion) {
            setValid(false);
        } else {
            setValid(true);
        }
    }, [isError.transcription, isError.rusVersion, isError.engVersion])

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
                engVersion: props.engVersion,
                transcription: props.transcription,
                rusVersion: props.rusVersion
            });
            setError({
                engVersion: '',
                transcription: '',
                rusVersion: ''
            });
            setEdited(!isEdited);
        } else {
            //Метод для удаления слова (не работает)
            fetch(`/api/words/${props.key}/delete`, { metod: 'POST' })
                .then((response) => response.json())
                .then((response) => setState(response))
        }

    }


    const saveChange = () => {
        if (isValid) {
            console.log(state);
            setEdited(!isEdited);

            //Метод для изменения слова (не работает)
            fetch(`/api/words/${props.key}/update`, { metod: 'POST', body: JSON.stringify({ state }) })
                .then((response) => response.json())
                .then((response) => setState(response))
        }
    }

    return (
        <tr>
            <td>{isError.engVersion ? <div className="errMsg">{isError.engVersion}</div> : ""}
                {isEdited ? <input type="text" className={state.engVersion && !isError.engVersion ? "" : "noValid"} value={state.engVersion} onChange={handleChange} name="engVersion" /> : state.engVersion}</td>
            <td>{isError.transcription ? <div className="errMsg">{isError.transcription}</div> : ''}
                {isEdited ? <input type="text" className={state.transcription && !isError.transcription ? "" : "noValid"} value={state.transcription} onChange={handleChange} name="transcription" /> : state.transcription}</td>
            <td>{isError.rusVersion ? <div className="errMsg">{isError.rusVersion}</div> : ''}
                {isEdited ? <input type="text" className={state.rusVersion && !isError.rusVersion ? "" : "noValid"} value={state.rusVersion} onChange={handleChange} name="rusVersion" /> : state.rusVersion}</td>
            <td>
                {isEdited ? <button className="button btnSave" onClick={saveChange} disabled={!isValid}></button>
                    : <button className="button btnEdit" onClick={editChange}></button>}
                <button className="button btnDelete" onClick={eraseChange}></button>
            </td>
        </tr>
    );
};

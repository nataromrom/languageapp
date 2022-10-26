import React, { useState, useEffect } from 'react';
const WordContext = React.createContext();

function WordContextProvider(props) {
    const [words, setWords] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        getWords();
    }, []);


    const addButtonClick = () => {
        setVisible(!visible);
    }

    async function getWords() {
        setLoading(true);

        await fetch(`/api/words`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Something went wrong ...');
                }
            })
            .then((response) => {
                console.log(response)
                setWords(response);
            })
            .catch(error => {
                setError(error);
            });

        setLoading(false);
    }

    async function editWord(id, word) {
        word.tags  = ''; 
        console.log(word);

        setLoading(true);
        console.log(id);
        console.log(word);
        await fetch(`/api/words/${id}/update`,  { method: 'POST', body: JSON.stringify(word) })
            .then((response) => response.json())
            .then((response) => console.log(response));
        setLoading(false);
    }

    async function deleteWord(id) {
        setLoading(true);

        await fetch(`/api/words/${id}/delete`, { method: 'POST' })
            .then((response) => response.json())
            .then((response) => console.log(response));

        setLoading(false);
    }
 
    async function addWord(word) {
        setLoading(true);

        await fetch(`/api/words/add`, { method: 'POST', body: JSON.stringify(word) })
            .then((response) => response.json())
            .then((response) => console.log(response));

        setLoading(false);
    }

    return (
        <WordContext.Provider value={{ words, setWords, editWord, deleteWord, getWords, addWord, isLoading, error, visible, addButtonClick }}>
            {props.children}
        </WordContext.Provider>
    );
}
export { WordContextProvider, WordContext };
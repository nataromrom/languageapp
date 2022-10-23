import React, { useState, useEffect } from 'react';
const WordContext = React.createContext();

function WordContextProvider(props) {
    const [state, setState] = useState({
        data: [],
        isLoading: true,
        error: null,
    });
    useEffect(() => {
        fetch(`/api/words`)
            .then(response => {
                if (response.ok) { 
                    return response.json();
                } else {
                    throw new Error('Something went wrong ...');
                }
            })
            .then((response) => {
                setState({
                    data: response,
                    isLoading: false,
                })
            })
            .catch(error => setState({ error, isLoading: false }));
    }, [])
 
    return (
        <WordContext.Provider value={{ state, setState }}>
            {props.children}
        </WordContext.Provider>
    );
}
export { WordContextProvider, WordContext };
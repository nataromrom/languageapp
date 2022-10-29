import TableRow from './TableRow.jsx';
import React, { useEffect } from 'react';
import Loader from '../Loader/Loader';
import ErrorPage from '../ErrorPage/ErrorPage.jsx';
import NewWord from '../NewWord/NewWord.jsx';
import { observer, inject } from 'mobx-react';


const Table = ({ words, isLoading, error, visible, setVisible, deleteWord, editWord }) => {

    if (isLoading || !words.length) { return <Loader />; }
    if (error) { return <ErrorPage />; }

    return (
        <div className='table-wrapper'>
            <div className="button_add" onClick={setVisible}> Новое слово <button className="button btnAdd"></button></div>
            <div className="table" >
                <table>
                    <thead>
                        <tr>
                            <th>Слово</th>
                            <th>Транскрипция</th>
                            <th>Перевод</th>
                            <th>Управление</th>
                        </tr>
                    </thead>
                    {visible ? <NewWord></NewWord> : ""}
                    <tbody>
                        {
                            words.map((item) =>
                                <TableRow
                                    key={item.id}
                                    {...item}
                                    deleteWord={deleteWord}
                                    editWord={editWord}>
                                </TableRow>)
                        }
                    </tbody>
                </table>
            </div >
        </div >
    );
}

export default inject(({ WordsData }) => {
    const { words, getWords, isLoading, error, visible, setVisible, deleteWord, editWord } = WordsData;

    useEffect(() => {
        getWords();
    }, []);

    return {
        words, getWords, isLoading, error, visible, setVisible, deleteWord, editWord
    }
})(observer(Table));
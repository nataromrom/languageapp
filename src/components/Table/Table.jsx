// import data from '../../assets/data';
import TableRow from './TableRow.jsx';
import React, { useContext } from 'react';
import { WordContext } from '../Context/WordContext';
import Loader from '../Loader/Loader';
import ErrorPage from '../ErrorPage/ErrorPage.jsx';
import NewWord from '../NewWord/NewWord.jsx';

const Table = () => {
    const { isLoading, words, error, addWord, getWords, visible, addButtonClick } = useContext(WordContext);

    if (isLoading && !words.length) { return <Loader />; }
    if (error) { return <ErrorPage />; }

    const handleAddButtonClick = () => {
        addButtonClick();
    }

    return (
        <div className='table-wrapper'>
            <div className="button_add" onClick={handleAddButtonClick}> Новое слово <button className="button btnAdd"></button></div>
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
                                    {...item} >
                                </TableRow>)
                        }
                    </tbody>
                </table>
            </div >
        </div >
    )
};

export default Table;
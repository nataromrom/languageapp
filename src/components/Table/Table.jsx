// import data from '../../assets/data';
import TableRow from './TableRow.jsx';
import { useContext } from 'react';
import { WordContext } from '../Context/WordContext';
import Loader from '../Loader/Loader';
import ErrorPage from '../ErrorPage/ErrorPage.jsx';


const Table = () => {
    const { state, setState } = useContext(WordContext);
    const words = state.data;


    if (state.isLoading) { return <Loader />; }
    if (state.error) { return <ErrorPage />; }

    return (
        <div div className="table" >
            <table>
                <thead>
                    <tr>
                        <th>Слово</th>
                        <th>Транскрипция</th>
                        <th>Перевод</th>
                        <th>Управление</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        words.map((item) =>
                            <TableRow
                                isEdited={false}
                                key={item.id}
                                engVersion={item.english}
                                rusVersion={item.russian}
                                transcription={item.transcription}>
                            </TableRow>)}
                </tbody>
            </table>
        </div >
    );
};

export default Table;
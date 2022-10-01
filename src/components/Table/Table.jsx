import data from '../../assets/data';
import TableRow from './TableRow.jsx';

const Table = () => {
    return (
        <div className="table">
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
                        data.map((item) =>
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
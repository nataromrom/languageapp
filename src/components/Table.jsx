import './Table.scss';

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
                    <tr>
                        <td>turquoise</td>
                        <td>[ ˈtɜːkwɔɪz ]</td>
                        <td>бирюзовый</td>
                        <td>
                            <a href="#" class="button btnSave"></a>
                            <a href="#" class="button btnDelete"></a>
                            <a href="#" class="button flower"></a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Table;
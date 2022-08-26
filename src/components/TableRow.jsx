import React, { useState } from "react";

export default function TableRow(props) {

    const [isEdited, setEdited] = useState(props.isEdited);
    const handleChange = () => {
        setEdited(!isEdited);
    }

    return (
        <tr>
            <td>{isEdited ? <input type="text" defaultValue={props.engVersion} /> : props.engVersion}</td>
            <td>{isEdited ? <input type="text" defaultValue={props.transcription} /> : props.transcription}</td>
            <td>{isEdited ? <input type="text" defaultValue={props.rusVersion} /> : props.rusVersion}</td>
            <td>
                {isEdited ? <a href="#" className="button btnSave" onClick={handleChange}></a>
                    : <a href="#" className="button btnEdit" onClick={handleChange}></a>}
                <a href="#" className="button btnDelete" onClick={handleChange}></a>
            </td>
        </tr>
    );
};

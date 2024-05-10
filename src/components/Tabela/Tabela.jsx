import React from 'react';
import './Tabela.css'

function Tabela({ animal }) {
    return (
        <tr >
            <td>{animal.nomeanimal}</td>
            <td>{animal.generoanimal}</td>
            <td>{animal.tipoanimal}</td>
            <td>{animal.envergadura}</td>
        </tr>
    );
}

export default Tabela;

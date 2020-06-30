import React, { useState } from 'react';


const ListaAlunos = function (props) {
    const alunos = props.alunos;
    
    return (
        <table border="1" width="100%">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nome</th>
                    <th>Nota</th>
                </tr>
            </thead>
            <tbody>
                {alunos.map(function (aluno) {
                    return (
                        <tr key={aluno.id}>
                            <td>{aluno.id}</td>
                            <td>{aluno.nome}</td>
                            <td>{aluno.nota}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default ListaAlunos;
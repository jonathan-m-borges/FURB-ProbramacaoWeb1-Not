import React, { useState } from 'react';
import Aluno from '../models/Aluno';

let contador = 4;

const FormAluno = function (props) {
    const [nome, setNome] = useState('');
    const [nota, setNota] = useState('');
    const [erros, setErros] = useState('');

    const handleSubmit = function(e) {
        e.preventDefault();
        setErros('');
        if (!nome) {
            setErros('O campo nome é obrigatório');
            return;
        }
        const aluno = new Aluno(contador, nome, nota);
        contador++;
        props.funcaoAdicionarAluno(aluno);
        setNome('');
        setNota('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Adicionar Aluno</h1>
            <p>
                <label htmlFor="nome">Nome:</label><br />
                <input name="nome" value={nome} onChange={(e) => setNome(e.target.value)} />
            </p>
            <p>
                <label htmlFor="nota">Nota:</label><br />
                <input name="nota" value={nota} onChange={(e) => setNota(e.target.value)}  />
            </p>
            <p>
                <span style={{color: 'red'}}>{erros}</span>
                <br />
                <input type="submit" value="Adicionar" />
            </p>
        </form>
    )
}

export default FormAluno;
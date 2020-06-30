import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import Aluno from './models/Aluno';

import FormAluno from './components/FormAluno';
import ListaAlunos from './components/ListaAlunos';

const Teste = function () {
    const alunosExemplo = [
        new Aluno(1, 'Jonathan', 6),
        new Aluno(2, 'Daniel', 10),
        new Aluno(3, 'Éliton', 10)
    ];
    const [alunos, setAlunos] = useState(alunosExemplo);

    const adicionarAluno = function (aluno) {
        setAlunos([...alunos, aluno]);
    }

    return (
        <div>
            <FormAluno funcaoAdicionarAluno={adicionarAluno} />
            <ListaAlunos alunos={alunos} />
        </div>
    )
}

ReactDOM.render(<Teste />, document.getElementById('root'));
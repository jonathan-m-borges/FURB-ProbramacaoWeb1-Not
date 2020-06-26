var proxIdAluno = 1;

class ServicoAlunos {
    constructor() {
        this.alunos = [];
    }

    listarTodos = (callback) => {
        //TODO: faria a chamada ajax
        callback(this.alunos);
    }

    adicionar = (aluno, callback) => {
        aluno.id = proxIdAluno;
        proxIdAluno++;
        this.alunos.push(aluno);
        callback(aluno);
    }

    //TODO: buscar por ID
    //TODO: atualizar
    //TODO: deletar
}

module.exports = ServicoAlunos;
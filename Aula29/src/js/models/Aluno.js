class Aluno {
    constructor(id, nome, nota) {
        this.id = id;
        this.nome = nome;
        this.nota = nota;
    }

    mostrarAluno() {
        return `Id:${this.id}; Nome:${this.nome}; Nota:${this.nota}`;
    }
}

//utilizando EC6
module.exports = Aluno;

//utilizando EC7
//export default Aluno;
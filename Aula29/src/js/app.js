const Aluno = require('./models/Aluno');
const ServicoAlunos = require('./services/ServicoAlunos');

class App {
    constructor() {
        this.servicoAlunos = new ServicoAlunos();

        this.tabela = document.getElementById('tbody-alunos');

        this.iniciarEventos();
        this.atualizarTabela();
    }

    iniciarEventos = () => {
        document.getElementById('btn-salvar').addEventListener('click', this.adicionarAluno);
    }

    atualizarTabela = () => {
        this.tabela.innerHTML = '';

        this.servicoAlunos.listarTodos((alunos) => {
            if (alunos.length == 0) {
                this.tabela.innerHTML = '<tr><td colspan="3">Nenhum aluno cadastrado.</td></tr>';
            }
            else {
                this.tabela.innerHTML = '';
                alunos.forEach((item) => {
                    this.tabela.appendChild(this.criarLinhaAluno(item));
                })
            }
        })
    }

    adicionarAluno = () => {
        const nome = document.getElementById('nome').value;
        const nota = document.getElementById('nota').value;
        //TODO validacoes
        const aluno = new Aluno(0, nome, nota);
        this.servicoAlunos.adicionar(aluno, (alunoAdicionado) => {
            alert(`O aluno ${alunoAdicionado.nome} foi adicionado com sucesso!!!`);
            this.atualizarTabela();
            this.limparFormulario();
        })
    }

    limparFormulario = () => {
        document.getElementById('nome').value = '';
        document.getElementById('nota').value = '';
    }

    criarLinhaAluno = (aluno) => {
        const tr = document.createElement('tr');
        tr.innerHTML =
            `<td>${aluno.id}</td>` +
            `<td>${aluno.nome}</td>` +
            `<td>${aluno.nota}</td>`;
        return tr;
    }
}

new App();
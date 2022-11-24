class Pessoa {
    
    constructor(nome, email, nascimento, feedback) {
        this.nome = nome;
        this.email = email;
        this.nascimento = nascimento;
        this.feedback = feedback;
    }

    getIdade() {
        const diferenca = Date.now() - new Date(this.nascimento).getTime();
        return new Date(diferenca).getFullYear() - 1970;
    }

    getNascimento() {
        const dataSlipt = this.nascimento.split("-");
        const ano = dataSlipt[0];
        const mes = dataSlipt[1];
        const dia = dataSlipt[2];

        return dia + "/" + mes + "/" + ano;
    }
}
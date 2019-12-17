export class Usuario {

    constructor(
        public nome: string, 
        public email: string, 
        public cpf: string, 
        public nascimento: Date, 
        public senha: string
    ) { }

}
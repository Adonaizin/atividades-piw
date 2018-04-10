
export class Post{
    // nomePessoa:string;
    // texto:string;
    // qtdLikes:number;
    // id?:number;

    // constructor(id, nomePessoa, texto, qtdLikes){
    //     this.nomePessoa = nomePessoa;
    //     this.texto = texto;
    //     this.qtdLikes = qtdLikes;
    //     this.id = id;
    // }
    constructor(
        public nomePessoa: string,
        public texto: string,
        public qtdLikes: number,
        public id?: number
    ){}
}
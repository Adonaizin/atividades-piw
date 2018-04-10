import { Injectable, Output, EventEmitter } from '@angular/core';
import { Post } from './../post-modelo/post.model';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class PostService{

    @Output() recebeuLike = new EventEmitter<any>();

    url:string = 'http://rest.learncode.academy/api/adonai/posts/';
    
    posts:Post[]=[];
    // posts = [
    //     new Post(1, "Fulano", "Eu acho essa nova série da Fletnix muito boa!", 10),
    //     new Post(2, "Ciclano", "Eu devo discordar!", 3)
    //     ]

    constructor(private http: Http){}

    addPost(nomePessoa, texto){
        // this.posts.push(post);
        // console.log("passou aqui add post");
        // console.log(this.getPosts());
        let post = new Post(nomePessoa, texto, 0);
        this.posts.push(post);
        return this.http.post(this.url, post)
                        .map((response:Response) => response.json())
                        .catch((error:Response) => Observable.throw(error));
    }
    excluirPost(id:number){
        for (let p in this.posts) {
            if (this.posts[p].id == id) {
                let index = this.posts.indexOf(this.posts[p]);
                this.posts.splice(index, 1);        
            }
        }
        return this.http.delete(this.url + id)
                        .map((response: Response) => response)
                        .catch((error: Response) => Observable.throw(error));

    }
    getPosts(){
        // return this.posts;
        return this.http.get(this.url)
                .map((response:Response) => {
                    this.posts = [];
                    for(let p of response.json()){
                        this.posts.push(new Post(p.nomePessoa, p.texto, p.qtdLikes, p.id))
                    }
                    return this.posts;
                })
                .catch((error: Response) => Observable.throw(error))
    }
    adicionarLike(id:number){
        let likes;
        let atualPost;
        for (let p in this.posts) {
            if (this.posts[p].id == id) {
                likes = (this.posts[p].qtdLikes + 1);
                this.posts[p].qtdLikes += 1;
                atualPost = this.posts[p];
                console.log("passou");
            }
        }
        return this.http.put(this.url + id, 
            {nomePessoa: atualPost.nomePessoa, texto: atualPost.texto, qtdLikes: likes})
                        .map((response: Response) => response)
                        .catch((error: Response) => Observable.throw(error));
    }
}

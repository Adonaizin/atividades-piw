import { Injectable, Output, EventEmitter } from '@angular/core';
import { Post } from './../post-modelo/post.model';

@Injectable()
export class PostService{

    @Output() recebeuLike = new EventEmitter<any>();

    posts = [
        new Post(1, "Fulano", "Eu acho essa nova série da Fletnix muito boa!", 10),
        new Post(2, "Ciclano", "Eu devo discordar!", 3)
      ]

    addPost(post: Post){
        this.posts.push(post);
        console.log("passou aqui add post");
        console.log(this.getPosts());
    }
    excluirPost(id:number){
        for (let p in this.posts) {
            if (this.posts[p].id == id) {
                let index = this.posts.indexOf(this.posts[p]);
                this.posts.splice(index, 1);
            }
        }
    }
    getPosts(){
        return this.posts;
    }
    adicionarLike(id:number){
        for (let p in this.posts) {
            if (this.posts[p].id == id) {
                this.posts[p].qtdLikes += 1;
            }
        }
    }
}

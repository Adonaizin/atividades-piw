import { Post } from "./../post-modelo/post.model";
import { PostService } from "./../post/post.service";
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post-input',
  templateUrl: './post-input.component.html',
  styleUrls: ['./post-input.component.css'],
  providers: [PostService]
})
export class PostInputComponent implements OnInit {

  
  @Input() posts: Post[];
  @Output() newPost = new EventEmitter<any>();
  nomePessoa:string = "";
  texto:string = "";

  constructor(private postService: PostService) { }
  
  ngOnInit() {
    this.posts = this.postService.getPosts();
  }

  onSubmit(event){
    event.preventDefault();
    this.newPost.emit(
      new Post((this.posts[this.posts.length-1].id+1),this.nomePessoa,this.texto,0)
    );
    this.posts.push(
      new Post((this.posts[this.posts.length-1].id+1),this.nomePessoa,this.texto,0)
    );
  }
  
}

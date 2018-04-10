import { Post } from "./../post-modelo/post.model";
import { PostService } from "./../post/post.service";
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post-input',
  templateUrl: './post-input.component.html'
})
export class PostInputComponent implements OnInit {

  
  @Output() newPost = new EventEmitter<any>();
  posts: Post[];
  nomePessoa:string = "";
  texto:string = "";

  constructor(private postService: PostService) { }
  
  ngOnInit() {
    this.postService.getPosts()
      .subscribe(data => {
        this.posts = data;
        // console.log(this.posts);
      },
        error => console.log(error));
  }

  onSubmit(event){
    event.preventDefault();
    // this.newPost.emit(
    //   new Post((this.posts[this.posts.length-1].id+1),this.nomePessoa,this.texto,0)
    // );
    this.postService.addPost(this.nomePessoa, this.texto)
                    .subscribe(data  => console.log(data),
                              error => console.log(error));
  }
  
}

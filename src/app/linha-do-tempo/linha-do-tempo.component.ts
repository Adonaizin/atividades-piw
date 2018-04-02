import { Post } from './../post-modelo/post.model';
import { PostService } from "./../post/post.service";
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-linha-do-tempo',
  templateUrl: './linha-do-tempo.component.html',
  styleUrls: ['./linha-do-tempo.component.css'],
  providers: [PostService]
})
export class LinhaDoTempoComponent implements OnInit {

  @Input() posts: Post[];
  constructor(private postService: PostService) { }
  
  ngOnInit() {
    this.posts = this.postService.getPosts();
  }
  
  adicionarLike(id:number){
    this.postService.adicionarLike(id);
  }

  // addPost(post: Post){
  //   this.postService.addPost(post);
  //   console.log("passou no addPost linha do tempo");
  //   console.log(this.postService.getPosts());
  // }
  
  excluirPost(id: number){
    this.postService.excluirPost(id);
  }

}

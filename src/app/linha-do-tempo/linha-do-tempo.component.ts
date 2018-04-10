import { Post } from './../post-modelo/post.model';
import { PostService } from "./../post/post.service";
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-linha-do-tempo',
  templateUrl: './linha-do-tempo.component.html',
  styleUrls: ['./linha-do-tempo.component.css']
})
export class LinhaDoTempoComponent implements OnInit {

  public posts: Post[];
  constructor(private postService: PostService) { }
  
  ngOnInit() {
    this.postService.getPosts()
      .subscribe(data => {
        this.posts = data;
        // console.log(this.posts);
      },
        error => console.log(error));
  }
  
  // adicionarLike(id:number){
  //   this.postService.adicionarLike(id);
  // }
  
  excluirPost(id: number){
    this.postService.excluirPost(id);
  }

}

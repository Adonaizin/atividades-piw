import { Post } from "./../post-modelo/post.model";
import { PostService } from "./../post/post.service";
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-postar',
  templateUrl: './postar.component.html',
  styleUrls: ['./postar.component.css']
})
export class PostarComponent implements OnInit {

  @Input() posts: Post[];

  constructor(private postService: PostService) { }
  
  ngOnInit() {
    this.postService.getPosts()
      .subscribe((data) => {
        this.posts = data;
        // console.log(this.posts);
      },
        (error) => console.log(error));
  }

  // addPost(post: Post){
  //   this.postService.addPost(post);
  // }

}

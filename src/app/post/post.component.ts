import { Post } from './../post-modelo/post.model';
import { PostService } from "./../post/post.service";
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() posts: Post[];
  @Input() index:number;
  @Output() recebeuLike = new EventEmitter<any>();
  @Output() removePost = new EventEmitter();

  constructor(private postService: PostService) { }
  
  ngOnInit() {
    
  }
  
  deuLike(id){
    // event.preventDefault();
    // this.recebeuLike.emit(this.posts[this.index].id);
    this.postService.adicionarLike(id)
                    .subscribe(data => {this.recebeuLike.emit(id)},
                               error => console.log(error));
  }

  onClickRemove(id){
    // this.removePost.emit(this.posts[this.index].id);
    this.postService.excluirPost(id)
                    .subscribe(data => {console.log(id, data);
                    this.removePost.emit(id);
                    },
                      error => console.log(error));
  }

}

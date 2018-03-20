import { Post } from './../post-modelo/post.model';
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
  
  constructor() { }

  deuLike(){
    this.posts[this.index].qtdLikes += 1;
    this.recebeuLike.emit(this.posts[this.index]);
  }
  ngOnInit() {
  
  }

}

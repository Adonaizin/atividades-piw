import { Post } from './../post-modelo/post.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-linha-do-tempo',
  templateUrl: './linha-do-tempo.component.html',
  styleUrls: ['./linha-do-tempo.component.css']
})
export class LinhaDoTempoComponent implements OnInit {

  posts = [
    new Post(1, "Fulano", "Eu acho essa nova série da Fletnix muito boa!", 10),
    new Post(2, "Ciclano", "Eu devo discordar!", 3)
  ]
  constructor() { }

  capturarLike(post:Post){
    console.log(post.nomePessoa + " recebeu like");
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { Post } from './post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  storedPost:Post[]=[];

  onAddingPost(post:Post)
  {
   this.storedPost.push(post);
  }
}



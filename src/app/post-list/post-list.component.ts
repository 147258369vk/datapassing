import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../post/post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  constructor() { }


  // posts=[{
  //   enteredTitle:"ABC",
  //   enteredMsg:"xyz"
  // },{
  //   enteredTitle:"ABC1",
  //   enteredMsg:"xyz1"
  // },
  // {
  //   enteredTitle:"ABC2",
  //   enteredMsg:"xyz2"
  // }]

  @Input() posts:Post[]=[];

  ngOnInit(): void {
  }

}

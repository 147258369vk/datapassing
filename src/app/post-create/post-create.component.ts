import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from '../post/post.model';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  constructor() { }

  posts:Post={
    enteredTitle:'',
    enteredMsg:''
  }
  @Output() postCreated = new EventEmitter<Post>();

  ngOnInit(): void {
  }

  onAddForm(form:NgForm)
  {
    console.log(form.value);
    const post:Post={
      enteredTitle:form.value.enteredTitle,
      enteredMsg:form.value.enteredMsg
    }

    this.postCreated.emit(post);

  }

}

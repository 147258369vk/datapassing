import { Component } from '@angular/core';
import { Post } from './post/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-project';

  storedPost:Post[]=[];

  onAddingPost(post:Post)
  {
   this.storedPost.push(post);
  }
}
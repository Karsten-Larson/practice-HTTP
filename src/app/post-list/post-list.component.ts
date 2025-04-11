import { Component, inject, Input } from '@angular/core';
import { DataService } from '../data.service';
import { Post } from '../post';
import { RouterModule } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-post-list',
  imports: [RouterModule],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css',
})
export class PostListComponent {
  postService = inject(DataService);
  posts: Post[] = [];

  ngOnInit() {
    this.postService
      .getPosts()
      .pipe(
        map((data: Post[]) =>
          data.filter((post) => post.title.toLowerCase().includes('dolorem'))
        )
      )
      .subscribe((data: Post[]) => {
        this.posts = data;
      });
  }

  addPost() {
    this.postService.addPost().subscribe((post: Post) => {
      console.log(post);
    });
  }

  updatePost() {
    this.postService.updatePost().subscribe((post: Post) => {
      console.log(post);
    });
  }
}

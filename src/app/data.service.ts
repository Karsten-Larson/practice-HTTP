import { inject, Injectable } from '@angular/core';
import { posts } from './post-data';
import { Post } from './post';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private http = inject(HttpClient);
  url = 'https://jsonplaceholder.typicode.com/posts/';

  getPosts(): Observable<Post[]> {
    const params = new HttpParams().set('_limit', 20);
    return this.http.get<Post[]>(this.url, { params });
  }

  getPostById(id: number): Observable<Post[]> {
    const params = new HttpParams().set('id', id);
    return this.http.get<Post[]>(this.url, { params });
  }

  addPost() {
    const post: Post = {
      id: 101,
      userId: 1000,
      title: 'New Post',
      body: 'This is a new post',
    };
    return this.http.post<Post>(this.url, post);
  }

  updatePost() {
    const post: Post = {
      id: 1,
      userId: 1,
      title: 'Updated Post',
      body: 'This is an updated post',
    };
    return this.http.put<Post>(`${this.url}/1`, post);
  }
}

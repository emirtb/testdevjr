import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { PostModel } from '../models/post.model';
import { CommentModel } from '../models/comment.model';

const httpOptions = {
  headers: new HttpHeaders ({
    'Content-Type': 'application/json; charset=UTF-8',
  })
}

@Injectable()
export class PostsService {
  private postsUrl: string ='https://jsonplaceholder.typicode.com/posts';
  constructor(
    private http: HttpClient,
  ) { }

  getPost(id: number): Observable<PostModel> {
    return this.http.get<PostModel>(`${this.postsUrl}/${id}`)
  }

  getPostsByUser(idUser:any): Observable<PostModel[]> {
    return this.http.get<PostModel[]>(`${this.postsUrl}?userId=${idUser}&_sort=views&_order=desc`);
  }

  getCommentsByPost(id:any): Observable<CommentModel[]> {
    return this.http.get<CommentModel[]>(`${this.postsUrl}/${id}/comments`);
  }

  addPost(post: PostModel): Observable<PostModel> {
    return this.http.post<PostModel>(this.postsUrl, post, httpOptions) 
  }

}
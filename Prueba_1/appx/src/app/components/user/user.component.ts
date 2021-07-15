import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CommentModel } from 'src/app/models/comment.model';
import { PostModel } from 'src/app/models/post.model';
import { TodoModel } from 'src/app/models/todo.model';
import { PostsService } from 'src/app/services/posts.service';
import { TodosService } from 'src/app/services/todo.service';

// Model
import { UserModel } from '../../models/user.model';

// Service
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: UserModel[]
  constructor(
    private usersService: UsersService, private todoService: TodosService, private postsService:PostsService
   ) { }
  canAddTodo:boolean;
   posts: PostModel[];
   currentUser:UserModel;
   todos$!: Observable<TodoModel[]>;
  async ver(type:string, user:UserModel){
    this.currentUser = user;
    if (type == "posts"){
      this.todos$ = null;
    
      this.postsService.getPostsByUser(user.id).subscribe((items:Array<PostModel>)=>{
        this.posts = items;
        items.forEach(p=>{
          this.postsService.getCommentsByPost(p.id).subscribe((comments:Array<CommentModel>)=> {
            p["comments"] = comments
          });
        });
      })
      this.canAddTodo = false;
    }else{
      this.canAddTodo = true;
      this.todo = new TodoModel();
      this.posts =null;
      this.todos$ = await this.todoService.getTodos(user.id)
 
    }
  }
  todo:TodoModel=new TodoModel();
  getUsers(): void {
    this.usersService.getUsers()
      .subscribe(users => this.users = users)
  }
  async save(){
    console.log("save" , this.todo);
    this.todoService.createTodo(this.todo);
    this.todo = new TodoModel();
  }
  ngOnInit() {
    this.getUsers()
  }

}
import { Component, OnInit } from '@angular/core';
import { Post } from "../types/post";
import { ApiService } from "../services/api.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  posts: Post[];


  constructor(private apiService: ApiService) {
    this.posts = [];

  }

  ngOnInit() {
    this.apiService.get('/meme/').subscribe((data) => {
      this.posts = data.body.map((post: Post) => {
        return {
          ...post,
          createdAtDate: new Date(post.createdAt * 1000)
        }
      })
      this.posts.sort((a, b) => b.createdAtDate.getTime() - a.createdAtDate.getTime())
    })
  }


}

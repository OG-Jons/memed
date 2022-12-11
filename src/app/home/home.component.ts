import { Component } from '@angular/core';
import { Post } from "../types/post";
import { ApiService } from "../services/api.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {



  constructor(private apiService: ApiService) {}


  posts: Post[] = [
    {
      id: 1,
      title: 'Cum Sock',
      imageURL: 'https://wallpaperaccess.com/full/428267.gif',
      loveIts: 5,
      createdAt: new Date(),
      userID: 1
    },
    {
      id: 2,
      title: 'Bitch',
      imageURL: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
      loveIts: 0,
      createdAt: new Date(),
      userID: 1
    }
  ];

}

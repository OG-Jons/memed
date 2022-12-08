import { Component } from '@angular/core';
import { Post } from "../types/post";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  posts: Post[] = [
    {
      id: 1,
      title: 'Cum Sock',
      imageURL: 'https://wallpaperaccess.com/full/428267.gif',
      loveIts: 5
    },
    {
      id: 2,
      title: 'Bitch',
      imageURL: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
      loveIts: 0
    }
  ];

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  posts = [
    {
      title: 'Neat Tree',
    },
    {
      title: 'Neat Cock',
    },
    {
      title: 'Neat Balls',
    },
    {
      title: 'Neat Boobs',
    },
  ];

}

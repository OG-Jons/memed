import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Post } from "../types/post";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  id: number | undefined;

  post: Post | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.params.subscribe(async (params) => {
      this.id = Number(params['id']);
      await this.ngOnInit();
    })
  }

  async ngOnInit(): Promise<void> {
    if (this.validateId() || !this.id) {
      return await this.notFound()
    }

    // Get post from backend, but this is not implemented yet, so just fill with random values
    this.post = {
      id: this.id,
      title: 'Cum Sock',
      imageURL: 'https://wallpaperaccess.com/full/428267.gif',
      loveIts: 5,
      createdAt: new Date(),
      userID: 1
    }
  }


  validateId(): boolean {
    return !this.id || isNaN(this.id)
  }


  async notFound(): Promise<void> {
    await this.router.navigate(['/not-found']);
  }

}

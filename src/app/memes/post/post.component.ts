import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Post } from "../../types/post";
import { ApiService } from "../../services/api.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  id: string | undefined;

  post: Post | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService
  ) {
    this.route.params.subscribe(async (params) => {
      this.id = params['id'];
      await this.ngOnInit();
    })
  }

  async ngOnInit(): Promise<void> {
    if (!this.id) {
      return await this.notFound()
    }

    // Get post from backend, but this is not implemented yet, so just fill with random values
    this.apiService.get(`/meme/${this.id}/`).subscribe((data) => {
      this.post = {
        ...data.body,
        createdAtDate: new Date(data.body.createdAt * 1000)
      };
    }, () => {
      this.notFound();
    })
  }

  async notFound(): Promise<void> {
    await this.router.navigate(['/not-found']);
  }

}

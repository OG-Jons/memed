import { Component } from '@angular/core';
import {Post} from "../../types/post";
import {ActivatedRoute, Router} from "@angular/router";
import {ApiService} from "../../services/api.service";

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent {

  id: string | undefined;

  post: Post | undefined;

  newTitle: string = '';

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

    this.apiService.get(`/meme/${this.id}/`).subscribe((data) => {
      this.newTitle = data.body.title;
    })
  }

  async notFound(): Promise<void> {
    await this.router.navigate(['/not-found']);
  }

  goBack() {
    this.router.navigate(['/post', this.id])
  }


  updatePost() {
    this.apiService.put(`/meme/${this.id}/`, {title: this.newTitle}).subscribe(() => {
      this.router.navigate(['/'])
    }, () => {
      this.notFound();
    })
  }


}

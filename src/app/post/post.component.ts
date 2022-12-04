import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  id: number | undefined;

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
    if (this.validateId()) {
      await this.notFound()
    }

    // Get post from backend
  }


  validateId(): boolean {
    return !this.id || isNaN(this.id)
  }


  async notFound(): Promise<void> {
    await this.router.navigate(['/not-found']);
  }

}

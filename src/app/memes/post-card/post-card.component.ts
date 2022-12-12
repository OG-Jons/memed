import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Clipboard } from "@angular/cdk/clipboard";
import { Post } from "../../types/post";
import { MatSnackBar } from "@angular/material/snack-bar";
import { UserService } from "../../services/user.service";
import { ApiService } from "../../services/api.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent {


  shrunk = false;

  constructor(
    private clipboard: Clipboard,
    private _snackbar: MatSnackBar,
    public userService: UserService,
    private apiService: ApiService,
    private router: Router) {
  }


  @Input() post: Post | undefined;

  @Output() deleteEvent = new EventEmitter<string>();


  /*  likePost(postID: number | undefined): void {
      console.log(`Liking post ${postID}`)
    }*/

  imageURL(): string {
    if (this.post?.image) {
      return `http://localhost:8080/meme${this.post?.image}`
    } else return ''
  }

  userPost(): boolean {
    if (this.post?.creator?.id === this.userService.getUserID()) {
      return true;
    } else return false;
  }


  deletePost(postID: string | undefined): void {
    if (this.userService.isAdmin()) {
      this.apiService.delete(`/meme/${postID}/`).subscribe(() => {
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate(['/']);
      })
    }
  }

  copyLink(): void {
    this._snackbar.open('Copied link to clipboard', 'Close', {
      duration: 2000,
    });
    this.clipboard.copy(`${window.location.protocol}${window.location.host}/post/${this.post?.id}`)
  }

}

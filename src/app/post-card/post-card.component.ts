import { Component, Input } from '@angular/core';
import { Clipboard } from "@angular/cdk/clipboard";
import { Post } from "../types/post";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent {

  constructor(private clipboard: Clipboard, private _snackbar: MatSnackBar) {}

  @Input() post: Post | undefined;


/*  likePost(postID: number | undefined): void {
    console.log(`Liking post ${postID}`)
  }*/


  deletePost(postID: number | undefined): void {
    console.log(`Deleting post ${postID}`)
  }

  copyLink(): void {
    this._snackbar.open('Copied link to clipboard', 'Close', {
      duration: 2000,
    });
    this.clipboard.copy(`${window.location.protocol}${window.location.host}/post/${this.post?.id}`)
  }

}

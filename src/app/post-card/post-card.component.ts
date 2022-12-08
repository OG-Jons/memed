import { Component, Input } from '@angular/core';
import { Clipboard } from "@angular/cdk/clipboard";
import { Post } from "../types/post";

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent {

  constructor(private clipboard: Clipboard) {
  }

  @Input() post: Post | undefined;



  likePost(postID: number | undefined): void {
    console.log(`Liking post ${postID}`)
  }

  copyLink(): void {
    this.clipboard.copy(`${window.location.protocol}${window.location.host}/post/${this.post?.id}`)
  }

}

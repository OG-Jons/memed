import { Component } from '@angular/core';
import { NgxFileDropEntry } from "ngx-file-drop";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent {

  files: NgxFileDropEntry[] = [];

  fileUrls: any[] = [];

  newPosts: { title: string, file: any }[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }


  async loadFiles(files: NgxFileDropEntry[]) {
    this.files = files;

    for (const droppedFile of files) {
      const reader = new FileReader();
      const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
      fileEntry.file((file: File) => {
        reader.readAsDataURL(file);
        reader.onload = () => {
          this.newPosts.push({ title: droppedFile.relativePath, file: reader.result });
        }
      });
    }
  }

  resetImages() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['./'], { relativeTo: this.route });
  }



}

import { Component } from '@angular/core';
import { NgxFileDropEntry } from "ngx-file-drop";
import { ActivatedRoute, Router } from "@angular/router";
import { ApiService } from "../../services/api.service";

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent {

  files: NgxFileDropEntry[] = [];

  fileUrls: any[] = [];

  newPosts: { title: string, file: File, dataURL: string }[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private apiService: ApiService
  ) { }


  async loadFiles(files: NgxFileDropEntry[]) {
    this.files = files;

    for (const droppedFile of files) {
      const reader = new FileReader();
      const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
      fileEntry.file((file: File) => {
        reader.readAsDataURL(file);
        reader.onload = () => {
          this.newPosts.push({ title: droppedFile.relativePath, dataURL: reader.result as string, file });
        }
      });
    }
  }

  async uploadImages() {
  //   Loop through the newPosts array and upload each image to the backend. the image file should be sent Multipart file
  //   and the title should be sent as a form field.
  //   After all images are uploaded, redirect the user to the home page.
    for (const post of this.newPosts) {
      const formData = new FormData();
      formData.append('title', post.title);
      formData.append('meme', post.file);

      this.apiService.post('/meme/', formData).subscribe((data) => {
        console.log(data);
      })

    }
    this.router.navigate(['/']);
  }

  resetImages() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['./'], { relativeTo: this.route });
  }



}

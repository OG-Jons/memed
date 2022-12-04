import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {NewPostComponent} from "./new-post/new-post.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {PostComponent} from "./post/post.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'new',
    component: NewPostComponent
  },
  {
    path: 'post/:id',
    component: PostComponent
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

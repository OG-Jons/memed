import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { NewPostComponent } from "./memes/new-post/new-post.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { PostComponent } from "./memes/post/post.component";
import { LoginComponent } from "./login/login.component";
import { AuthGuard } from "./guards/auth.guard";
import {EditPostComponent} from "./memes/edit-post/edit-post.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'auth',
    component: LoginComponent
  },
  {
    path: 'new',
    component: NewPostComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'post/edit/:id',
    component: EditPostComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'post/:id',
    component: PostComponent,
    canActivate: [AuthGuard]
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

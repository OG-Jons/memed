import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from "@angular/material/icon";
import { TitleComponent } from './title/title.component';
import { LayoutModule } from '@angular/cdk/layout';
import { NewPostComponent } from './memes/new-post/new-post.component';
import { PostComponent } from './memes/post/post.component';
import { HomeComponent } from './home/home.component';
import { PostCardComponent } from './memes/post-card/post-card.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { HttpErrorHandlingInterceptor } from "./interceptors/http-error-handling.interceptor";
import { MaterialModule } from "../material.module";
import { AuthComponent } from './auth/auth.component';
import { FileDropComponent } from './memes/new-post/file-drop/file-drop.component';
import { NgxFileDropModule } from "ngx-file-drop";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HealthCheckComponent } from './health-check/health-check.component';
import { LoginComponent } from './login/login.component';
import { JwtModule } from "@auth0/angular-jwt";
import { AuthGuard } from "./guards/auth.guard";
import { EditPostComponent } from './memes/edit-post/edit-post.component';

export function tokenGetter() {
  return localStorage.getItem("token")
}

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    NewPostComponent,
    PostComponent,
    HomeComponent,
    PostCardComponent,
    NotFoundComponent,
    AuthComponent,
    FileDropComponent,
    HealthCheckComponent,
    LoginComponent,
    EditPostComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["localhost:8080"],
        disallowedRoutes: [
          "http://localhost:8080/user/auth/register",
          "http://localhost:8080/user/auth/login",
          /http:\/\/localhost:8080\/user\/auth\/check\/.*/
        ]
      },
    }),
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatIconModule,
    MaterialModule,
    NgxFileDropModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorHandlingInterceptor,
      multi: true
    },
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

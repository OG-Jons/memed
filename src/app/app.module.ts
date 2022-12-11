import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from "@angular/material/icon";
import { TitleComponent } from './title/title.component';
import { LayoutModule } from '@angular/cdk/layout';
import { NewPostComponent } from './new-post/new-post.component';
import { PostComponent } from './post/post.component';
import { HomeComponent } from './home/home.component';
import { PostCardComponent } from './post-card/post-card.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { HttpErrorHandlingInterceptor } from "./interceptors/http-error-handling.interceptor";
import { MaterialModule } from "../material.module";
import { AuthComponent } from './auth/auth.component';
import { FileDropComponent } from './new-post/file-drop/file-drop.component';
import { NgxFileDropModule } from "ngx-file-drop";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HealthCheckComponent } from './health-check/health-check.component';
import { LoginComponent } from './login/login.component';

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
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
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
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

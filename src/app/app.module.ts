import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PublicComponent } from './public/public.component';
import { NavComponent } from './nav/nav.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { ProfileComponent } from './profile/profile.component';
import { MembershipComponent } from './membership/membership.component';
import { ToastrModule } from 'ngx-toastr';
import { CourseComponent } from './public/course/course.component';
import { CommentComponent } from './comment/comment.component';


@NgModule({
  declarations: [
    AppComponent,
    PublicComponent,
    NavComponent,
    CourseDetailComponent,
    ProfileComponent,
    MembershipComponent,
    CourseComponent,
    CommentComponent
  ],
  imports: [
    ToastrModule.forRoot(),
    BrowserModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

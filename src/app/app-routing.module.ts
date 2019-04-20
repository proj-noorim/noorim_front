import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicComponent } from './public/public.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { ProfileComponent } from './profile/profile.component';
import { MembershipComponent } from './membership/membership.component';

const routes: Routes = [
  { path: '', redirectTo: '/public', pathMatch: 'full' },
  { path: 'public', component: PublicComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'membership', component: MembershipComponent },
  { path: 'course/:id', component: CourseDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

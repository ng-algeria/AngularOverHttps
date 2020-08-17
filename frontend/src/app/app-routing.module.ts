import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { ExperiencesComponent } from './experiences/experiences.component';


export const routes: Routes = [
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'signin',
    component: SigninComponent
  },

  {
    path: 'home',
    component: HomeComponent
  },

  {
    path: 'experiences',
    component: ExperiencesComponent
  },
  

  {
    path: '**',
    redirectTo: '/experiences',
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: '/experiences',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

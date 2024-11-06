import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { LoginComponent } from './features/account/login/login.component';
import { CreateAccountComponent } from './features/account/create-account/create-account.component';
import { CreateAccountEnterpriseComponent } from './features/account/create-account-enterprise/create-account-enterprise.component';
import { ContactTeamComponent } from './features/contact/contact-team/contact-team.component';
import { AboutComponent } from './features/about/about.component';
import { BlogComponent } from './features/blog/blog.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'create-account', component: CreateAccountComponent },
  { path: 'about-us', component: AboutComponent },
  { path: 'create-account-enterprise', component: CreateAccountEnterpriseComponent },
  { path: 'blog', component: BlogComponent},
  { path: 'contact-team', component: ContactTeamComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirecionar para 'home'
  { path: '**', redirectTo: '/home' }
];

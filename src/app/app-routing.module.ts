import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/Header/header.component';

@NgModule({
  imports: [
      BrowserModule,
      RouterModule.forRoot(routes),
      FormsModule
  ],
  declarations: [
  ],
  bootstrap: []
})
export class AppRoutingModule { }

import { Component } from '@angular/core';
import { FooterComponent } from '../../shared/components/Footer/footer.component';
import { HeaderComponent } from '../../shared/components/Header/header.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  imports: [ RouterLink, RouterLinkActive, ],
  standalone: true
})
export class HomeComponent {

  constructor() {

  }
}


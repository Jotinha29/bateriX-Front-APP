// header.component.ts
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-header',
  imports:[ RouterLink, RouterLinkActive,],
  standalone: true,
  templateUrl: './header.component.html'
})
export class HeaderComponent {


}

import { Component } from '@angular/core';
import { HomeComponent } from "./home/home.component";
import { Router, RouterOutlet } from '@angular/router';
import { FooterComponent } from "./footer/footer.component";
import { SidebarComponent } from "./sidebar/sidebar.component";

@Component({
  selector: 'app-layout',
  imports: [HomeComponent, RouterOutlet, SidebarComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
    constructor(public router: Router) {}

  //   isGalleryRoute(): boolean {
  //   return this.router.url.includes('/gallery');
  // }
}

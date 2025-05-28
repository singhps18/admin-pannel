import { Component, signal } from '@angular/core';
import { MatModule } from '../../../../matmodule';

 export type menuitem ={
  icon:string;
  label:string;
  routes:string
 }

@Component({
  selector: 'app-sidebar',
  imports: [MatModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

menuItem = signal<menuitem[]>([
  {
    icon: 'dashboard',
    label: 'Dashboard',
    routes: 'dashboard'
  },
  {
    icon: 'photo_library',
    label: 'Gallery',
    routes: 'gallery'
  },
  {
    icon: 'shopping_cart',
    label: 'E-Cart',
    routes: 'ecart'
  },
  {
    icon: 'people',
    label: 'Users',
    routes: 'users'
  },
  {
    icon: 'settings',
    label: 'Settings',
    routes: 'settings'
  },
  {
    icon: 'bar_chart',
    label: 'Analytics',
    routes: 'analytics'
  },
  {
    icon: 'notifications',
    label: 'Notifications',
    routes: 'notifications'
  },
  {
    icon: 'help',
    label: 'Help',
    routes: 'help'
  }
]);

}

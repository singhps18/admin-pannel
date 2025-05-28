import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GalleryComponent } from './gallery/gallery.component';
import { UserFormComponent } from './user-form/user-form.component';

export const routes: Routes = [
    {path:"",redirectTo:"dashboard",pathMatch:"full"},
    {path:'dashboard',component:DashboardComponent},
    {
        path:'gallery',component:GalleryComponent
    },
    {
        path:'users', component:UserFormComponent
    }
];

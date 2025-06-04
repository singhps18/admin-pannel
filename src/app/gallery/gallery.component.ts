import { Component, TemplateRef, ViewChild } from '@angular/core';
import { MatModule } from '../../../matmodule';
import { Router } from '@angular/router';
import { ApiserviceService } from '../apiservice.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-gallery',
  
  imports: [MatModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
drinks:any

constructor(private router: Router, private object:ApiserviceService, private dialog: MatDialog) {}
selectedItem: any;
@ViewChild('openclose') openclose!:TemplateRef<any>
dialogRef!: MatDialogRef<any>;

  ngOnInit() {
   this.drinks=  this.object.getDrinks();
  }


  onclick(item: any) {
      this.selectedItem = item;
    this.dialog.open(this.openclose, {
      width: '100%',
      height: '100vh',
      panelClass: 'full-screen-modal'
    });
  }
    closeDialog() {
    if (this.dialog) {
      this.dialog.closeAll();
    this.selectedItem = null;
    }
  }
 

}

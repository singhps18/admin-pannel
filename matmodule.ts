import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatMenuModule } from "@angular/material/menu";
import { MatPaginator, MatPaginatorModule } from "@angular/material/paginator";
import { MatSelectModule } from "@angular/material/select";
import { MatTableModule } from "@angular/material/table";
import { MatTooltipModule } from "@angular/material/tooltip";
import { RouterModule } from "@angular/router";
import { LayoutModule } from "@angular/cdk/layout";
import { MatBadgeModule } from "@angular/material/badge";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import {
  MatNativeDateModule,
  MatOption,
  MatOptionModule,
} from "@angular/material/core";
import { MatDialogModule } from "@angular/material/dialog";
import { MatDividerModule } from "@angular/material/divider";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatListModule } from "@angular/material/list";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatRadioModule } from "@angular/material/radio";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatSortModule } from "@angular/material/sort";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCheckboxModule } from "@angular/material/checkbox";
// import { FileUploadModule } from "@iplab/ngx-file-upload";
import { MatTabsModule } from "@angular/material/tabs";
// import { StepperComponent } from "./app/common/stepper/stepper.component";
// import { ReusableTableComponent } from "./app/common/reusable-table/reusable-table.component";

const materialcomponent = [
  CommonModule,
  MatCardModule,
  MatIconModule,
  MatTableModule,
  MatPaginator,
  MatPaginatorModule,
  MatMenuModule,
  MatInputModule,
  MatSelectModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatTooltipModule,
  RouterModule,
  MatSnackBarModule,
  MatSlideToggleModule,
  LayoutModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatButtonToggleModule,
  MatBadgeModule,
  MatProgressSpinnerModule,
  MatDividerModule,
  MatExpansionModule,
  MatRadioModule,
  ReactiveFormsModule,
  MatSortModule,
  MatNativeDateModule,
  MatCheckboxModule,
  MatOption,
  // FileUploadModule,
  MatTabsModule,
  MatButtonModule,
  // StepperComponent,
  FormsModule,
  MatDialogModule,
  // ReusableTableComponent,
  MatOptionModule,
];

@NgModule({
  declarations: [],
  imports: [materialcomponent],
  exports: [materialcomponent],
})
export class MatModule {}

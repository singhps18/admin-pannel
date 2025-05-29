import { CommonModule } from "@angular/common";
import { MatTableDataSource, MatTableModule } from "@angular/material/table";
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from "@angular/material/menu";
import { MatPaginator } from "@angular/material/paginator";
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";
import {
  MatCheckboxChange,
  MatCheckboxModule,
} from "@angular/material/checkbox";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";

@Component({
  selector: 'app-reuseable-table',
  templateUrl: './reuseable-table.component.html',
  styleUrl: './reuseable-table.component.scss'
  standalone: true,
  animations: [
    trigger("detailExpand", [
      state("collapsed", style({ height: "0px", minHeight: "0" })),
      state("void", style({ height: "0px", minHeight: "0" })), // Explicit void state
      state("expanded", style({ height: "*" })),
      transition(
        "expanded <=> collapsed",
        animate("225ms cubic-bezier(0.4, 0.0, 0.2, 1)")
      ),
      transition(
        "void => expanded",
        animate("225ms cubic-bezier(0.4, 0.0, 0.2, 1)")
      ),
    ]),
  ],

  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatPaginator,
    ReactiveFormsModule,
    MatInputModule,
    MatCheckboxModule,
    FormsModule,
  ],
})
export class ReusableTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @Input() dataSource!: MatTableDataSource<any>; // Data for the table
  @Input() dynamicColumns: string[] = []; // Dynamic column names
  @Input() actions: string[] = []; // Actions for the Action column
  @Input() actionHandler!: (action: string, element: any) => void; // Function to handle action clicks
  @Input() actionDotHandler!: (element: any) => void; // Function to handle action clicks

  @Output() actionSelectAllHandler: EventEmitter<boolean> = new EventEmitter();
  @Output() actionSelectSingleHandler: EventEmitter<any> = new EventEmitter();

  @Input() isLoading?: boolean; // Will Get From Parent
  @Input() isExpandable?: boolean; // Will Get From Parent
  @Input() isCheckbox?: boolean;

  @Input() showActions?: boolean = true;

  @Input() attachmentColumnName: string = "";
  @Input() attachment: boolean = false;
  @Input() attachmentData: any[] = [];

  @Input() secondAttachmentColumnName: string = "";
  @Input() secondAttachment: boolean = false;
  @Input() secondAttachmentData: any[] = [];

  @Input() totalCount: number = 0; // Total count of items
  @Input() globalPageSize: number = 10; // Default page size
  @Input() pageSizeOptions: number[] = [5, 10, 20, 25, 30, 35, 40, 45, 50]; // Options for page size

  @Output() pageChange = new EventEmitter<any>();
  @Output() expandedElementChange = new EventEmitter<any>();

  @Input() expandedTemplate: any;

  columnsToDisplay: string[] = []; // Columns including index and actions
  columnsToDisplayWithExpand: string[] = [...this.columnsToDisplay, "expand"];
  expandedElement: any | null = null;

  ngOnInit() {
    this.updateColumnsToDisplay();
    this.dataSource.paginator = this.paginator;
  }

  ngOnChanges(changes: SimpleChanges) {
    // Update paginator and columns when inputs change
    if (changes["dynamicColumns"] || changes["actions"]) {
      this.updateColumnsToDisplay();
    }

    if (this.paginator) {
      this.paginator.length = this.totalCount; // Update total items count
      this.paginator.pageSize = this.globalPageSize; // Update page size
      this.dataSource.paginator = this.paginator; // Reassign the paginator to the dataSource
    }
  }

  private updateColumnsToDisplay(): void {
    if (this.isExpandable) {
      this.columnsToDisplay = [
        "isExpand", // Expandable column
        "index", // Index column
        ...this.dynamicColumns, // Dynamic columns
        "action", // Action column
      ];
      return;
    }

    if (this.isCheckbox) {
      this.columnsToDisplay = [
        "select",
        "index", // Index column
        ...this.dynamicColumns, // Dynamic columns
        "action", // Action column
      ];
      return;
    }

    if (this.attachment) {
      this.columnsToDisplay = [
        "index", // Index column
        ...this.dynamicColumns, // Dynamic columns
        "attachedFile", // Ensure attachedFile column is included
        ...(this.secondAttachment ? ["secondAttachedFile"] : []),
        ...(this.showActions ? ["action"] : []),
      ];
      return;
    }

    // Default configurations
    this.columnsToDisplay = [
      "index", // Index column
      ...this.dynamicColumns, // Dynamic columns
      ...(this.showActions ? ["action"] : []),
    ];
  }

  // Method to call when an action button is clicked
  onActionClick(action: string, element: any) {
    // console.log("Button clicked:", action, element);
    if (this.actionHandler) {
      
      this.actionHandler(action, element); // Call parent handler
    }
  }

  dotHandler(element: any) {
    // console.log("Dots Clicked", element);
    if (this.actionDotHandler) {
      this.actionDotHandler(element);
    }
  }

  // Toggle select all or deselect all rows

  selectedIds: Set<any> = new Set(); // Set to track selected row IDs

  // Toggle select all or deselect all rows
  toggleSelectAll(event: MatCheckboxChange): void {
    const isChecked = event.checked;
    let tableData = this.dataSource as any;

    // Select or deselect all rows
    if (Array.isArray(tableData)) {
      tableData.forEach((row: any) => {
        row.selected = isChecked;
        if (isChecked) {
          this.selectedIds.add(row.id); // Add to selected if checked
        } else {
          this.selectedIds.clear(); // Clear selection if unchecked
        }
      });
    } else {
    }

    this.dataSource = tableData;


    // Emit the change event for select all
    this.actionSelectAllHandler.emit(isChecked);
  }

  // Check if all rows are selected
  isAllSelected(): boolean {
    return (
      !!this.dataSource?.data?.length &&
      this.dataSource.data.every((row) => row.selected === true)
    );
  }

  // Check if any row is deselected
  isAnyRowDeselected(): boolean {
    return this.dataSource?.data?.some((row) => row.selected === false);
  }

  // Handle individual row selection
  onSelectionChange(row: any): void {
    // Emit the row data for individual selection
    this.actionSelectSingleHandler.emit(row);

    if (row.selected) {
      this.selectedIds.add(row.id); // Add to selected
    } else {
      this.selectedIds.delete(row.id); // Remove from selected
    }

    // Check if any row is deselected and update header checkbox state
    const isAllSelected = this.isAllSelected();
    const isAnyRowDeselected = this.isAnyRowDeselected();

    if (isAnyRowDeselected && !isAllSelected) {
      this.actionSelectAllHandler.emit(false); // Uncheck "select all" checkbox
    } else if (isAllSelected) {
      this.actionSelectAllHandler.emit(true); // Check "select all" checkbox
    }
  }

  handleAttachedFile(link: string) {
    if (link) {
      window.open(link, "_blank");
    } else {;
    }
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  onPaginatorChange(event: any) {
    this.pageChange.emit(event); // Emit the pagination event
  }

  toggleExpand(element: any, event: Event): void {
    event.stopPropagation(); // Prevent row click from triggering
    this.expandedElement = this.expandedElement === element ? null : element;
    this.expandedElementChange.emit(this.expandedElement); // Emit expanded element
  }
}

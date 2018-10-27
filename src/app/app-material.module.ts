import {NgModule} from '@angular/core';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatGridListModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatTableModule,
  MatToolbarModule,
  MatSnackBarModule, MatSidenavModule
} from '@angular/material';

import {MatIconModule} from '@angular/material/icon';

@NgModule({
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDialogModule,
    MatInputModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatListModule,
    MatPaginatorModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatAutocompleteModule,
    MatSnackBarModule,
    MatSidenavModule
  ],
})
export class AppMaterialModule {
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Módulos
import { ReactiveFormsModule } from '@angular/forms'; // Para utilizar Reactive Forms
import { HttpClientModule } from '@angular/common/http';

// Traigo aquí todos los módulos que importo para que no ocupe tanto en app.module.ts
// Angular Material
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field'; // Este va de la mano con "Input", así que lo pongo abajo
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatGridListModule } from '@angular/material/grid-list';

// Componentes
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  declarations: [
    SpinnerComponent
  ],
  // Aquí vienen los módulos
  imports: [
    CommonModule,
    MatSlideToggleModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatTooltipModule,
    MatButtonModule,
    MatCardModule,
    MatSnackBarModule,
    MatProgressBarModule,
    MatGridListModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  // Ahora también los exporto para poder utilizarlos en app.module.ts
  exports: [
    CommonModule,
    MatSlideToggleModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatTooltipModule,
    MatButtonModule,
    MatCardModule,
    MatSnackBarModule,
    SpinnerComponent,
    MatProgressBarModule,
    MatGridListModule,
    ReactiveFormsModule,
    HttpClientModule
    ]
})
export class SharedModule { }

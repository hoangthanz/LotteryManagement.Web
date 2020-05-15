import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BaseComponentService } from './base-component.service';
@NgModule({
  declarations: [ConfirmDialogComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDividerModule,
    MatDialogModule,
    MatIconModule,
    MatTooltipModule
  ],
  exports: [
  ],
  providers: [
    BaseComponentService
  ],
})
export class UiModule { }

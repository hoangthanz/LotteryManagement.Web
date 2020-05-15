import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'lottery-workspace-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {

  public message = '';
  public subMessage = null;
  public matTooltip = '';
  public matTooltipPosition = 'below';
  public colorAccess = 'primary';
  public colorCancel = 'warn';
  constructor(
    @Inject(MAT_DIALOG_DATA) private messageBlock: any,
    private dialogRef: MatDialogRef<ConfirmDialogComponent>,
    public dialog: MatDialog,
  ) {
    this.initializeMessages();
  }

  ngOnInit() {
  }


  initializeMessages() {
    this.message = this.messageBlock.message;
    this.matTooltip = this.messageBlock.matTooltip;
    this.matTooltipPosition = this.messageBlock.matTooltipPosition;
    this.colorAccess = this.messageBlock.colorOK;
    this.colorCancel = this.messageBlock.colorCancel;
    this.subMessage = this.messageBlock?.subMessage;
  }
}

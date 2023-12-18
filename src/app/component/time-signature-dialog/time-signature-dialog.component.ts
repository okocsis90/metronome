import { Component } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-time-signature-dialog',
  templateUrl: './time-signature-dialog.component.html',
  styleUrls: ['./time-signature-dialog.component.css']
})
export class TimeSignatureDialogComponent {

  beatsInput: number = 0;
  noteValueInput: number = 0;

  beatsOptions: number[] = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  noteValuesOptions: number[] = [2, 4, 8, 16];

  constructor(public dialogRef: MatDialogRef<TimeSignatureDialogComponent>) {}

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onAddClick(): void {
    if (this.isValidTimeSignatureInput()) {
      this.dialogRef.close({ beats: this.beatsInput, noteValue: this.noteValueInput });
    }
  }

  isValidTimeSignatureInput(): boolean {
    return (
      this.beatsInput !== null && !isNaN(this.beatsInput) && this.beatsInput > 1 && this.beatsInput <= 16 &&
      this.noteValueInput !== null && !isNaN(this.noteValueInput) && this.noteValuesOptions.includes(this.noteValueInput)
    );
  }
}

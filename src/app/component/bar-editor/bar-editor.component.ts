import {Component, OnDestroy} from '@angular/core';
import {Bar} from "../../model/bar";
import {Subscription} from "rxjs";
import {BarTrackerService} from "../../service/bar-tracker.service";
import {TimeSignatureDialogComponent} from "../time-signature-dialog/time-signature-dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-bar-editor',
  templateUrl: './bar-editor.component.html',
  styleUrls: ['./bar-editor.component.css']
})
export class BarEditorComponent implements OnDestroy {

  bars: Bar[] = [];
  private barsSubscription: Subscription;

  constructor(private barTrackerService: BarTrackerService, public dialog: MatDialog) {
    this.barsSubscription = this.barTrackerService.getBarsObservable().subscribe((bars) => {
      this.bars = bars;
    });
  }

  openTimeSignatureDialog(): void {
    const dialogRef = this.dialog.open(TimeSignatureDialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const newBar = new Bar(result.beats, result.noteValue);
        this.addBar(newBar);
      }
    });
  }

  addBar(bar: Bar): void {
    this.barTrackerService.addBar(bar);
  }

  ngOnDestroy() {
    this.barsSubscription.unsubscribe();
  }
}

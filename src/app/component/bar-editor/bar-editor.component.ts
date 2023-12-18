import {Component, OnDestroy} from '@angular/core';
import {Bar} from "../../model/bar";
import {Subscription} from "rxjs";
import {BarTrackerService} from "../../service/bar-tracker.service";

@Component({
  selector: 'app-bar-editor',
  templateUrl: './bar-editor.component.html',
  styleUrls: ['./bar-editor.component.css']
})
export class BarEditorComponent implements OnDestroy {

  bars: Bar[] = [];
  private barsSubscription: Subscription;

  constructor(private barTrackerService: BarTrackerService) {
    this.barsSubscription = this.barTrackerService.getBarsObservable().subscribe((bars) => {
      this.bars = bars;
    });
  }

  addBar() {
    this.barTrackerService.addBar(new Bar(4, 4));
  }

  ngOnDestroy() {
    this.barsSubscription.unsubscribe();
  }
}

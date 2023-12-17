import { Component } from '@angular/core';
import {Bar} from "../../model/bar";
import {Subscription} from "rxjs";
import {BarTrackerService} from "../../service/bar-tracker.service";

@Component({
  selector: 'app-bar-editor',
  templateUrl: './bar-editor.component.html',
  styleUrls: ['./bar-editor.component.css']
})
export class BarEditorComponent {

  bars: Bar[] = [];
  barsSubscription: Subscription;

  constructor(private barTrackerService: BarTrackerService) {
    this.barsSubscription = this.barTrackerService.getBarObservable().subscribe((bars) => {
      this.bars = bars;
    });
  }

  ngOnDestroy() {
    this.barsSubscription.unsubscribe();
  }

  addBar() {
    this.barTrackerService.addBar(new Bar(4, 4));
  }
}

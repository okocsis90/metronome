import {Component, OnDestroy} from '@angular/core';
import {MetronomeService} from "../../service/metronome.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-bpm-display',
  templateUrl: './bpm-display.component.html',
  styleUrls: ['./bpm-display.component.css']
})
export class BpmDisplayComponent implements OnDestroy {

  bpm: number;
  private bpmSubscription: Subscription;

  constructor(private metronomeService: MetronomeService) {
    this.bpm = this.metronomeService.getBpm();
    this.bpmSubscription = this.metronomeService.getBpmObservable().subscribe((bpm) => {
      this.bpm = bpm;
    });
  }

  ngOnDestroy() {
    this.bpmSubscription.unsubscribe();
  }

}

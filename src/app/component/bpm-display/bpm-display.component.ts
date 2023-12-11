import {Component} from '@angular/core';
import {MetronomeService} from "../../service/metronome.service";

@Component({
  selector: 'app-bpm-display',
  templateUrl: './bpm-display.component.html',
  styleUrls: ['./bpm-display.component.css']
})
export class BpmDisplayComponent {

  bpm: number;

  constructor(metronomeService: MetronomeService) {
    this.bpm = metronomeService.getBpm();
  }

}

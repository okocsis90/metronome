import {Component} from '@angular/core';
import {MetronomeService} from "./service/metronome.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'metronome';

  constructor(private metronomeService: MetronomeService) {
  }

  startMetronome() {
    this.metronomeService.start();
  }

  stopMetronome() {
    this.metronomeService.stop();
  }
}

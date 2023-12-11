import {Component} from '@angular/core';
import {MetronomeService} from "../../service/metronome.service";

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css']
})
export class ControlPanelComponent {

  constructor(private metronomeService: MetronomeService) {
  }

  startMetronome() {
    this.metronomeService.start();
  }

  stopMetronome() {
    this.metronomeService.stop();
  }

  increaseTempo() {
    this.metronomeService.increaseTempo();
  }

  decreaseTempo() {
    this.metronomeService.decreaseTempo();
  }
}

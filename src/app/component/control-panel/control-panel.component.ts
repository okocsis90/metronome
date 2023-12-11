import {Component, Output, EventEmitter} from '@angular/core';
import {MetronomeService} from "../../service/metronome.service";

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css']
})
export class ControlPanelComponent {

  constructor(private metronomeService: MetronomeService) {
  }

  @Output() playClicked = new EventEmitter<void>();
  @Output() stopClicked = new EventEmitter<void>();

  startMetronome() {
    this.playClicked.emit();
  }

  stopMetronome() {
    this.stopClicked.emit();
  }

  getBpm(): number {
    return this.metronomeService.getBpm();
  }

}

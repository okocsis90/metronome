import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-bpm-display',
  templateUrl: './bpm-display.component.html',
  styleUrls: ['./bpm-display.component.css']
})
export class BpmDisplayComponent {
  @Input() bpm: number = 60;
}

import { Injectable } from '@angular/core';
import {AudioService} from "./audio.service";

@Injectable({
  providedIn: 'root',
})
export class MetronomeService {
  private interval: any;
  private bpm: number = 60;

  constructor(private audioService: AudioService) {
  }

  start() {
    const msPerBeat = 60000 / this.bpm;

    this.interval = setInterval(() => {
      this.audioService.playTick();
    }, msPerBeat);
  }

  stop() {
    clearInterval(this.interval);
  }

  setBpm(bpm: number) {
    this.bpm = bpm;
  }

  getBpm(): number {
    return this.bpm;
  }

  increaseTempo() {
    this.stop();
    this.bpm++;
    this.start();
  }

  decreaseTempo() {
    this.stop();
    this.bpm--;
    this.start();
  }
}

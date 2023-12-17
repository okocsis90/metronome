import { Injectable } from '@angular/core';
import {AudioService} from "./audio.service";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class MetronomeService {
  private interval: any;
  private bpmSubject: BehaviorSubject<number>;
  public bpm$: Observable<number>;

  constructor(private audioService: AudioService) {
    this.bpmSubject = new BehaviorSubject<number>(60);
    this.bpm$ = this.bpmSubject.asObservable();
  }

  start() {
    const msPerBeat = 60000 / this.bpmSubject.value;

    this.interval = setInterval(() => {
      this.audioService.playTick();
    }, msPerBeat);
  }

  stop() {
    clearInterval(this.interval);
  }

  setBpm(bpm: number) {
    this.bpmSubject.next(bpm);
    this.stop();
    this.start();
  }

  getBpm(): number {
    return this.bpmSubject.value;
  }

  increaseTempo() {
    const newBpm = this.getBpm() + 1;
    this.setBpm(newBpm);
  }

  decreaseTempo() {
    const newBpm = this.getBpm() - 1;
    this.setBpm(newBpm);
  }
}

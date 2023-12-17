import { Injectable } from '@angular/core';
import {AudioService} from "./audio.service";
import {BehaviorSubject, Observable, Subscription} from "rxjs";
import {BarTrackerService} from "./bar-tracker.service";
import {Bar} from "../model/bar";
import {Note} from "../model/note";

@Injectable({
  providedIn: 'root',
})
export class MetronomeService {
  public bpm$: Observable<number>;

  private interval: any;
  private bpmSubject: BehaviorSubject<number>;
  private barsSubscription: Subscription;
  private bars: Bar[] = [];

  constructor(private audioService: AudioService, private barTrackerService: BarTrackerService) {
    this.bpmSubject = new BehaviorSubject<number>(60);
    this.bpm$ = this.bpmSubject.asObservable();

    this.barsSubscription = this.barTrackerService.getBarObservable().subscribe((bars) => {
      this.bars = bars;
    });
  }

  start() {
    if (this.bars.length === 0) {
      return;
    }

    const msPerBeat = 60000 / this.bpmSubject.value;

    let barIndex = 0;
    let noteIndex = 0;

    this.interval = setInterval(() => {
      const currentBar = this.bars[barIndex];
      const currentNote = currentBar.notes[noteIndex];

      this.audioService.playTick(this.getFrequency(currentNote));

      noteIndex++;

      if (noteIndex >= currentBar.notes.length) {
        noteIndex = 0;

        barIndex++;

        if (barIndex >= this.bars.length) {
          barIndex = 0;
        }
      }


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

  private getFrequency(note: Note): number {
    return note.stressed ? 880 : 440;
  }

  ngOnDestroy(): void {
    this.barsSubscription.unsubscribe();
  }
}

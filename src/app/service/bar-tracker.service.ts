import { Injectable } from '@angular/core';
import {Bar} from "../model/bar";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BarTrackerService {

  private barsSubject: BehaviorSubject<Bar[]> = new BehaviorSubject<Bar[]>([]);
  private bars$: Observable<Bar[]> = this.barsSubject.asObservable();

  constructor() { }

  getBars(): Bar[] {
    return this.barsSubject.value;
  }

  getBarObservable(): Observable<Bar[]> {
    return this.bars$;
  }

  addBar(bar: Bar): void {
    const currentBars = this.getBars();
    const updatedBars = [...currentBars, bar];
    this.barsSubject.next(updatedBars);
  }
}

import {Note} from "./note";

export class Bar {

  private _beats: number;
  private _noteValue: number;
  private _notes: Note[] = [];

  constructor(beats: number, noteValue: number) {
    this._beats = beats;
    this._noteValue = noteValue;
    this.generateNotes(beats);
  }

  get beats(): number {
    return this._beats;
  }

  set beats(value: number) {
    this._beats = value;
  }

  get noteValue(): number {
    return this._noteValue;
  }

  set noteValue(value: number) {
    this._noteValue = value;
  }

  get notes(): Note[] {
    return this._notes;
  }

  set notes(value: Note[]) {
    this._notes = value;
  }

  getTimeSignature(): string {
    return `${this._beats } / ${this._noteValue}`;
  }

  private generateNotes(beats: number) {
    this._notes.push(new Note(true));
    for (let i = 1; i < beats; i++) {
      this._notes.push(new Note(false));
    }
  }
}

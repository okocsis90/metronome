export class Bar {

  private _beats: number;
  private _noteValue: number;

  constructor(beats: number, noteValue: number) {
    this._beats = beats;
    this._noteValue = noteValue;
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

  getTimeSignature(): string {
    return `${this._beats } / ${this._noteValue}`;
  }
}

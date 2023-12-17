export class Note {

  private _stressed: boolean;

  constructor(stressed: boolean) {
    this._stressed = stressed;
  }

  get stressed(): boolean {
    return this._stressed;
  }

  set stressed(value: boolean) {
    this._stressed = value;
  }
}

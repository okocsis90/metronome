import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AudioService} from "./service/audio.service";
import {MetronomeService} from "./service/metronome.service";
import {ControlPanelComponent} from './component/control-panel/control-panel.component';
import {BpmDisplayComponent} from './component/bpm-display/bpm-display.component';
import {BarEditorComponent} from './component/bar-editor/bar-editor.component';
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {TimeSignatureDialogComponent} from './component/time-signature-dialog/time-signature-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatSelectModule} from "@angular/material/select";

@NgModule({
  declarations: [
    AppComponent,
    ControlPanelComponent,
    BpmDisplayComponent,
    BarEditorComponent,
    TimeSignatureDialogComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatDialogModule,
    MatSelectModule,
  ],
  providers: [
    MetronomeService,
    AudioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

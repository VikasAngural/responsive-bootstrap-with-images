import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material';
import { MatButtonModule} from '@angular/material/button';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { MatInputModule, MatSelectModule} from '@angular/material';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    AngularFontAwesomeModule,
    MatInputModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

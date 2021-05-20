import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserAddModule } from './user-add/user-add.module';
// Import your library
import { AlertModule } from 'ngx-alerts';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    UserAddModule,
    AlertModule.forRoot({maxMessages: 5, timeout: 5000})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

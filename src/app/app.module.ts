import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import * as fromCounter from './reducers/counter.reducers';
import * as fromScoreboard from './reducers/scoreboard.reducers';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonsModule, TabsModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonsModule,
    TabsModule,
    StoreModule.forRoot({count: fromCounter.counterReducer, game: fromScoreboard.reducer}),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

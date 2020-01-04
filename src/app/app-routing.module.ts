import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyCounterComponent } from './components/my-counter/my-counter.component';
import { MyScoreboardComponent } from './components/my-scoreboard/my-scoreboard.component';

const routes: Routes = [
  {path: 'counter', component: MyCounterComponent},
  {path: 'scoreboard', component: MyScoreboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [MyCounterComponent, MyScoreboardComponent];

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyCounterComponent } from './components/my-counter/my-counter.component';
import { MyScoreboardComponent } from './components/my-scoreboard/my-scoreboard.component';
import { MyLcrComponent } from './components/my-lcr/my-lcr.component';

const routes: Routes = [
  {path: 'counter', component: MyCounterComponent},
  {path: 'scoreboard', component: MyScoreboardComponent},
  {path: 'leftRightCenter', component: MyLcrComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [MyCounterComponent, MyScoreboardComponent, MyLcrComponent];

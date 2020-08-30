import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './_components/home/home.component';
import { ResultComponent } from './_components/result/result.component';
import { FindFalconComponent } from './_components/find-falcon/find-falcon.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'result', component: ResultComponent },
  { path: 'find-falcon', component: FindFalconComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

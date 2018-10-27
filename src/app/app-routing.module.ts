import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {DialogComponent} from './components/dialog/dialog.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: '', component: DialogComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

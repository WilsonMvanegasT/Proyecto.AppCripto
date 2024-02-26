import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BatatabitComponent } from './batatabit/batatabit.component';

const routes: Routes = [
  {path: '', component: BatatabitComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}

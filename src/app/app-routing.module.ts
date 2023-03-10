import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RandomUserComponent } from './random-user/random-user.component';

const routes: Routes = [
{
  path:'',redirectTo:'/random/user',pathMatch:'full'
},
{
  path:'random/user',component:RandomUserComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MembersComponent } from './members/members.component';
import { ProductComponent } from './product/product.component';
import { DefaultComponent } from './default/default.component';
const routes: Routes = [
  { path: 'default', component: DefaultComponent },
  { path: 'mem', component: MembersComponent },
  { path: 'pro', component: ProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

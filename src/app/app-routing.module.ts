import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from './admin/admin.component';
const routes: Routes = [
    {
      path: '',
      component: AdminComponent,
      children: [
       {
         path: 'ventas',
         loadChildren: './modules/ventas/ventas.module#VentasModule'
       },
       {
         path: 'clientes',
         loadChildren: './modules/clientes/clientes.module#ClientesModule'
       }
      ]
    },
    {  path: '**', redirectTo: 'ventas' },
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers:[]
  })
  export class AppRoutingModule {}
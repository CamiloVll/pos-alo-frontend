import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    // configuramos la ruta vacia para redireccione a una pagina en concreto
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
  {
    // configuramos la ruta que no existe para redireccione a una pagina en concreto
    path: '**',
    redirectTo: '404',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: false,
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

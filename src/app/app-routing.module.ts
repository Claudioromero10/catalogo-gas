import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './componentes/blog/blog.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ClasicoComponent } from './componentes/menu/clasico/clasico.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { VegetarianoComponent } from './componentes/menu/vegetariano/vegetariano.component';
import { RedesComponent } from './componentes/redes/redes.component';
import { SobrenosComponent } from './componentes/sobrenos/sobrenos.component';
import { SoporteComponent } from './componentes/soporte/soporte.component';

const routes: Routes = [
  {
    path:"inicio",component:InicioComponent
  },
  {
    path:"sobrenos",component:SobrenosComponent
  },
  {
    path:"menu",component:MenuComponent
  },
  {
    path:"redes",component:RedesComponent
  },
  {
    path:"soporte",component:SoporteComponent
  },
  {
    path:"clasico",component:ClasicoComponent
  },
  {
    path:"vegetariano",component:VegetarianoComponent
  },
  {
    path:"blog",component:BlogComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

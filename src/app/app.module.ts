import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentesComponent } from './componentes/componentes.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { SobrenosComponent } from './componentes/sobrenos/sobrenos.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { SoporteComponent } from './componentes/soporte/soporte.component';
import { RedesComponent } from './componentes/redes/redes.component';
import { ClasicoComponent } from './componentes/menu/clasico/clasico.component';
import { VegetarianoComponent } from './componentes/menu/vegetariano/vegetariano.component';
import { GaleriaComponent } from './componentes/galeria/galeria.component';
import { BlogComponent } from './componentes/blog/blog.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentesComponent,
    InicioComponent,
    SobrenosComponent,
    MenuComponent,
    SoporteComponent,
    RedesComponent,
    ClasicoComponent,
    VegetarianoComponent,
    GaleriaComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

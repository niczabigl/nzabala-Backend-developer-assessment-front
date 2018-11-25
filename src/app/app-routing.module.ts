import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { PolicyComponent } from './policy/policy.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
    {
        path: 'menu',
        component: MenuComponent,
    },
    {
        path: '',
        redirectTo: '/menu',
        pathMatch: 'full' 
    },
    {
        path: 'clients',
        component: ClientComponent
    },
    {
        path: 'policies',
        component: PolicyComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class RoutingModule { }
import { RouterModule, Routes } from '@angular/router';

import {
    AboutComponent,
    PortafolioComponent,
    ItemComponent
} from './components/index.paginas';

const routes: Routes = [
    { path: 'home', component: PortafolioComponent },
    { path: 'about', component: AboutComponent },
    { path: 'item', component: ItemComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const appRouting = RouterModule.forRoot(routes, { useHash: true });

import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AdvantagesComponent } from './advantages/advantages.component';
import { TeamComponent } from './team/team.component';
import { VirtualCardComponent } from './virtual-card/virtual-card.component';
import { PartnerComponent } from './partner/partner.component';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: '',
        runGuardsAndResolvers: 'always',
        children: [
            { path: 'virtualCard', component: VirtualCardComponent},
            { path: 'servizi', component: AdvantagesComponent},
            { path: 'team', component: TeamComponent},
            { path: 'partner', component: PartnerComponent},
            { path: 'contatti', component: ContactsComponent}
        ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
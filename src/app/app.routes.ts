import { Routes } from '@angular/router';
import { ControlStatementExampleComponent } from './control-statement-example/control-statement-example.component';
import { DeferrablesComponent } from './deferrables/deferrables.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
    {path:'Controlstatement',component:ControlStatementExampleComponent,title:"ControlStatement"},
    {path:'Deferrables',component:DeferrablesComponent,title:"Deferrable"},
    {path:'Register',component:RegisterComponent,title:'Register'}
];

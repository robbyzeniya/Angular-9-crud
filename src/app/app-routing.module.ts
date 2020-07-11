import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {AuthGuardService} from './service/auth-guard.service';
import {RegisterComponent} from './register/register.component';
import {RegisterCreateComponent} from './register/register-create/register-create.component';
import {RegisterUpdateComponent} from './register/register-update/register-update.component';

const routes: Routes = [
    // ini routing tiap halaman view, routingnya harus berurutan, fungsi auth guard untuk melakukan pengecekan token
    {path: '', component: DashboardComponent, canActivate: [AuthGuardService]},
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: 'register',
        component: RegisterComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: 'register/register-create',
        component: RegisterCreateComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: 'register/register-update/:id',
        component: RegisterUpdateComponent,
        canActivate: [AuthGuardService]
    },
    {path: 'login', component: LoginComponent},
    {path: '**', component: NotFoundComponent, canActivate: [AuthGuardService]},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}

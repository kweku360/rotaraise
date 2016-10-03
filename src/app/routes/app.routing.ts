
import { Routes, RouterModule } from '@angular/router';
import {ModuleWithProviders} from "@angular/core";
//AuthGuards here
import { AuthGuard } from './../services/auth-guard.service'
//we list all conponents to be routed
import { LoginComponent }  from './../pages/login/login.component';
import { LandingComponent }  from './../pages/landing/landing.component';
import { RegisterComponent }  from './../pages/register/register.component';
import { DashboardComponent }  from './../pages/dashboard/dashboard.component';
import {AuthService} from "../services/auth.service";
import {ProjectComponent} from "../pages/account/project/project.component";
import {OverviewComponent} from "../pages/account/campaign/overview/overview.component";
import {BasicComponent} from "../pages/account/campaign/basic/basic.component";



const appRoutes: Routes = [
    { path: '',component: LandingComponent},
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent},
    { path: 'dashboard', canActivate: [AuthGuard], component: DashboardComponent},
    { path: 'project', canActivate: [AuthGuard], component: ProjectComponent},
    { path: 'overview', canActivate: [AuthGuard], component: OverviewComponent},
    { path: 'basic', canActivate: [AuthGuard], component: BasicComponent}
];

export const appRoutingProviders: any[] = [
AuthGuard,AuthService
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

// { path: 'login', component: LoginComponent,
//       children : [
//         {path: 'child', component: ChildtestComponent}
//       ]
//   },
// { path: 'crisis-center', component: CrisisListComponent },
// { path: 'heroes', component: HeroListComponent }

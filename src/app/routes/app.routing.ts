
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
import {ResetpasswordComponent} from "../pages/resetpassword/resetpassword.component";
import {StoryComponent} from "../pages/story/story.component";
import {GatemanService} from "../services/gateman.service";
import {CampaigndetailComponent} from "../pages/campaigndetail/campaigndetail.component";



const appRoutes: Routes = [
    { path: '',canActivate: [GatemanService],component: LandingComponent},
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent},
    { path: 'campaign/:id', component: CampaigndetailComponent},
    { path: 'dashboard', canActivate: [AuthGuard], component: DashboardComponent},
    { path: 'project', canActivate: [AuthGuard], component: ProjectComponent},
    { path: 'myaccount/campaign/overview/:id', canActivate: [AuthGuard], component: OverviewComponent},
    { path: 'myaccount/campaign/basic/:id', canActivate: [AuthGuard], component: BasicComponent},
    { path: 'myaccount/campaign/story/:id', canActivate: [AuthGuard], component: StoryComponent},
    { path: 'passwordreset', component: ResetpasswordComponent}

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

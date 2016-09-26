import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {CampaignadComponent} from "./components/library/v1/campaignad/campaignad.component";
import {CategoryComponent} from "./components/library/v1/category/category.component";
import {DashheaderComponent} from "./components/library/v1/dashheader/dashheader.component";
import {FeaturedcampaignsComponent} from "./components/library/v1/featuredcampaigns/featuredcampaigns.component";
import {FooterComponent} from "./components/library/v1/footer/footer.component";
import {HeaderComponent} from "./components/library/v1/header/header.component";
import {LogoComponent} from "./components/library/v1/logo/logo.component";
import {SliderComponent} from "./components/library/v1/slider/slider.component";
import {LandingComponent} from "./pages/landing/landing.component";
import {RegisterComponent} from "./pages/register/register.component";
import {LoginComponent} from "./pages/login/login.component";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {ProjectComponent} from "./pages/account/project/project.component";
import {AuthService} from "./services/auth.service";
import {RouterModule} from "@angular/router";
import {LoginService} from "./services/login.service";
import {RegisterService} from "./services/register.service";
import {routing, appRoutingProviders} from "./routes/app.routing";
import {DatePickerComponent} from "ng2-datepicker/src/components/ng2-datepicker";

@NgModule({
  declarations: [
    AppComponent,
    //inner components - these components actually fill the parent/page components
    CampaignadComponent,
    CategoryComponent,
    DashheaderComponent,
    FeaturedcampaignsComponent,
    FooterComponent,
    HeaderComponent,
    LogoComponent,
    SliderComponent,

    DatePickerComponent,

    //parent components - these are routerble
    LandingComponent,
    LogoComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,

    routing,
  ],
  providers: [
    AuthService,
    LoginService,
    RegisterService,
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

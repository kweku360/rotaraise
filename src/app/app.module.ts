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
import {FileuploaderComponent} from "./components/library/v1/fileuploader/fileuploader.component";
import {CountrylistComponent} from "./components/library/v1/countrylist/countrylist.component";
import {UPLOAD_DIRECTIVES} from "ng2-uploader/ng2-uploader";
import {ProjectService} from "./services/project.service";
import { DaysleftPipe } from './pipes/daysleft.pipe';
import { PercentagepipePipe } from './pipes/percentagepipe.pipe';
import { OverviewComponent } from './pages/account/campaign/overview/overview.component';
import { ProjectsidebarComponent } from './components/library/v1/projectsidebar/projectsidebar.component';
import { BasicComponent } from './pages/account/campaign/basic/basic.component';
import { CampaignsComponent } from './pages/campaigns/campaigns.component';
import { ResetpasswordComponent } from './pages/resetpassword/resetpassword.component';
import {WindowrefService} from "./services/windowref.service";
import { CurrencyComponent } from './components/library/v1/currency/currency.component';
import { StoryComponent } from './pages/story/story.component';
import { RichtexteditorComponent } from './components/library/v1/richtexteditor/richtexteditor.component';
import {GatemanService} from "./services/gateman.service";
import { CampaigndetailComponent } from './pages/campaigndetail/campaigndetail.component';



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
    FileuploaderComponent,
    ProjectComponent,
    CountrylistComponent,

    UPLOAD_DIRECTIVES,

    DaysleftPipe,

    PercentagepipePipe,

    OverviewComponent,

    ProjectsidebarComponent,

    BasicComponent, CampaignsComponent, ResetpasswordComponent, CurrencyComponent, StoryComponent, RichtexteditorComponent, CampaigndetailComponent
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
    ProjectService,
    WindowrefService,
    GatemanService,
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

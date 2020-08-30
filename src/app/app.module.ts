import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './_components/home/home.component';
import { ResultComponent } from './_components/result/result.component';
import { FindFalconComponent } from './_components/find-falcon/find-falcon.component';
import { HeaderComponent } from './_components/header/header.component';
import { FooterComponent } from './_components/footer/footer.component';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApiService } from './_services/api.service';
import { DataService } from './_services/data.service';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { LoaderComponent } from './_components/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ResultComponent,
    FindFalconComponent,
    HeaderComponent,
    FooterComponent,
    LoaderComponent
  ],
  imports: [
    ButtonsModule.forRoot(),
    BsDropdownModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TooltipModule.forRoot()
  ],
  providers: [ApiService,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

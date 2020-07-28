import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CertificationListComponent } from './components/certification-list/certification-list.component';
import { CertificationFormComponent } from './components/certification-form/certification-form.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CertificationServiceService } from './services/certification-service.service';

@NgModule({
  declarations: [
    AppComponent,
    CertificationListComponent,
    CertificationFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule   ],
  providers: [CertificationServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

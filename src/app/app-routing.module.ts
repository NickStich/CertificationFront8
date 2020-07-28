import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CertificationListComponent } from './components/certification-list/certification-list.component';
import { CertificationFormComponent } from './components/certification-form/certification-form.component';


const routes: Routes = [
  { path: 'certifications', component: CertificationListComponent},
  { path: 'addcertification', component: CertificationFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

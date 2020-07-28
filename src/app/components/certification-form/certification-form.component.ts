import { Component, OnInit } from '@angular/core';
import { Certification } from 'src/app/model/certification';
import { CertificationServiceService } from 'src/app/services/certification-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-certification-form',
  templateUrl: './certification-form.component.html',
  styleUrls: ['./certification-form.component.css']
})
export class CertificationFormComponent {

  certification: Certification;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private certificationService: CertificationServiceService) {
    this.certification = new Certification();
  }

  onSubmit() {
    this.certificationService.save(this.certification).subscribe(result => this.gotoCertificationsList());
  }

  gotoCertificationsList() {
    this.router.navigate(['/certifications']);
  }

  selectChangeHandler(event: any) {
    this.certification.category = event.target.value;
  }

  validy(): boolean{
    return this.certification.category === 'Select category';
  }


  selectQuarterHandler(event: any) {
    this.certification.quarter = event.target.value;
  }

  validyQuarter(): boolean{
    return this.certification.quarter === 'Select quarter';
  }

  selectStatusHandler(event: any) {
    this.certification.status = event.target.value;
  }

  validyStatus(): boolean{
    return this.certification.status === 'Select status';
  }

}

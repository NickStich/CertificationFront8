import { Component, OnInit } from '@angular/core';
import { Certification } from 'src/app/model/certification';
import { CertificationServiceService } from 'src/app/services/certification-service.service';

@Component({
  selector: 'app-certification-list',
  templateUrl: './certification-list.component.html',
  styleUrls: ['./certification-list.component.css']
})
export class CertificationListComponent implements OnInit {

  certifications: Certification[];

  constructor(private certificationService: CertificationServiceService) { }

  ngOnInit() {
    this.certificationService.findAll().subscribe(data =>
       {this.certifications = data; }) ;
  }

}

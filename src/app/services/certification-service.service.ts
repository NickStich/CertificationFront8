import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Certification } from '../model/certification';

@Injectable()
export class CertificationServiceService {

  private certificationUrl: string;

  constructor(private http: HttpClient) {
    this.certificationUrl = 'http://localhost:9999/certification';
   }

   public findAll(): Observable<Certification[]> {
    return this.http.get<Certification[]>(this.certificationUrl);
  }

  public save(certification: Certification) {
    return this.http.post<Certification>(this.certificationUrl, certification);
  }
}

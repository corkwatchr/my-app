import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';  // Still needed for service
import { Observable } from 'rxjs';
import { Person } from '../models/person';     //../models/person.model';
import { environment } from '../../environments/environment';   // ../../environments/environment';

@Injectable({ providedIn: 'root' }) // Still needed for service
export class PersonService {
  private apiUrl = environment.apiUrl + '/api/persons';

  constructor(private http: HttpClient) { } // Constructor injection

  getPersons(): Observable<Person[]> {
    return this.http.get<Person[]>(this.apiUrl);
  }
}
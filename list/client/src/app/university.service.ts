import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import {University} from './university';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Rx';


@Injectable({
  providedIn: 'root'
})
export class UniversityService {

  constructor(private http:Http) { }

//retrieving UniversityService
 // getUniversities()
  //{
    //return this.http.get('http://localhost:3000/api/').map(res => res.json().universities);
  //}
  
}

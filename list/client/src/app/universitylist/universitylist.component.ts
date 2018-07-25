import { Component, OnInit } from '@angular/core';
import {UniversityService} from '../university.service';
import {University} from '../university';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-universitylist',
  templateUrl: './universitylist.component.html',
  styleUrls: ['./universitylist.component.css'],
  providers:[UniversityService]
})
export class UniversitylistComponent implements OnInit {
  universities: any;

  constructor(private universityService:UniversityService,private route: ActivatedRoute, private http: HttpClient) { }  


  ngOnInit() {
    //this.universityService.getUniversities()
      //  .subscribe( universities => 
        //this.universities = universities); 
        this.getUniversity(this.route.snapshot.params['id']);
 
  }
  getUniversity(id) {
    this.http.get('http://localhost:3000/api/universitylist/'+id).subscribe(data => {
      this.universities = data;
    });
  }
}

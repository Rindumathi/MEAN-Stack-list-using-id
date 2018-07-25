import { Component, OnInit } from '@angular/core';
import {UniversityService} from '../university.service';
import {University} from '../university';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-singleuniversity',
  templateUrl: './singleuniversity.component.html',
  styleUrls: ['./singleuniversity.component.css']
})
export class SingleuniversityComponent implements OnInit {
  university = {};


  constructor(private universityService:UniversityService,private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.getUniversityDetail(this.route.snapshot.params['id']);

  }
  
  getUniversityDetail(id) {
    this.http.get('http://localhost:3000/api/'+id).subscribe(data => {
      this.university = data;
    });
  }
}

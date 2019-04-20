import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service'
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss']
})
export class CourseDetailComponent implements OnInit {
  course: any;
  id: any;
  constructor(private dataService: DataServiceService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
    console.log("ddddd " + this.dataService.status);
    if (this.dataService.status == "basic") {
      this.course = this.dataService.getBasicDetailCourse(this.id);

    }
    if (this.dataService.status == "standard") {
      this.course = this.dataService.getStandardDetailCourse(this.id);

    }
    if (this.dataService.status == "pri") {
      this.course = this.dataService.getPriDetailCourse(this.id);
    }
    console.log(`this.course : ${JSON.stringify(this.course)}`);
  }

}

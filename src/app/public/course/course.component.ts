import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../data-service.service'

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  courses: any = this.dataService.course;
  status: string = "basic";
  constructor(private dataService: DataServiceService) { }

  ngOnInit() {

    this.courses = this.dataService.getBasicCourse();

  }

}

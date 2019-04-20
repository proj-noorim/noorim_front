import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service'
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss']
})
export class PublicComponent implements OnInit {

  constructor(private dataService: DataServiceService, private toastr: ToastrService) { }
  status: string = "basic";

  ngOnInit() {
    this.dataService.status = "basic";
    this.dataService.course = this.dataService.getBasicCourse();
  }

  setStatus(status: string) {
    this.dataService.status = status;
    if (status == "basic") {
      this.dataService.course = this.dataService.getBasicCourse();
    }
    if (status == "standard") {
      this.dataService.course = this.dataService.getStanCourse();
    }
    if (status == "pri") {
      this.dataService.course = this.dataService.getPriCourse();
    }
    console.log(`this.dataService.course : ${this.dataService.status}`);
  }

  uploadCourse() {
    this.toastr.success('강의 등록 완료!', '성공적으로 강의를 정상 등록 하였습니다!');

  }

}

import { AfterContentChecked, Component, DoCheck, OnInit } from '@angular/core';
import { AppConstants } from 'src/app/app-constants';
import Course from 'src/app/model/Course';
import { HttpService } from 'src/app/services/http.service';
import { ResponseService } from 'src/app/services/response.service';

@Component({
  selector: 'app-mycourses',
  templateUrl: './mycourses.component.html',
  styleUrls: ['./mycourses.component.css']
})
export class MycoursesComponent implements OnInit {

  courses!: Array<Course>;
  percentages: number[] = [];
  constructor(private responseService: ResponseService, private httpService: HttpService) { }



  ngOnInit(): void {
    this.courses = this.responseService.courses;
    console.log(this.courses)
  }

  refreshCourses() {
    this.httpService.doPost(AppConstants.APIS.getCoursesByUser, this.responseService.user).subscribe((data) => {
      this.courses = data.response;
    })
  }

  randomPercentage() {

    console.log("CALLED")
    this.percentages.push(Math.floor(Math.random() * 100) + 1);
  }



}

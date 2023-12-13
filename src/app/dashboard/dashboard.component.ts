import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResponseService } from '../services/response.service';
import { AuthService } from '../services/auth.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {

  toggle: boolean = false
  showdropDown: boolean = false;
  isVisible = false;
  isOkLoading = false;
  switchValue: boolean = false;
  loading: boolean = false;
  timer: any;
  seconds: number = 0;
  formattedTime: string = '00:00:00';
  isTimerRunning: boolean = false;
  showNotification: boolean=false;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private authService: AuthService, private message: NzMessageService) { }

  ngOnInit(): void {


  }

  toggleSidebar() {
    const container = document.querySelector('.dashboardcontainer') as HTMLDivElement;
    container.classList.toggle('compressed');
    const menubutton = document.querySelector('#left-arrow') as HTMLElement;
    if (this.toggle) {
      menubutton.style.transform = "rotate(180deg)";
      this.toggle = false;

    }
    else {
      menubutton.style.transform = "rotate(0deg)";
      this.toggle = true;

    }
  }


  navigate(url: string) {
    this.router.navigate([url], { relativeTo: this.activatedRoute });
    this.hideDropDown()
  }
  externalNavigation(url: string) {
    this.router.navigate([url]);

  }

  showdropdown(className: string) {


    const dropdown = document.querySelector('.' + className) as HTMLDivElement;

    if (!this.showdropDown) {
      dropdown.style.display = "block";

    }
    else {
      dropdown.style.display = "none";
    }
    this.showdropDown = !this.showdropDown;
  }

  hideDropDown() {
    const dropdown = document.querySelector('.dropdowncontainer') as HTMLDivElement;
    dropdown.style.display = "none";
  }


  showModal(): void {
    this.isVisible = true;
  }


  handleOk(): void {
    this.isOkLoading = true;
    setTimeout(() => {
      this.isVisible = false;
      this.isOkLoading = false;
    }, 3000);

    this.externalNavigation('logout');
    this.authService.logout();
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  clickSwitch(): void {

    let sidebar = document.querySelector('.sidebar') as HTMLElement;

    let mainpage = document.querySelector('.mainpage') as HTMLElement;


    console.log(sidebar);
    if (!this.loading) {
      this.loading = true;
      setTimeout(() => {

        if (!this.switchValue) {

          this.startTimer();
        }
        else {
          this.ngOnDestroy();
        }

        this.switchValue = !this.switchValue;
        this.loading = false;
      }, 1000);
    }
  }

  startTimer() {
    if (!this.timer) {
      this.timer = setInterval(() => this.updateTimer(), 1000);
    }
    this.message.info('Start Learning..')
  }

  updateTimer() {
    this.seconds++;
    const hours = Math.floor(this.seconds / 3600);
    const minutes = Math.floor((this.seconds % 3600) / 60);
    const remainingSeconds = this.seconds % 60;


    this.formattedTime = `${this.pad(hours)}:${this.pad(minutes)}:${this.pad(remainingSeconds)}`;
  }

  pad(value: number): string {
    return value < 10 ? `0${value}` : value.toString();
  }

  toggleTimer() {
    if (this.isTimerRunning) {
      this.stopTimer();
    } else {
      this.startTimer();
    }
  }

  stopTimer() {
    clearInterval(this.timer);
    this.timer = null;
    this.isTimerRunning = false;
    this.message.warning('Timer Stopped ! Come Soon')
  }

  ngOnDestroy() {
    this.stopTimer();

  }

  showNotifications(visible:boolean) {
    this.showNotification= visible;
  }
  toggleNotification(){
    this.showNotification= !this.showNotification;

  }

 
}







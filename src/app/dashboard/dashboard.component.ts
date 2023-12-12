import { Component, DoCheck, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResponseService } from '../services/response.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  toggle:boolean=false
  showdropDown:boolean=false;

  isVisible = false;
  isOkLoading = false;
  constructor(private router:Router,private activatedRoute:ActivatedRoute,private responseService:ResponseService) { }

  ngOnInit(): void {
   // console.log("IN Dashboard "+  JSON.stringify(this.responseService.response.get('user')))

  }
 


   toggleSidebar() {
    const container = document.querySelector('.dashboardcontainer') as HTMLDivElement;
    container.classList.toggle('compressed');
    const menubutton = document.querySelector('#menuicon') as HTMLElement;
    if(this.toggle)
    {
      menubutton.style.transform="rotate(180deg)";
      this.toggle=false;
    }
    else
    {
      menubutton.style.transform="rotate(0deg)";
      this.toggle=true;
    }
}


navigate(url:string){
  this.router.navigate([url],{relativeTo:this.activatedRoute});

}
externalNavigation(url:string){
  this.router.navigate([url]);

}

showdropdown(className:string){


  this.selectedComponent();
  const dropdown= document.querySelector('.'+className) as HTMLDivElement;

  if(!this.showdropDown){
  dropdown.style.display="block";
 
  }
  else{
    dropdown.style.display="none";
  }
  this.showdropDown=!this.showdropDown;
}

selectedComponent(){


    const clickDiv: HTMLElement | null = document.querySelector('.profileimage');

    console.log(clickDiv)
    if (clickDiv) {
        clickDiv.addEventListener('click', function() {
            this.classList.toggle('raise');
        });
    }


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
  }

  handleCancel(): void {
    this.isVisible = false;
  }
}


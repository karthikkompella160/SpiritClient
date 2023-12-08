import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  toggle:boolean=false

  constructor(private router:Router) { }

  ngOnInit(): void {
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
  this.router.navigate([url]);

}

showdropdown(className:string){
  const dropdown= document.querySelector('.'+className) as HTMLDivElement;
  dropdown.style.display="block";

}
}
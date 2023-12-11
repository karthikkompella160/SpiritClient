import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  toggle:boolean=false
  showdropDown:boolean=false;

  constructor(private router:Router,private activatedRoute:ActivatedRoute) { }

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
  this.router.navigate([url],{relativeTo:this.activatedRoute});

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
}


import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

   logins: number[] = [1, 2, 3, 4, 5]; // Replace with your actual login data
   timeSpent: number[] = [10, 15, 20, 25, 30]; // Replace with your actual time spent data
   loginsChart:any;

  constructor() { }

  ngOnInit(): void {

    const ctx = document.getElementById('canvas') as HTMLCanvasElement | null;

if (ctx) {
     this.loginsChart = new Chart(ctx, {
      
        type: 'line',
        
        data: {
            datasets: [{
                label: 'Logins vs TimeSpent',
                data: this.logins.map((value, index) => ({ x: value, y: this.timeSpent[index] })),
                backgroundColor: 'black', // Adjust the color as needed
                pointRadius: 8, // Adjust the point size as needed
                hoverBackgroundColor:"green",
            }],
            xLabels:['Login Frequency'],
            yLabels:['TimeSpent']
        },
        options: {
            scales: {
                x: {
                    type: 'linear',
                    position: 'bottom',
                  
                },
                y: {
                    type: 'linear',
                    position: 'left',
                  
                }
            },
            backgroundColor:"rgb(31,41,55)"
        }
    });
}
  }

}

import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { ResponseService } from 'src/app/services/response.service';
@Component({
    selector: 'app-content',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

    logins: number[] = [1, 2, 3, 4, 5]; // Replace with your actual login data
    timeSpent: number[] = [10, 15, 20, 25, 30]; // Replace with your actual time spent data
    loginsChart: any;
    percent: number = 0;;

    constructor(private responseService: ResponseService) { }

    ngOnInit(): void {

        // console.log("IN CONTENT "+this.responseService.response)
        this.increase();

        const ctx = document.getElementById('canvas') as HTMLCanvasElement | null;

        if (ctx) {
            this.loginsChart = new Chart(ctx, {

                type: 'bar',

                data: {
                    datasets: [{
                        label: 'Logins vs TimeSpent',
                        data: this.logins.map((value, index) => ({ x: value, y: this.timeSpent[index] })),
                        backgroundColor: 'black', // Adjust the color as needed
                        hoverBackgroundColor: "green",
                    }],
                    xLabels: ['Login Frequency'],
            
                    yLabels: ['TimeSpent']
                },
                options: {
                    scales: {
                        x: {
                            type: 'linear',
                            position: 'bottom',
                            offset:true,

                        },
                        y: {
                            type: 'linear',
                            position: 'left',
                            offset:true,

                        }
                    },
                    backgroundColor: "rgb(31,41,55)"
                }
            });
        }
    }


    increase(): void {
        if (this.percent === 60) {
            return;
        }
        this.percent = this.percent + 10;
        if (this.percent > 100) {
            this.percent = 100;

        }
        this.increase();
    }

}

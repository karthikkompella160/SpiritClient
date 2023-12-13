import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  notifications: Notification[] = [];

  constructor() { }

  ngOnInit(): void {
    console.log(this.notifications.length==0)

    this.createNotification(
    'Time Running Out','You have very few hours to complete C training'
    )
    this.createNotification(
      'Timer running!!','It seems you forget to stop the timer'
      )
  }


  createNotification(title: string, content: string) {
    const notification: Notification = { title, content };
    this.notifications.push(notification);
  }

  closeNotification(index: number) {
    this.notifications.splice(index, 1);
  }

}
interface Notification {
  title: string;
  content: string;
}
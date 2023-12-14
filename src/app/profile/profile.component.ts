import { Component, OnInit } from '@angular/core';
import { ResponseService } from '../services/response.service';
import User from '../model/User';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user!: User;
  constructor(private responseService: ResponseService) { }

  ngOnInit(): void {
    this.user = this.responseService.user;
  }
}

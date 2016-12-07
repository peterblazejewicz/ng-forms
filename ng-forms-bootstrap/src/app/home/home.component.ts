import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee';

@Component({
  selector: 'frms-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  languages = ['English', 'Spanish', 'Other'];
  model = new Employee('Darla', 'Smith', true);

  ngOnInit() {
  }

}

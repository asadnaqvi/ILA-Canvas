import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error-result',
  templateUrl: './error-result.component.html',
  styleUrls: ['./error-result.component.css']
})
export class ErrorResultComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

}

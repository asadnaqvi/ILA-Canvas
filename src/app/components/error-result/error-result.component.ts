import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-error-result',
  templateUrl: './error-result.component.html',
  styleUrls: ['./error-result.component.css']
})
export class ErrorResultComponent implements OnInit {

  constructor(private location:Location) { }
goBack(){
  this.location.back()
}
  ngOnInit() {
  }

}

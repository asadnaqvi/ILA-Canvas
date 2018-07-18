import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ImageConnectorService} from '../../services/image-connector.service';
@Component({
  selector: 'app-count-objects',
  templateUrl: './count-objects.component.html',
  styleUrls: ['./count-objects.component.css']
})
export class CountObjectsComponent implements OnInit {
imagePath:string=""
  constructor(private imageConnector:ImageConnectorService,private route:ActivatedRoute) {
    
    // this.imageConnector.ActivityBaseImagePath.subscribe(path=>{
    //   this.imagePath=path;
    // });
    // this.route.paramMap.subscribe(param=>{
    //  this.imagePath =this.route.root.snapshot.data["imagePath"] //param.get("imagePath")
    // })
   }

  ngOnInit() {
    this.imagePath = this.imageConnector.imagePath
  }

}

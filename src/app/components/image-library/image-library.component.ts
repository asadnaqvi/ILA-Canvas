import { Component, OnInit } from '@angular/core';
import{Router,ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';
import {ImageConnectorService} from '../../services/image-connector.service';

@Component({
  selector: 'app-image-library',
  templateUrl: './image-library.component.html',
  styleUrls: ['./image-library.component.css']
})
export class ImageLibraryComponent implements OnInit {
LibraryImages = []
activityName:string=""
  constructor(private route:ActivatedRoute,private imageConnector:ImageConnectorService,private router:Router,private location:Location) { }
setBaseImage(path){  
this.imageConnector.setImage(path)
this.location.back()
}
  ngOnInit() {
    this.route.paramMap.subscribe(stateParams=>{
      this.activityName = stateParams.get("id")
    });
    this.LibraryImages = [{
      title:"item 1",
      path:"assets/images/library/p1.jpeg",
      avatar:"assets/images/library/p1.jpeg"
    },
    {
      title:"item 2",
      path:"assets/images/library/p2.jpeg",
      avatar:"assets/images/library/p2.jpeg"
    },
    {
      title:"item 2",
      path:"assets/images/library/p3.jpeg",
      avatar:"assets/images/library/p3.jpeg"
    },
    {
      title:"item 2",
      path:"assets/images/library/coc/p4.jpeg",
      avatar:"assets/images/library/coc/p4.jpeg"
    }
    ]
    if(this.activityName){   
    this.LibraryImages = this.LibraryImages.filter(item=>item.path.indexOf("/" + this.activityName + "/")>-1)
    }    
  }

}

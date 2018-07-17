import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-library',
  templateUrl: './image-library.component.html',
  styleUrls: ['./image-library.component.css']
})
export class ImageLibraryComponent implements OnInit {
LibraryImages = []
  constructor() { }

  ngOnInit() {
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
      path:"assets/images/library/p4.jpeg",
      avatar:"assets/images/library/p4.jpeg"
    }
    ]
  }

}

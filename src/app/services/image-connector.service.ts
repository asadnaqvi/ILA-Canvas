import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageConnectorService {
  public imagePath:string
  public ActivityBaseImagePath = new Subject<string>()
  constructor() { }
  setImage(path:string){
    this.ActivityBaseImagePath.next(path)
    this.imagePath = path
  }
}

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DragAndDropService {
  component: any;

  constructor() { }

  setComponent(component: any) {
    this.component = component;
  }

  getComponent() {
    return this.component;
  }
}

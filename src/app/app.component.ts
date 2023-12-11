import { Component, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragComponentComponent } from './drag-component/drag-component.component';
import { DragAndDropService } from './drag-and-drop.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, DragComponentComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'drag-and-drop-test';
  items: any[] = [];

  constructor(private dragAndDropService: DragAndDropService, private el: ElementRef) {
    this.el.nativeElement.addEventListener('dragover', (event: any) => {
      event.preventDefault();
    })

    this.el.nativeElement.addEventListener('drop', (event: any) => {
      event.preventDefault();
      let component = this.dragAndDropService.getComponent();
      if (event.target.id == 'drop-zone') {
        this.items.push(component);
        console.log(event.x, event.y);
      }
    })
  }
}

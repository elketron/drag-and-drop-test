import { Component, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragAndDropService } from '../drag-and-drop.service';

@Component({
  selector: 'app-drag-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './drag-component.component.html',
  styleUrls: ['./drag-component.component.css']
})
export class DragComponentComponent {

  constructor(private el: ElementRef, private dragAndDropService: DragAndDropService) {
    this.el.nativeElement.addEventListener('dragstart', (event: any) => {
      console.log(event.target.id);
      this.dragAndDropService.setComponent(event.target.id);
    })
  }
}

import { Component } from '@angular/core';
import { WidgetComponent } from './../widget/widget.component';
import { CommonModule } from '@angular/common';
import {
  CdkDragDrop,
  CdkDropList,
  CdkDrag,
  moveItemInArray,
  CdkDragStart,
  CdkDragEnd,
} from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [WidgetComponent, CommonModule, CdkDropList, CdkDrag],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss',
})
export class GridComponent {
  widgets = [
    {
      id: 1,
      type: 'widget',
      name: 'widget1',
      items: ['item1-1', 'item1-2', 'item1-3'],
    },
    {
      id: 2,
      type: 'widget',
      name: 'widget2',
      items: ['item2-1', 'item2-2', 'item2-3'],
    },
    {
      id: 3,
      type: 'widget',
      name: 'widget3',
      items: ['item3-1', 'item3-2', 'item3-3'],
    },
    {
      id: 4,
      type: 'widget',
      name: 'widget4',
      items: ['item4-1', 'item4-2', 'item4-3'],
    },
  ];
  letSubDrag = true;

  handleDragStart(event: CdkDragStart): void {
    this.letSubDrag = false;
  }
  handleDragEnd(event: CdkDragEnd): void {
    this.letSubDrag = true;
  }

  drop(event: CdkDragDrop<any>) {
    console.log('grid prev:' + event.previousIndex);
    console.log('grid current: ' + event.currentIndex);
    moveItemInArray(this.widgets, event.previousIndex, event.currentIndex);
  }
}

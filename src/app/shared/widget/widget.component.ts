import { Component, Input } from '@angular/core';
import { ItemComponent } from './../item/item.component';
import { JsonPipe, CommonModule } from '@angular/common';
import {
  CdkDragDrop,
  CdkDropList,
  CdkDrag,
  moveItemInArray,
} from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-widget',
  standalone: true,
  imports: [ItemComponent, CommonModule, JsonPipe, CdkDropList, CdkDrag],
  templateUrl: './widget.component.html',
  styleUrl: './widget.component.scss',
})
export class WidgetComponent {
  @Input() widget: any = {};
  @Input() enableDrag: boolean = true;

  drop(event: CdkDragDrop<string[]>) {
    console.log('widget prev:' + event.previousIndex);
    console.log('widget current: ' + event.currentIndex);
    moveItemInArray(this.widget.items, event.previousIndex, event.currentIndex);
  }
}

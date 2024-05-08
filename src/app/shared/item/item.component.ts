import { Component, Input } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';
@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule, JsonPipe],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss',
})
export class ItemComponent {
  @Input() item: any = '';
}

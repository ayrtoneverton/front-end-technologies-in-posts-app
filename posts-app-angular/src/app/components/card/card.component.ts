import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  confirm = false;
  @Input() title;
  @Input() description;
  @Output() view = new EventEmitter();
  @Output() edit = new EventEmitter();
  @Output() remove = new EventEmitter();
}

import { Component, EventEmitter, Input, Output, HostBinding } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() text!: string;
  @Input() theme: 'primary' | 'danger' | 'warn' | 'success' = 'primary';
  @Input() type: 'fill' | 'outline' = 'fill';
  @Input() size: 'small' | 'medium' | 'large' = 'medium'
  @Input() fontColor?: 'white' | 'black';
  @Input() disabled:boolean = false;

  @Output() onClick = new EventEmitter<Event>();


  @HostBinding('class')
  get hostClasses(): string {
    return `${this.theme} ${this.type} ${this.size} ${this.fontColor} ${this.disabled?'disabled':''}`;
  }

  handleClick(event: Event): void {
      this.onClick.emit(event);
  }
}

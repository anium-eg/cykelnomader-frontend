import { Component, forwardRef, HostBinding, Input, Optional, Self } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, NgControl, NgModel } from '@angular/forms';


@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputFieldComponent),
      multi: true
    }
  ]
})

export class InputFieldComponent implements ControlValueAccessor {

  @Input() label?:string;
  @Input() theme:'dark'|'light' = 'dark';
  @Input() type: 'fill'|'outline' = 'fill';
  @Input() control: AbstractControl | null = null; 
  @Input() hint?: string = "";
  @Input() password:boolean = false;

  @HostBinding('class')
  get hostClasses(): string {
    return `${this.theme} ${this.type}`;
  }

  onInputChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.onChange(input.value);
  }
  
  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  value:string = '';
  onChange: any = () => {};
  onTouched: any = () => {};
  validationText:string = '';


}

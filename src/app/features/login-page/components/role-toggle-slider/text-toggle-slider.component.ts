import { ChangeDetectorRef, Component, EventEmitter, HostBinding, Output } from '@angular/core';
import { UserRole } from 'src/app/shared/models/user/UserRoles';

@Component({
  selector: 'app-text-toggle-slider',
  templateUrl: './text-toggle-slider.component.html',
  styleUrls: ['./text-toggle-slider.component.scss']
})
export class TextToggleSliderComponent {

    persona: UserRole = 'Cashier';

    @Output() personaChanged = new EventEmitter<UserRole>()
  
    personaSelected(selectedPersona: UserRole): void {
      this.persona = selectedPersona;
      this.personaChanged.emit(this.persona);
    }
  
}



import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-order-step-2',
  templateUrl: './new-order-step-2.component.html',
  styleUrls: ['./new-order-step-2.component.scss']
})

export class NewOrderStep2Component {
  constructor(private router:Router){

  }

  onBack:Function = ():void => {
    this.router.navigateByUrl("portal/cashier/new-order/step-1")
  }

  onNext:Function = ():void => {
    this.router.navigateByUrl("portal/cashier/new-order/step-3")
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-order-step-1',
  templateUrl: './new-order-step-1.component.html',
  styleUrls: ['./new-order-step-1.component.scss']
})
export class NewOrderStep1Component {
  constructor(private router:Router){

  }
  onNext:Function = ():void =>{
    console.log("Nexted");
    this.router.navigateByUrl('/portal/cashier/new-order/step-2')
  }
}

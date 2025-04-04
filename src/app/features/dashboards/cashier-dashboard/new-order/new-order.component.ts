import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.scss'],
})
export class NewOrderComponent {
  currentRoute:string|undefined;
  constructor(private router:Router){
    this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe(() => this.currentRoute = router.url.split('/').pop());
    this.currentRoute = router.url.split('/').pop();

    // this.router.navigateByUrl("portal/cashier/new-order/step-1")
  }
}

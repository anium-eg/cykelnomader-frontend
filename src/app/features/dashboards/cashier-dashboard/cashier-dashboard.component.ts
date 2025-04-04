import { Component } from '@angular/core';
import { ActionItem } from '../shared/dashboard-sidebar/dashboard-sidebar.component';

@Component({
  selector: 'app-cashier-dashboard',
  templateUrl: './cashier-dashboard.component.html',
  styleUrls: ['./cashier-dashboard.component.scss']
})
export class CashierDashboardComponent {
  actionItems:ActionItem[]= [
    {
      logo:"/assets/images/dashboard/cashier/actions/NewOrder.svg",
      link:"/portal/cashier/inventory",
      text:"New Order",
      isActive:true
    },
    {
      logo:"/assets/images/dashboard/cashier/actions/GenerateReciept.svg",
      link:"/portal/cashier/reciept",
      text:"Generate Reciept",
      isActive:false
    },
    {
      logo:"/assets/images/dashboard/cashier/actions/UpdateOrder.svg",
      link:"/portal/cashier/update-order",
      text:"Update Order Status",
      isActive:false
    },
  ]
}
